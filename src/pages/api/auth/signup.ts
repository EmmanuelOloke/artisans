import { NextApiRequest, NextApiResponse } from 'next';
import { hash } from 'bcryptjs';
import { connectToMongoDB } from 'lib/mongodb';
import User from 'models/user';
import { IUser } from 'types';
import mongoose from 'mongoose';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectToMongoDB().catch((err) => res.json(err));

  try {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

    if (!req.body) return res.status(400).json({ error: 'Data is missing' });

    const { fullName, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) return res.status(409).json({ error: 'User Already exists' });

    if (password.length < 6)
      return res.status(409).json({ error: 'Password should be 6 characters long' });

    const hashedPassword = await hash(password, 12);

    const user = await User.create({ fullName, email, password: hashedPassword });

    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export default handler;
