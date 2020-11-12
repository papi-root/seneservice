import React, { Component } from "react";

export class testimonials extends Component {
  render() {
    return (
      <div id="testimonials">
        <div className="container">
          <div className="section-title text-center">
            <h2>TEMOIGNAGES</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4" data-aos="zoom-in" data-aos-duration="200">
                    <div className="testimonial">
                      <div className="testimonial-image">
                        {" "}
                        <img src={d.img} alt="" />{" "}
                      </div>
                      <div className="testimonial-content">
                        <p>"{d.text}"</p>
                        <div className="testimonial-meta"> - {d.name} </div>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div> 

        <div className="row" id="backImg-temoignage">
          <div className="row"  data-aos="fade-up" data-aos-delay="500" data-aos-duration="200">
              <div className="container">
                  <div className="col-md-3 col-sm-4">
                    <p>Vos Congélateurs</p>
                    <h2> 9699 frs/mois </h2> 
                  </div>

                  <div className="col-md-3 col-sm-4">
                    <p>Vos Téléviseurs Ecran Plat Led</p>
                    <h2> 8011 frs/mois </h2> 
                
                  
                  </div>
                  <div className="col-md-3 col-sm-4">
                    <p>Vos Ordinateurs portables</p>
                    <h2> 11149 frs/mois </h2> 
                  </div>

                  <div className="col-md-3 col-sm-4">
                  <p>Vos Tablettes Android</p>
                    <h2> 3732 frs/mois </h2> 
                  </div>
            </div> 
          </div>
      </div>
    </div>
    );
  }
}

export default testimonials;
