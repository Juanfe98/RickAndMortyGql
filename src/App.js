import React, { useEffect, useState } from 'react';
import './App.css';
import './styles.css'




function App() {
  const [data, setData] = useState(null);

  useEffect( () => {
    fetch(`https://rickandmortyapi.com/api/character
    `)
    .then ( (response) => response.json())
    .then ( ({results}) => {
      setData(results);
      console.log(results);
    })
    console.log("executed");
  }, []);
  return (
      <>
        <div className="box">
        {data && data.map(({id, name, status, image, species, gender, location, episode}) => (
            <div className="card" key={id}>
              

                <div className="image">
                  <img  className="charImg" src={image} />
                </div>

                <div className="details">

                    <h3> <span className="customColorId"> #{id} </span>{name}</h3>
                    <h4>{status} - {species} - {gender}</h4>
                  
                    

                      <p>Last known location:</p>
                      <span className="customLocation"><p>{location.name}</p></span>
                      <p>First seen in:</p>
                      <span className="customColorEpisode"><p>{episode[0]}</p></span>
                   

                </div>

            </div>

        ))}
        </div>
      </>
  );
}

export default App;
