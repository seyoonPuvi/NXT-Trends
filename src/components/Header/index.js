// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="nav-bar-cont">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="Nxtwave-logo"
    />
    <ul className="link_cont">
      <li>
        <Link to="/" className="link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/Products" className="link">
          Product
        </Link>
      </li>
      <li>
        <Link to="/cart" className="link">
          Cart
        </Link>
      </li>
      <li>
        <button type="button" className="Logout-btn">
          Logout
        </button>
      </li>
    </ul>
  </div>
)

export default Header
