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

    type Mutation {
        createUser: User!
    }

    enum Nationality{
        AMERICAN
        INDIAN
        PAKISTHANI
    }
`;

module.exports = {typeDefs};