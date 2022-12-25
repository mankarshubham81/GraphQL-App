import React from 'react';
import {useQuery, gql} from '@apollo/client';

  const QUERY_ALL_Movies = gql`
      query getMovie {
        movies {
            id
            isInTheater
            name
            yearOfPublication
        } 
    }
  `;
function MovieData() {
    const {data: movieData, loading, error} = useQuery(QUERY_ALL_Movies);
    
    if(loading){
        return <h1>MovieList is loading</h1>;
    }
    
    
    if(movieData){
        console.log("movieData is : ", movieData);
    }
    if(error){
        console.log("Throwing Movie error : ", error);
    }
  return (
    <div>
        { movieData && movieData.movies.map((movie) => {
            return <div key={movie.id}>
                <h2>Movie Name    : {movie.name}</h2>
                <h4>is In Theater   : {movie.isInTheater ? "YES" : "No"}</h4>
                <h4>year Of Publication    : {movie.yearOfPublication}</h4>
            </div>
        })}
        
    </div>
  );
}

export default MovieData;