import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <>
    <nav
        className="navbar navbar-expand-sm navbar-light navbar-bg"
    >
        <div className="container">
            <Link className="navbar-brand text-light fs-2 fw-bold" to="">START FRAMEWORK</Link>
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
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0 gap-2 text-uppercase">
                    <li className="nav-item">
                        <NavLink className="nav-link text-light fs-5 fw-bold" to="">about</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light fs-5 fw-bold" to="">Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light fs-5 fw-bold" to="">Content</NavLink>
                    </li>
                    
                </ul>
                
            </div>
        </div>
    </nav>
    
      </>
    )
  }
}
