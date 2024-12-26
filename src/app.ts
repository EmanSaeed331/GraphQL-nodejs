import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import dotenv from 'dotenv';
import { connectDb } from './db/connect';
import { resolvers } from './resolver';
import { mergedGQLSchema } from './schema';

dotenv.config();

const PORT = parseInt(process.env.PORT || '3000', 10);

const server = new ApolloServer({
  typeDefs: mergedGQLSchema,
  resolvers,
  introspection: true, // Enable introspection for development or testing purposes
});

const start = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not defined in the environment variables.');
    }

    // Connect to the database
    await connectDb(process.env.MONGO_URI);
    console.log('Connected to the database.');

    // Start the Apollo Server
    const { url } = await startStandaloneServer(server, {
      listen: { port: PORT },
    });
    console.log(`Server is running at ${url}`);
  } catch (error) {
    console.error('Error starting the server:', error);
  }
};

start();
