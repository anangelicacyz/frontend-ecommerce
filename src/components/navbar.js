import '../stylesheets/navbar.css'
import { Link } from 'react-router-dom'

function Navbar(){
  return(
    <div className="navbar">
      <div className="infobar">
          <div>
            <p>+523338900940</p>
          </div>
          <div>
            <p>Get 50% Off on Selected Items |  Shop Now!</p>
          </div>
          <div>
            <p><select name= 'language'>
                <option value= 'english'>English</option>  
                <option value= 'español'>Español</option>
              </select>
            </p>
            <p>
              <select name='location'>
                <option value= 'usa'>USA</option>
                <option value= 'mexico'>México</option>
                <option value='colombia'>Colombia</option>
              </select>
            </p>
          </div>
      </div>
      <nav>
        <div>
          <div>
            <Link to= {'/'}>
              <img className= 'logo' src={require('../assets/logo.png')} alt='logo'/>
            </Link>
          </div>
          <div>
            <select className='categories' name= 'categories'>
              <option>Categories</option>
              <option value='serums'>Serums</option>
              <option value= 'pfs'>Proteccion Solar</option>
              <option value= 'cremas'>Cremas</option>
            </select>
            <p>
              Deals
            </p>
            <p>
              What´s new
            </p>
            <p>
              Delivery
            </p>
          </div>
        </div>
        <div>
          <input type='text' className='searchInput' placeholder= 'Seach product'/>
          <div className='rightOpc'>
            <img className='iconNavbar' src= {require('../assets/user.png')} />
          </div>
          <div className='rightOpc'>
            <Link to= {'/cart'} >
              <img className='iconNavbar' src= {require('../assets/carrito-de-compras.png')} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar