import { mergeTypeDefs } from '@graphql-tools/merge';
import { productGQLSchema } from './products';
import { usersGQLSchema } from './user';

export const mergedGQLSchema = mergeTypeDefs([
  usersGQLSchema,
  productGQLSchema,
]);
