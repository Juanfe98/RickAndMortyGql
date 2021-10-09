import './App.css'
import Navbar from './components/Navbar/Navbar';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Characters from './components/Characters/Characters';

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
});

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Navbar />  
      <div className="App">
        <Characters/>
      </div>
    </ApolloProvider>
    </>
  );
}

export default App;
