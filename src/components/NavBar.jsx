import React from 'react'
import CartWidget from './CartWidget'
import './styles.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='divNavbar'>
        <header className='navbar'>
            <Link to="/">
              <h2 className='logo'>JT Yôga</h2>
            </Link>
            <nav>
                <ul>
                    <li><Link to={`/categoria/clases`}>Clases</Link></li> 
                    <li><Link  to={`/categoria/cursos`}>Formación</Link></li> 
                    <li><Link  to={`/categoria/actividades`}>Actividades</Link></li> 
                </ul>
            
            </nav>
            
            <CartWidget></CartWidget>
        </header>
    </div>
  )
}

export default NavBar