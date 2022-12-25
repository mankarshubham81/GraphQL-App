import React, { useState } from 'react';
import { useLazyQuery, gql} from '@apollo/client';

  const GET_MOVIE_BY_NAME = gql`
        query getMovieByName($name: String!){
            movie(name: $name) {
                isInTheater
                name
                yearOfPublication
                id
            }
        }
  `;
function MovieSearch() {
    const [movieSearched, setMovieSearched] = useState("");

    // const {data: movieData, loading, error} = useQuery(QUERY_ALL_Movies);
    const [fetchMovie, {data: movieSearchedData, error : movieSearchedError}] = useLazyQuery(GET_MOVIE_BY_NAME);
    
    // if(loading){
    //     return <h1>MovieList is loading</h1>;
    // }
    
    
    if(movieSearchedError){
        console.log("movieSearchedError ", movieSearchedError);
    }
    // if(error){
    //     console.log("Throwing Movie error : ", error);
    // }
        console.log("Throwing Movie : ", movieSearched);

  return (
    <div>
        <input type="text" placeholder='Enter Movie Name...' onChange={(event) => {
            setMovieSearched(event.target.value)
            console.log("event.target.value", event.target.value)
            }}/>
        <button
         onClick={() => {
            fetchMovie({variables: {
            name: movieSearched,
        }});
        }}
        >
        {" "} Fetch data
        </button>
        <div>

        </div>
        <div>
            {movieSearchedData && <div>
                    {console.log("movieSearched movieSearched ; ", movieSearchedData)}
                    <h1>Movie id : {movieSearchedData.movie.id}</h1> 
                    <h1>Movie Name : {movieSearchedData.movie.name}</h1>
                    <h1>Is In Theater : {movieSearchedData.movie.isInTheater ? "YES" : "No"}</h1>
                    <h1>Year Of Publication : {movieSearchedData.movie.yearOfPublication}</h1>
                </div> 
            }
            {movieSearchedError && 
                <h1 style={{color: "red"}}>This Movie Name Record is Not Avalible</h1>

            }
        </div>
                {/* // { movieData && movieData.movies.map((movie) => { */}
                {/* //     return <div key={movie.id}>
                //         <h2>Movie Name    : {movie.name}</h2>
                //         <h4>is In Theater   : {movie.isInTheater ? "YES" : "No"}</h4>
                //         <h4>year Of Publication    : {movie.yearOfPublication}</h4>
                //     </div>
                // })} */}
        
    </div>
  );
}

export default MovieSearch;