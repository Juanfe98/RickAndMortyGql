import React, { useEffect, useState } from 'react';
// import './App.css';
import './styles.css'
import Spinner from './components/Spinner';
import {CharacterCard} from './components/CharacterCard';




function App() {
  const [data, setData] = useState(null);
  const [spinner, setSpinner] = useState(false);

  useEffect( () => {
    setSpinner(true);
    fetch(`https://rickandmortyapi.com/api/character
    `)
    .then ( (response) => response.json())
    .then ( ({results}) => {
      setData(results);

      console.log(results);
    })
    .finally (() => {
        setSpinner(false);
    })
    console.log("executed");
  }, []);

  if (spinner) {
    return (<Spinner />);
  }
  
  return (
      <>
        <div className="box">
        {data && data.map((item) => (
           <CharacterCard key={item.id} data={item} />
        ))}
        </div>
      </>
        
  );
}

export default App;
