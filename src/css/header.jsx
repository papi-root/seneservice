import React, { Component } from "react";
import ReactTypingEffect from 'react-typing-effect';
import Carousel from 'react-bootstrap/Carousel'; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/stylec.css"; 

export class Header extends Component {
  constructor(props) {
      super(props)
      this.next = this.next.bind(this)
      this.previous = this.previous.bind(this)
  } 

  next() {
      this.slider.slickNext();
  }

  previous() {
      this.slider.slickPrev();
  }
  render() { 
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,


    };
    return (  
      <header id="header">
          <Slider ref={ c => (this.slider = c )}  {...settings} className="row">
              <div className="intro">
                <div className="overlay">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8 col-md-offset-2 intro-text"> 
                              <h2 style={{ color: '#fff'}}>IMMOBILIER</h2>
                              <p> Avec le programme Saare Diaspora </p>

                        <br /> <br /> 
                        <a
                          href="#about"
                          className="btn btn-custom btn-lg page-scroll"
                        >
                          Plus d'info
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="intro">
                <div className="overlay">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8 col-md-offset-2 intro-text">
                   
                              <h2 style={{ color: '#fff'}}>IMMOBILIER</h2>
                              <p> Avec le programme Saare Diaspora </p>

                        <br /> <br /> 
                        <a
                          href="#about"
                          className="btn btn-custom btn-lg page-scroll"
                        >
                          Plus d'info
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </Slider>
        <div className="carousel-control" >
          <button className="prev" onClick={ this.previous }>  </button>
          <button className="next" onClick={ this.next }> </button>
        </div>
      </header>
    );
  }
}

export default Header;
