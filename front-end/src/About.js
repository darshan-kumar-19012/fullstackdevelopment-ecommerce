import React from "react";
import "./About.css";
class About extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="abt">
        <div className="about-section">
          <h1>About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          <p>
            Here is our E-commerce web-api for saling mobile phones. We created a web application with Login Page,
            Shop Cart and About page.
          </p>
        </div>
        </div>

        <h2 style={{textAlign:"center",fontSize:"2rem",color:"red",}}>Our Team</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              
              <div className="containerr">
                <h2>P Darshan Kumar</h2>
                <p className="title">Frontend and Backend Developer</p>
                <p>darshanpandiane@gmail.com</p>
                <p>Contact: 7832156598</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
             
              <div className="containerr">
                <h2>Chandru</h2>
                <p className="title">Art Director</p>
                <p>chandruarul@gmail.com</p>
                <p>Contact: 4649879646
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="containerr">
                <h2>Bhuvana</h2>
                <p className="title">Designer</p>
                <p>Bhuvana@gmail.com</p>
                <p>Contact: 646489646</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;