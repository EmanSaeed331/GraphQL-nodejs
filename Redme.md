# CRUD Operations with TypeScript , NodeJs , MongoDB and GraphQl 
This project demonstrates the implementation of CRUD (Create, Read, Update, Delete) operations for managing users and products using TypeScript, Node.js, and GraphQL. The application uses MongoDB as the database and Apollo Server for handling GraphQL queries and mutations.


## Features 
 - User Management:
   - Create a new user
   - Retrieve all users
   - Update user details
   - Delete a user

- Product Management:
   - Create a new product
   - Retrieve all 
   - Update product details
   - Delete a 
   
## Technologies Used
  - Node.js: Backend runtime environment
  - TypeScript: Type-safe JavaScript
  - GraphQL: API query language
  - Apollo Server: GraphQL server
  - MongoDB: NoSQL database
  - Mongoose: ODM for MongoDB

## Installation 
1. Clone The Repo 
```
git clone https://github.com/EmanSaeed331/GraphQL-nodejs.git
cd GraphQL-nodejs
```

2.Install dependencies:
```
npm install
```

3.Set up environment variables:
Create a .env file in the root directory and add the following:
```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

4.Start the development server:
```
npm run dev
```

## Endpoints
After starting the server, you can access the GraphQL playground at:

```
http://localhost:3000/graphql
```
## Example GraphQL Queries and 


### *User Queries*
 - Get All Users : 
    ```GraphQl
            query {
        users {
            success
            total
            users {
            id
            username
            email
            }
            }
        }
    ```
###  *User Mutations*
 - Create User 
    ```GraphQl
        mutation {
        regUser(username: "Test", email: "Test@example.com", password: "passTest") {
            id
            username
            email
        }
    }
    ```
  - Update User 
    ```GraphQl 
                mutation {
        updateUser(id: "<USER_ID>", username: "JaneDoe") {
            id
            username
            email
        }
        }
    ```
  - Delete User 
    ```GraphQl 
                mutation {
        deleteUser(id: "<USER_ID>") {
            success
            message
            id
        }
        }
    ```

### *Product Queries*
 - Get All Products :
    ```GraphQl
        query {
    products {
        success
        total
        products {
        id
        name
        price
        }
    }
    }
    ```
### *Product Mutations*
- Create Product

    ```GraphQl
            mutation {
        addProduct(name: "Laptop", price: 1200) {
            id
            name
            price
            }
        }
    ```
- Update Product 
    ```GraphQl 
            mutation {
    updateProduct(id: "<PRODUCT_ID>", name: "Gaming Laptop") {
        id
        name
        price
        }
    }
    ```

- Delete Product 
    ```GraphQl
        mutation {
        deleteProduct(id: "<PRODUCT_ID>") {
            success
            message
            id
          }
        }
    ```
### Contributing

Feel free to fork this repository and submit pull requests with improvements or bug fixes.