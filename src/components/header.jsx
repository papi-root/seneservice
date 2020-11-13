import React, { Component } from "react";
import ReactTypingEffect from 'react-typing-effect';
import Carousel from 'react-bootstrap/Carousel'; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows:false,
      pauseOnHover: false, 
      pauseOnFocus: true, 
    };
    return (  
      <header id="header">
          <Slider ref={ c => (this.slider = c )}  {...settings} className="row">

          <div className="intro header_slide_1">
                <div className="overlay">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8 col-md-offset-2 intro-text"> 
                          <h2 style={{ color: '#fff'}}>IMMOBILIER</h2>
                          <p> Avec le programme Saare Diaspora </p>
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

              <div className="intro header_slide_2">
                <div className="overlay">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8 col-md-offset-2 intro-text"> 
                          <h2 style={{ color: '#fff'}}>ASSURANCE AUTOMOBILE</h2>
                          <p> Avec le programme Assurance à Moindre Coùt </p>
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

              <div className="intro header_slide_3">
                <div className="overlay">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8 col-md-offset-2 intro-text">
                   
                          <h2 style={{ color: '#fff'}}>EQUIPEMENT</h2>
                          <p> Avec le programme Equipement à Moindre Coùt (E.M.C). Équipez vous sans vous ruiner </p>
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

              <div className="intro header_slide_3">
                <div className="overlay">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8 col-md-offset-2 intro-text">
                   
                          <h2 style={{ color: '#fff'}}>AGROALIMENTAIRE</h2>
                          <p>Des produits bio de bonnes qualités à moindre coût ! </p>
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
  
          <button className="carousel_prev" onClick={ this.previous }>  </button>
       
          <button className="carousel_next" onClick={ this.next }> </button>
        
      </header>
    );
  }
}

export default Header;
