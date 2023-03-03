import './Navbar.css'
import { Link } from 'react-router-dom'

export default function navbar() {
  return (
    <div className='navbar'>
        <nav>
            <Link to='/' className='brand'>
                <h1>Home</h1>
            </Link>
            <Link to='/create'>
                create receipe
            </Link>
        </nav>
      
    </div>
  )
}
