import React, { Component} from 'react'
import Aos from 'aos'; 
import "aos/dist/aos.css"; 
import aboutImg from '../img/about.jpg'; 

export class Emc extends Component {
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
                <h2>Le programe EMC </h2>
                <div className="list-style">
                  <div className="col-lg-12 col-sm-12 col-xs-6">
                    <ul>
                    En effet, suite à une forte demande de nos  clients, nous avons jugé nécessaire de rajouter des produits supplémentaires à notre offre existante.

                    Pour permettre à nos clients de s’équiper sans se ruiner, nous avons  ainsi rajouté : 

                    </ul>
                  </div> 
                </div>
                
                <div className="list-style">
                  <div className="col-lg-12 col-sm-12 col-xs-6">
                    <ul>
                      <li> Des Tablettes androïde.</li>
                      <li>  Des téléphones androïde.</li>
                      <li>Des téléviseurs Led</li>
                      <li>Des frigos et congélateurs (Vertical – Horizontal).</li>
                      <li>Des cuisinières (4 et 5 feux).</li>
                      <li>Des fours micro ondes.</li>
                      <li>Des kits solaires…</li>
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

export default Emc
