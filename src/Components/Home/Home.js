import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
const Home = () => (
  <div id="home-container">
    <h1 className="title is-1">Welcome to E-transportation services</h1>
    <img src="./images/transport.png" alt="transport" className="transport-container"/>
    <div className="link">
    <Link to="/signup" className="link-link">
      Click here to continue
    </Link>
    </div>
  </div>
);

export default Home;