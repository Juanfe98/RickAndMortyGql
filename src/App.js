import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import "./components/shared/globalStyles.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Characters from "./components/Characters/Characters";
import { Locations } from "./components/Locations/Locations";
import { Episodes } from "./components/Episodes/Episodes";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Navbar />
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <Characters />
            </Route>
            <Route path="/locations">
              <Locations />
            </Route>
            <Route path="/episodes">
              <Episodes />
            </Route>
          </Switch>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
