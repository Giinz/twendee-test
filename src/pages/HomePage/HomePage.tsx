import "./HomePage.scss"
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <Link className='HomePage' to="/1">Get User List</Link>
  )
}

export default HomePage