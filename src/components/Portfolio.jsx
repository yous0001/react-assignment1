import React, { Component } from "react";

export default class Portfolio extends Component {
  state={
    show:false,
    img:"https://routeegy.github.io/startFramework/assets/images/port3.png",
  }

  render() {
      const showimg=(url)=>{
        this.state.img=url;
        this.state.show=true;
      }
    return (
    <>
      <div className="portfolio-content text-center start" id="portfolio-content">
        <div className="container">
          <h1>PORTFOLIO COMPONENT</h1>
          <div className="icon mb-3">
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="row gy-5 mb-5">
            <div className="col-lg-4 col-md-6">
              <div className="item rounded">
                <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png"  onClick={function(){showimg("https://routeegy.github.io/startFramework/assets/images/poert1.png")}} alt="i1" className="w-100 rounded-3" />
                <div className="imglayer rounded-2"><i className="fa-solid fa-plus"></i></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item rounded">
                <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" onClick={function(){showimg("https://routeegy.github.io/startFramework/assets/images/port2.png")}} alt="i2"  className="w-100 rounded-3"/>
                <div className="imglayer rounded-2"><i className="fa-solid fa-plus"></i></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item rounded">
                <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" onClick={function(){showimg("https://routeegy.github.io/startFramework/assets/images/port3.png")}} alt="i3"  className="w-100 rounded-3"/>
                <div className="imglayer rounded-2"><i className="fa-solid fa-plus"></i></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item rounded">
                <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" onClick={function(){showimg("https://routeegy.github.io/startFramework/assets/images/poert1.png")}} alt="i4" className="w-100 rounded-3" />
                <div className="imglayer rounded-2"><i className="fa-solid fa-plus"></i></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item rounded">
                <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" onClick={function(){showimg("https://routeegy.github.io/startFramework/assets/images/poert2.png")}} alt="i5"  className="w-100 rounded-3"/>
                <div className="imglayer rounded-2"><i className="fa-solid fa-plus"></i></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item rounded">
                <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" onClick={function(){showimg("https://routeegy.github.io/startFramework/assets/images/poert3.png")}} alt="i6"  className="w-100 rounded-3"/>
                <div className="imglayer rounded-2"><i className="fa-solid fa-plus"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="img-showed" className={(this.state.show===true?"d-flex":"d-none")+" justify-content-center align-items-center vh-100 position-fixed top-0 end-0 start-0 bottom-0"}>
            <div id="parent" className="w-50">
              <img src={this.state.img} className="w-100"/>
            </div>
        </div>
      </>
    );
  }
}
{

}
