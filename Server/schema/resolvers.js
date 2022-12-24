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
    },
    User: {
        favouriteMovies: () =>{
            return _.filter(MovieList, (movie) =>
                movie.yearOfPublication >= 2010 && movie.yearOfPublication <= 2017
            );
        },
    },
    Mutation: {
        createUser: (parent, args) =>{
            const user = args.input;
            let LastId = UserList[UserList.length -1].id;
            user.id = LastId + 1;
            UserList.push(user);
            return user;
            // console.log(user)
            
        },
        updateUserName: (parent, args) =>{
            // const id = args.input.id;
            // const newUserName = args.input.newUserName;
            const { id, newUserName } = args.input;
            let userUpdated;
            UserList.forEach((user) => {
                if(user.id === parseInt(id)){
                    user.name = newUserName;
                    userUpdated = user;
                }
            });
            return userUpdated;
            
        },
        deleteUser: (parent, args) =>{
            const id  = args.id;
            console.log("fgg",id)
            // let userDeleted;
            _.remove(UserList, (user) => ( user.id === Number(id)));
            // console.log(userDeleted)
            return null;
          
        },
    },
};

module.exports = {resolvers};