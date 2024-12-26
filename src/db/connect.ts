import mongoose from 'mongoose';
export const connectDb = (url: string) => {
  return mongoose
    .connect(url)
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.log(err));
};
