import React from 'react'
import { Link,useLocation,useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">De-Emissionify</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/"?'active':""}`} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/about"?'active':""}`} to="/about">About</Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <Link className="btn btn-primary mx-1" to="/loginsignup" role='button' onClick={()=>{navigate('/loginsignup')}}>Login/Signup</Link>
              </form>
            </div>
          </div>
        </nav>
    </div>
  )
}
