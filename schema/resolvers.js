const { UserList, MovieList } = require('../schema/FakeData');
const _ = require("lodash");

const resolvers = {
    Query: {
        // USER RESOLVERS
        users: () => {
            return UserList;
        },
        user: (parent, args) => {
            const requestId = args.id;
            const user = _.find(UserList, {id: parseInt(requestId)} );
            return user;
        },
        // MOVIE RESOLVERS
        movies: () => {
            return MovieList;
        },
        movie: (parent, args) => {
            const requestName = args.name;
            const MovieName = _.find(MovieList, {name: requestName} );
            return MovieName;
        },
        // User: {
        //     favouriteMovies: () =>{
        //         return _.filter(MovieList, (movie) =>
        //             movie.yearOfPublication >= 2001 && movie.yearOfPublication <= 2022
        //         );
        //     },
        // },
    },
};

module.exports = {resolvers};