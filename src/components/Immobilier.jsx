import React, { Component} from 'react'
import Aos from 'aos'; 
import "aos/dist/aos.css"; 
import aboutImg from '../img/about.jpg'; 

export class Immobilier extends Component {
  componentDidMount() {
    Aos.init({ duration: 2000 })
  }
  render() {  
   
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src={aboutImg} className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div data-aos="fade-left" className="about-text">
                <h2>A propos </h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                
                <div className="list-style">
                  <div className="col-lg-12 col-sm-12 col-xs-6">
                    <ul>
                      {this.props.data ? this.props.data.Why.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  </div> 
                </div>

                <p>{this.props.data ? this.props.data.paragraph2 : 'loading...'}</p>
                
                <div className="list-style">
                  <div className="col-lg-12 col-sm-12 col-xs-6">
                    <ul>
                      {this.props.data ? this.props.data.Why2.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  </div> 
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Immobilier
