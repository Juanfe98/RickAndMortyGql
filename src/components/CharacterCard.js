import React, {useState} from 'react';
import { Modal } from './Modal';

export function CharacterCard(props) {
  const {id, image, name, status, species, gender, location, episode} = props.data;

  const [show, setShow] = useState(false);

  return (
    <div className="card" key={id} onClick={() => setShow(true)}>

    <Modal onClose={() => setShow(false)} show={show} episodes={episode} name={name} />
    
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
  );
}