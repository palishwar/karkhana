import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img style={{width:"170px"  }}src="https://karkhana.asia/wp-content/uploads/2023/08/karkhana-2.png" alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"><b>Home</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contact"><b>What we do?</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about"><b>Partnes</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/gallery"><b>Contact</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/gallery"><b>FAQS</b></Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>

    </>
  )
}

export default Header