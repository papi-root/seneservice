import React, { Component } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import { Link } from "react-router-dom";
export class Gallery extends Component {

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      arrows:false,
      pauseOnHover: false, 
      pauseOnFocus: true, 
    };
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Gallerie</h2>
            
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg" data-aos="flip-left" data-aos-delay="200" data-aos-duration="200">
                    {" "}
                    <a
                      href={require('../img/portfolio/port1.jpg')}
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img
                        src={require('../img/portfolio/port1.jpg')}
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg" data-aos="flip-left" data-aos-delay="400" data-aos-duration="200">
                    {" "}
                    <a
                      href={require('../img/portfolio/port2.jpg')}
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Adipiscing Elit</h4>
                      </div>
                      <img
                        src={require('../img/portfolio/port2.jpg')}
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg" data-aos="flip-left" data-aos-delay="600" data-aos-duration="200">
                    {" "}
                    <a
                      href={require('../img/portfolio/port3.jpg')}
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img
                        src={require('../img/portfolio/port3.jpg')}
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg" data-aos="flip-left" data-aos-delay="800" data-aos-duration="200">
                    {" "}
                    <a
                      href={require('../img/portfolio/port4.jpg')}
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img
                        src={require('../img/portfolio/port4.jpg')}
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg" data-aos="flip-left" data-aos-delay="1000" data-aos-duration="200">
                    {" "}
                    <a
                      href={require('../img/portfolio/port5.jpg')}
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Adipiscing Elit</h4>
                      </div>
                      <img
                        src={require('../img/portfolio/port5.jpg')}
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg" data-aos="flip-left" data-aos-delay="1200" data-aos-duration="200">
                    {" "}
                    <a
                      href={require('../img/portfolio/port6.jpg')}
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Dolor Sit</h4>
                      </div>
                      <img
                        src={require('../img/portfolio/port6.jpg')}
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg" data-aos="flip-left" data-aos-delay="1400" data-aos-duration="200">
                    {" "}
                    <a
                      href={require('../img/portfolio/port7.jpg')}
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Dolor Sit</h4>
                      </div>
                      <img
                        src={require('../img/portfolio/port7.jpg')}
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg" data-aos="flip-left" data-aos-delay="1600" data-aos-duration="200">
                    {" "}
                    <a
                      href={require('../img/portfolio/port8.jpg')}
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img
                        src={require('../img/portfolio/port8.jpg')}
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg" data-aos="flip-left" data-aos-delay="1800" data-aos-duration="200">
                    {" "}
                    <a
                      href={require('../img/portfolio/port9.jpg')}
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Adipiscing Elit</h4>
                      </div>
                      <img
                        src={require('../img/portfolio/port9.jpg')}
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        <br />  <br /> 
        <h3 className="text-center" style={{fontSize: '30px'}}> Nos Partenaires </h3>
        </div> <br />  <br /> 
        <div className="container text-center">
          <Slider {...settings} style={{ height: '15vh',}} className="slide-part section-title">
              <div>
                <img src={require('../img/part-1.jpg')} /> 
              </div>
              <div>
                <img src={require('../img/part-2.png')} /> 
              </div>
              <div>
                <img src={require('../img/part-4.jpg')} /> 
              </div>
              <div>
                <img src={require('../img/part-5.jpg')} /> 
              </div>
              <div>
                <img src={require('../img/part-6.png')} /> 
              </div>
            </Slider>
          </div>
      </div>
    );
  }
}

export default Gallery;
