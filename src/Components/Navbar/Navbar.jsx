import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <>
    <nav
        className="navbar navbar-expand-sm navbar-light bg-light"
    >
        <div className="container">
            <Link className="navbar-brand" to="">Navbar</Link>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="">about</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to=""></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="">Content</NavLink>
                    </li>
                    
                </ul>
                
            </div>
        </div>
    </nav>
    
      </>
    )
  }
}
