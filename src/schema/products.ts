import { buildSchema } from 'graphql';

export const productGQLSchema = buildSchema(`
    type Product {
        id: ID!
        name: String!
        price: Int!
        }

        type Query {
            products: productsInfoResponse!
            product(id: ID!): Product!
        }
        
        type productsInfoResponse {
            success: Boolean!
            total: Int!
            products: [Product!]!
        }

        type Mutation {
            addProduct(name: String! , price: Int!): Product!
            updateProduct(id: ID!, name: String, price: Int): Product!
            deleteProduct(id: ID!): deleteResponse!
        }
    type deleteResponse{
        success: Boolean!
        message: String!
        id: String!
    }
    `);
