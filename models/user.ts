import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email address'], // Regex to check if email provided is valid
  },
  fullName: {
    type: String,
    required: [true, 'Fullname is required'],
    minLength: [4, 'Fullname should be at least 4 characters long'],
    maxLength: [30, 'Fullname should be less than 30 characters'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    select: false, // For security, this field will not be queried from the database, so as not to expose user password
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// If there is an existing User model, use it, else create a new one
const User = models.User || model('User', UserSchema);

export default User;
