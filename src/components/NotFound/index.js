import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <>
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/poreddysrikanth/image/upload/v1633158290/NotFound_kpncbm_ahjnhr.png"
        alt="not found"
        className="not-found-image"
      />
      <h1 className="not-found-heading">Page Not Found</h1>

      <Link to="/login">
        <button type="button" className="home-btn">
          Login
        </button>
      </Link>
    </div>
  </>
)

export default NotFound
