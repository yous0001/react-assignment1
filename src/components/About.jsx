import React, { Component } from "react";

export default class About extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="start height-100 home-content">
          <div className="box">
            <h1>ABOUT COMPONENT</h1>
            <div className="icon">
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="item">
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="item">
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
