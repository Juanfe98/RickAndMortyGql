import './Card.css'

function Card(props){
  const {title, image} = props;

  return (
    <div className="characterCard">
      <img src={image} alt='Character avatar'/>
      <div className="contentBox">
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default Card