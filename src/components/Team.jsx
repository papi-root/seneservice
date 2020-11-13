import React, { Component } from "react";
import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuote';
export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Notre equipe</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div id="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-4 col-sm-6 team" data-aos="zoom-in" data-aos-duration="500">
                    <div className="thumbnail">
                      {" "}
                      <img src={d.img} alt="..." className="team-img" />
                      <div className="caption">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div> 
        <div className="container " data-aos="zoom-in">
                <h3 className="text-center"> Les mots du Directeur </h3>
          <p style={{ fontSize: '20px', }}> <i className="fa fa-quote-left" style={{ color: '#16a085', fontSize: '50px', right: 0}} />
          &nbsp;&nbsp;&nbsp;&nbsp;
              Nous avons bien conscience de l’ambition de nos programmes.
              Nous avons la volonté de servir notre jeunesse, et donc l’avenir de notre pays.
          </p>
          
        </div>
      </div>
    );
  }
}

export default Team;
