import React, { Component } from 'react'
import Header from './header';
import Features from './features';
import About from './about';
import Gallery from './gallery';
import Testimonials from './testimonials';
import Team from './Team';
import Contact from './contact';
import JsonData from '../data/data.json';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Header data={this.state.landingPageData.Header} />
        <About data={this.state.landingPageData.About} />
        <Features data={this.state.landingPageData.Features} />
        <Gallery />
        <Testimonials data={this.state.landingPageData.Testimonials} />
        <Team data={this.state.landingPageData.Team} />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
