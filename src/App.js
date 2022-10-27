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

  }, []);
  return (
      <>
        <div className="box">
        {data && data.map(({id, name, status, image, species, gender, location, episode}) => (
            <div className="card" key={id}>
              <div className="container">

                <div className="image">
                  <img  className="charImg" src={image} />
                </div>

                <div className="details">
                  <h2>#{id} {name}</h2>
                  <h3>{status}-{species}-{gender}</h3>
                  <p>Last known location:</p>
                  <strong>{location.name}</strong>
                  <p>First seen in:</p>
                  <p>{episode[0]}</p>

                </div>

              </div>

            </div>

        ))}
        </div>
      </>
  );
}

export default App;
