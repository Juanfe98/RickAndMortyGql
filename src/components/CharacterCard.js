import React, {useState} from 'react';
import { Modal } from './Modal';

export function CharacterCard(props) {
  const {id, image, name, status, species, gender, location, episode: espisodes} = props.data;

  const [show, setShow] = useState(false);
  const [characterEpisodes,setCharacterEpisodes] = useState([]);

  // Esta implementación estuvo la verdad, complicada. 
  // Intentare dejar las cosas explicadas
  const loadCharacterEpisodes = () => {
    console.log("🚀 ~ file: CharacterCard.js:13 ~ loadCharacterEpisodes ~ loadCharacterEpisodes");
    const promisesList = espisodes.map(episode => {
      return fetch(episode).then(response => response.json());
    });
    Promise.all(promisesList).then((results) => {
      setCharacterEpisodes(results);
      setShow(true);
    });
  };

  // Different implementation using async - await
  const loadCharacterEpisodes2 = async () => {
    const promisesList = espisodes.map(episode => {
      return fetch(episode).then(response => response.json());
    });
    const results = await Promise.all(promisesList)
    setCharacterEpisodes(results);
    setShow(true);
  };

  return (
    <>
    <div className="card" key={id} onClick={loadCharacterEpisodes} onDoubleClick={loadCharacterEpisodes2}>
    
      <div className="image">
        <img  className="charImg" src={image} alt='character'/>
      </div>
    
      <div className="details">
          <h3> <span className="customColorId"> #{id} </span>{name}</h3>
          <h4>{status} - {species} - {gender}</h4>
          <p>Last known location:</p>
          <span className="customLocation"><p>{location.name}</p></span>
          <p>First seen in:</p>
          <span className="customColorEpisode"><p>{espisodes[0]}</p></span>
      </div>
    
    </div>
    <Modal onClose={() => setShow(false)} show={show} title={name}> 
      <ul>
        {characterEpisodes.map(episode => (
          <li key={episode.id}>{episode.name} - Emitido: {episode.air_date}</li>
        ))}
        <li> Episode name - data</li>
      </ul>
    </Modal>
    </>
  );
}