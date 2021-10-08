import './Navbar.css'

function NavBar(){
  return(
    <nav className='navBar'>
      <div className='rightSection'>
        <h2>Rick and morty API</h2>
      </div>
      <div>
        <ul>
          <li> <a href="#">Characters</a> </li>
          <li> <a href="#">Episodes</a> </li>
          <li> <a href="#">Universes</a> </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;