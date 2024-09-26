import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
            <div className="row text-center">
                <div className="col-md-4">
                    <h2>LOCATION</h2>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className="col-md-4">
                    <h2>AROUND THE WEB</h2>
                    <div className="icons d-flex gap-3 justify-content-center fs-5">
                        <div className="icon"><i className="fa-brands fa-facebook"></i></div>
                        <div className="icon"><i className="fa-brands fa-twitter"></i></div>
                        <div className="icon"><i className="fa-brands fa-linkedin-in"></i></div>
                        <div className="icon"><i className="fa-solid fa-globe"></i></div>
                    </div>
                </div>
                <div className="col-md-4">
                    <h2>ABOUT FREELANCER</h2>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </div>
        <div className="copy-rights py-3 text-center fs-5">
            <p>Copyright © Your Website 2021</p>
        </div>
      </footer>
    )
  }
}
