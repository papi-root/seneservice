import React, { Component } from "react";
import ReactTypingEffect from 'react-typing-effect';
import Slider from "react-slick";

export class Header extends Component {
  
  render() { 
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 1000,
      arrows: false
    };
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {this.props.data ? this.props.data.title : "Loading"}
                    <span></span>
                  </h1> 

                  <ReactTypingEffect
                    text={["IMMOBILIER", "ASSURANCE", "EQUIPEMENT"]}
                    cursorRenderer={cursor => <h2 style={{ color: '#fff'}}>{cursor}</h2>}
                
                    displayTextRenderer={(text, i) => {
                      return (
                        <h2>
                          {text.split('').map((char, i) => {
                            const key = `${i}`;
                            return (
                              <span
                                key={key}
                                style={{ color: '#fff'}}
                              >{char}</span>
                            );
                          })}
                        </h2>
                      );
                    }}        
                  />
                <br /> 
               
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
      </header>
    );
  }
}

export default Header;
