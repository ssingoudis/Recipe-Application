import { Link } from 'react-router-dom'

// styles
import './Navbar.css'

// components
import Searchbar from './Searchbar'

export default function navbar() {
  return (
    <div className='navbar'>
        <nav>
            <Link to='/' className='brand'>
                <h1>Home</h1>
            </Link>
            <Searchbar />
            <Link to='/create'>
                create receipe
            </Link>
        </nav>
      
    </div>
  )
}
