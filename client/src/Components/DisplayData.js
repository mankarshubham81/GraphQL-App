import React from 'react'
import {useQuery, gql} from '@apollo/client';

const QUERY_ALL_USERS = gql`
    query getAllUsers{
        users {
            id
            name
            userName
            age
            nationality
        }
    }
`;


function DisplayData() {
    const {data, loading, error} = useQuery(QUERY_ALL_USERS);

    if(loading){
        return <h1>MovieList is loading</h1>;
    }

    
    if(data){
        console.log("data is : ", data);
    }
    if(error){
        console.log("THrowing error : ", error);
    }
  return (
    <div>
        { data && data.users.map((user) => {
            return <div key={user.id}>
                <h2>Name    : {user.name}</h2>
                <h4>User Name   : {user.userName}</h4>
                <h4>User Age    : {user.age}</h4>
                <h4>Nationality : {user.nationality}</h4>
                {/* <h1>{user.name}</h1> */}

            </div>
        })}
        
    </div>
  );
}

export default DisplayData;

