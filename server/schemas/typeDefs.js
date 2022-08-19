const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String
    savedBooks: [Book]
  }

  type Book {
    bookId: String
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
  }

  type Query {
    me: User
  }
  
  type Auth {
    token: ID!
    user: User
  }
  input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }
   
  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth 
    saveBook(bookData: BookInput!): User
    deleteBook(bookId: ID!): User
    
  }
`;

module.exports = typeDefs;
