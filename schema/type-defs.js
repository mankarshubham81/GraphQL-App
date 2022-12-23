const {gql} = require("apollo-server");


const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        userName: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favouriteMovies: [Movie]
    }

    type Movie {
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheater: Boolean!
    }
     
    type Query {
        users: [User!]!
        user(id: ID!): User
        #User:[user]
        movies: [Movie!]!
        movie(name: String!): Movie!
    }

    input createUserInput {
        name: String!
        userName: String!
        #in input type we can define default value like below
        age: Int
        nationality: Nationality = Indian
    }

    type Mutation {
        createUser(input: createUserInput!): User!
    }

    enum Nationality{
        AMERICAN
        INDIAN
        PAKISTHANI
    }
`;

module.exports = {typeDefs};