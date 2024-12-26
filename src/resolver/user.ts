import bcrypt from 'bcryptjs';
import { User } from '../models/user';

export interface Args {
  id: string;
  username: string;
  email: string;
  password: string;
}

export const UsersResolver = {
  Query: {
    users: async () => {
      try {
        const users = await User.find({});
        if (!users || users.length === 0) {
          throw new Error('No users found');
        }
        return {
          success: true,
          total: users.length,
          users,
        };
      } catch (err) {
        throw new Error('Failed to fetch users');
      }
    },

    user: async (_: any, { id }: Args) => {
      try {
        if (!id) throw new Error('Please provide a user id');
        const user = await User.findById(id);
        if (!user) throw new Error('User not found');
        return user;
      } catch (err) {
        throw new Error('Failed to fetch user');
      }
    },
  },

  Mutation: {
    regUser: async (_: any, { username, email, password }: Args) => {
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) throw new Error('User already exists');

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
          username,
          email,
          password: hashedPassword,
        });
        return newUser;
      } catch (err) {
        console.error(err);
        throw new Error('Failed to register user');
      }
    },

    loginUser: async (_: any, { email, password }: Args) => {
      try {
        const user = await User.findOne({ email });
        if (!user) throw new Error('User not found');

        const isValid = await user.isValidPassword(password); // Ensure this method exists
        if (!isValid) throw new Error('Invalid password');

        return user;
      } catch (err) {
        throw new Error('Failed to login user');
      }
    },

    updateUser: async (_: any, { id, ...updateFields }: Args) => {
      try {
        if (!id) throw new Error('Please provide a user id');
        const updatedUser = await User.findByIdAndUpdate(id, updateFields, {
          new: true,
          runValidators: true,
        });
        if (!updatedUser) throw new Error('User not found');
        return updatedUser;
      } catch (err) {
        throw new Error('Failed to update user');
      }
    },

    deleteUser: async (_: any, { id }: Args) => {
      try {
        if (!id) throw new Error('Please provide a user id');
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) throw new Error('User not found');
        return {
          success: true,
          message: 'User deleted successfully',
          id: deletedUser._id,
        };
      } catch (err) {
        throw new Error((err as any) || 'Failed to delete user');
      }
    },
  },
};
