import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { CHARACTERS_QUERY } from "../../graphql/charactersResquest";
import Card from '../UI/InformationCards/Card/Card'
import Loader from '../UI/Loader/Loader';
import { For } from "../shared/For";
import './Characters.css'

function Characters() {

  const [characters, setCharacters] = useState([]);
  
  const page = 5
  const { data, loading, error ,fetchMore } = useQuery(CHARACTERS_QUERY, {
    variables: { page: page }
  });
  
  useEffect(() => {
    if(data){
      setCharacters(data.characters.results);
    }
  },[data])
    
  if (loading) return <Loader />;
  if (error) console.log(error, "error get info")
  return (
    <>
      <section className="charactersSection">
          <For of={characters} body={(character, index) => <Card characterInfo={character} key={index} />} />
      </section>
    </>
  )
}

export default Characters;