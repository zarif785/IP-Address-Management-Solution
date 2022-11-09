import {Link} from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div className="navbar">
        <h2>IP Address Manager</h2>
        <div className="links">
            <Link to='/'>Home</Link>
            <Link to='/create'> Add IP</Link>
            <Link to='/show'>My IP</Link>
        </div>
    </div>
  )
}

export default NavigationBar