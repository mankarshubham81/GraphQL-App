import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import DisplayData from './Components/DisplayData';
import MovieData from './Components/MovieData';
import MovieSearch from './Components/MovieSearch';


function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql"
  });

  return (
    <ApolloProvider client={client} >
      <div className="App">
        {/* <CreateNewUser/> */}
        <h1>List of Users</h1>
        <DisplayData/>
        <h1>List of Movies</h1>
        <MovieData/>
        <h1>Result of Movie Search</h1>
        <MovieSearch/>
        <h1>Search A Movie</h1>
        <h1>Result of Movie Search</h1>
      </div>
    </ApolloProvider>
    );
  
}

export default App;
