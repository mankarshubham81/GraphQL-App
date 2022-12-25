const UserList = [
    {
        id: 1,
        name: "RAM",
        userName: "RAM KUMAR",
        age: 38,
        nationality: "INDIAN",
        friends:[
            {
                id: 2,
                name: "SHIVA",
                userName: "SHIV KUMAR",
                age: 22,
                nationality: "AMERICAN"
            },
            {
                id: 3,
                name: "Shyam",
                userName: "SHYAM KUMAR",
                age: 23,
                nationality: "INDIAN"
            }
        ]
    },
    {
        id: 2,
        name: "SHIVA",
        userName: "SHIV KUMAR",
        age: 22,
        nationality: "AMERICAN",
    },
    {
        id: 3,
        name: "Shyam",
        userName: "SHYAM KUMAR",
        age: 23,
        nationality: "INDIAN",
        friends:[
            {
                id: 4,
                name: "Krishna",
                userName: "Krishna KUMAR",
                age: 18,
                nationality: "AMERICAN"
            }
        ]
    },
    {
        id: 4,
        name: "Krishna",
        userName: "Krishna KUMAR",
        age: 18,
        nationality: "AMERICAN"
    }

];

const MovieList = [
    {
        id: 1,
        name: "A Beautiful Mind",
        yearOfPublication: 2002,
        isInTheater: true,
    },
    {
        id: 2,
        name: "Shutter Island",
        yearOfPublication: 2010,
        isInTheater: true,
    },
    {
        id: 3,
        name: "Inception",
        yearOfPublication: 2018,
        isInTheater: false,
    },
    {
        id: 4,
        name: "Revenant",
        yearOfPublication: 2016,
        isInTheater: true,
    }

];

module.exports = { UserList, MovieList};