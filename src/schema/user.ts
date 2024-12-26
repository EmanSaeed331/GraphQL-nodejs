import { buildSchema } from 'graphql';

export const usersGQLSchema = buildSchema(`
    type User {
        id: ID!
        username: String!
        email: String!
        password: String!
    }

    type Query {
        users: UserInfoResponse!
        user(id: ID!): User!
    }

    type UserInfoResponse {
        success: Boolean!
        total: Int!
        users: [User!]!
    }

    type Mutation {
        regUser(username: String!, email: String!, password: String!): User!
        loginUser(email: String!, password: String!): User!
        updateUser(id: String!, username: String, email: String, password: String): User!
        deleteUser(id: String!): DeleteResponse!
    }

    type DeleteResponse {
        success: Boolean!
        message: String!
        id: String!
    }
`);
