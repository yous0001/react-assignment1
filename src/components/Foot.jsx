import React, { Component } from "react";

export default class Foot extends Component {
  render() {
    return (
      <div className="Footer w-100">
        <div className="container py-5 text-center">
          <div className="row py-5">
            <div className="col-md-4">
              <div className="item">
                <h3>location</h3>
                <p>2215 John Daniel Drive</p>
                <p> Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item">
                <h3>Around the web</h3>
                <div className="icons">
                  <i className="mx-1 fa-brands fa-facebook"></i>
                  <i className="mx-1 fa-brands fa-twitter"></i>
                  <i className="mx-1 fa-brands fa-linkedin"></i>
                  <i className="mx-1 fa-solid fa-globe"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item">
                <h3>About freelansing</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights py-3 text-center">Copyright © Your Website 2021</div>
      </div>
    );
  }
}
