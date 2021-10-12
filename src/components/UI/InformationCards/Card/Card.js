import './Card.css'

function Card(props){
  console.log("🚀 ~ file: Card.js ~ line 4 ~ Card ~ props", props)
  const {name, image, species, status, type, gender} = props.characterInfo;

  return (
    <div className="characterCard">
      <img src={image} alt='Character avatar'/>
      <div className="contentBox">
        <h2>{name}</h2>
      </div>
      <div className='contentDetails'>
        <h3>Character Information</h3>
        <ol>
          <li>Specie: {species}</li>
          <li>Status: {status}</li>
          <li>Type: {type || 'unknown'}</li>
          <li>Gender: {gender}</li>
        </ol>
      </div>
    </div>
  )
}

export default Card