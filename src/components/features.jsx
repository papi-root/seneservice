import React, { Component, useEffect } from "react";
import ComputerIcon from '@material-ui/icons/Computer';
import Aos from 'aos'; 
import "aos/dist/aos.css"; 

export class features extends Component {
  componentDidMount() {
    Aos.init({ duration: 2000 })
  }
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Services</h2>
          </div>
          <div className="row" data-aos="fade-right">
            {this.props.data
              ? this.props.data.map((d,i) => (
                  <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                    {" "}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <h5>{d.title1}</h5>
                    <p>{d.text}</p>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    );
  }
}

export default features;
