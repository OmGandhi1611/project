import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
const Home = () => (
  <div id="home-container">
    <h1 className="title is-1">Welcome to E-transportation services</h1>
    <div class="parent">
	<img
		class="responsive-image transport-container"
		src="./images/transport.png"
		alt="random pic for display"
	/>
</div>
    <div className="link">
    <Link to="/signup" className="link-link">
      Click here to continue
    </Link>
    </div>
  </div>
);

export default Home;