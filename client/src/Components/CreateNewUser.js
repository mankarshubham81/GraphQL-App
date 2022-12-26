import React, { useState } from 'react';
import { gql, useMutation} from '@apollo/client';


  const CREATE_USER_MUTATION = gql`
    mutation CreateUserr($clientInput: createUserInput!){
        createUser(input: $clientInput) {
            id
            name
            age
            nationality
            userName 
        }
    }
  `;

function CreateNewUser({refetch}) {

const [name, setname] = useState("");
const [userName, setUserName] = useState("");
const [age, setAge] = useState(0);
const [nationality, setNationality] = useState("");


const [ createdUser ] = useMutation(CREATE_USER_MUTATION);

  
return (
    <div>
        <input type="text" placeholder='Enter Name...' onChange={(event) => {
            setname(event.target.value)
            console.log("event.target.value", event.target.value)
        }}/>
        <input type="text" placeholder='Enter User Name...' onChange={(event) => {
            setUserName(event.target.value)
            console.log("event.target.value", event.target.value)
        }}/>
        <input type="number" placeholder='Enter Age...' onChange={(event) => {
            setAge(event.target.value)
            console.log("event.target.value", event.target.value)
        }}/>
        <input type="text" placeholder='Enter Nationality...' onChange={(event) => {
            setNationality(event.target.value.toUpperCase())
            console.log("event.target.value", event.target.value)
        }}/>
        
        <button
         onClick={() => {
            createdUser({
            variables: {
                clientInput : 
                {
                    name: name,
                    userName: userName,
                    age: Number(age),
                    nationality: nationality
                }
            }
        });
        refetch();
        }}
        >
        Create New User
        </button>
    </div>
    
  )
}

export default CreateNewUser;




// function MovieSearch() {
    
    
    
//     if(movieSearchedError){
//         console.log("movieSearchedError ", movieSearchedError);
//     }
//     // if(error){
//     //     console.log("Throwing Movie error : ", error);
//     // }
//         console.log("Throwing Movie : ", movieSearched);

//   return (
//   );
// }
