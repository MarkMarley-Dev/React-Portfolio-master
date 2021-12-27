import React, { Component } from "react";
import { Link } from "react-router-dom";

const Porfolio = (props) => {
  return (
    <section className="portfolio" id="portfolio">
      <h1 className="portfolio-title">
        {" "}
        Please Check out some of my works below.
      </h1>
      <div className="portfolio-item-one">
        <a href="http://property--analyser.herokuapp.com/">
          <div className="portfolio-item-one__img" />
        </a>
        <h2 className="portfolio-item-one__title">Property Analayser</h2>
        <p className="portfolio-item-one__text">
          Property Analyser is a tool which helps property investors and
          homeowners alike search for granular data usually reserved for
          institutional investors. The project is built in Reactjs with hooks.
          The data is accessed dynamically through a API and then displayed
          dynamically through ChartJs and JSX. The styling is done with Sass and
          the routing done with React-Router-DOM.
        </p>
        <div className="portfolio-logo_ctn"> </div>
      </div>
      <div className="portfolio-item-two">
        <a href="http://property--analyser.herokuapp.com/">
          <div className="portfolio-item-two__img" />
        </a>
        <h2 className="portfolio-item-two__title"> BrainFlix</h2>
        <p className="portfolio-item-two__text">
          BrainFlix is a mock youtube website. Built with dummy data in a server
          with JSON data. I have then used Axios calls to select and switch
          videos. You can also add new videos with a axios post form.
        </p>
        <div className="portfolio-logo_ctn"> </div>
      </div>
      <div className="portfolio-item-three">
        <a href="http://property--analyser.herokuapp.com/">
          <div className="portfolio-item-three__img" />
        </a>
        <h2 className="portfolio-item-three__title"> Expenses Tracker</h2>
        <p className="portfolio-item-three__text">
          Expenses Tracker is quite a simple but sophisticated React app that
          data is dynamically added. Here I have worked on passing Data down and
          bubbling data up through components. I would definitely recommend
          looking at the code on GitHub as there is some very neat pieces of
          code that I am proud of.
        </p>
        <div className="portfolio-logo_ctn"> </div>
      </div>
    </section>
  );
};

export default Porfolio;
