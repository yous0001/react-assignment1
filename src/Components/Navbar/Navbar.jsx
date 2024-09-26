import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    state = {
        scroller: false 
    }

    handleScroll = () => {
        if (window.scrollY > 10) {
            this.setState({ scroller: true }); 
        } else {
            this.setState({ scroller: false });
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
  render() {
    return (
      <>
    <nav
        className={`navbar navbar-expand-sm navbar-light navbar-bg position-fixed top-0 start-0 end-0 ${(!this.state.scroller) ? " p-5" :"p-2"}`}
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
                        <NavLink className="nav-link text-light fs-5 fw-bold" to="/about">about</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light fs-5 fw-bold" to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light fs-5 fw-bold" to="/content">Content</NavLink>
                    </li>
                    
                </ul>
                
            </div>
        </div>
    </nav>
    
      </>
    )
  }
}
