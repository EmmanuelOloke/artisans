import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email address'], // Regex to check is email provided is valid
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
});

// If there is an existing User model, use it, else create a new one
const User = models.User || model('User', UserSchema);

export default User;
