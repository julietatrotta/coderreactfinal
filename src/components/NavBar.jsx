import React from 'react'
import CartWidget from './CartWidget'
import './styles.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='divNavbar'>
        <header className='navbar'>
            <Link to="/">
              <h2 className='logo'>JT Lifestyle</h2>
            </Link>
            <nav>
                <ul>
                    <li><Link to={`/categoria/Clases`}>Clases</Link></li> 
                    <li><Link  to={`/categoria/Cursos`}>Formación</Link></li> 
                    <li><Link  to={`/categoria/Actividades`}>Actividades</Link></li> 
                </ul>
            
            </nav>
            
            <CartWidget></CartWidget>
        </header>
    </div>
  )
}

export default NavBar