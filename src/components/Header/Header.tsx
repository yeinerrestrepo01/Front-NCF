import React from 'react'

const Header:React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="#">ABInBev</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">Corrección montos <span className="sr-only"></span></a>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Header