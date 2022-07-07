import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;

    return (
      <section id="about">
        <Fade duration={1000}>
        <h1><span>Skills</span></h1>
          <div className="row">
            <div className="six columns main-col">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Palak Sharma"
              />
            </div>
            <div className="six columns main-col">
              <ul>
                <li><h4>Programming Languages :</h4>
                  <p>I code in C++, Python, JavaScript and Dart.</p>
                </li>
              </ul>
              <ul>
                <li><h4>Frameworks and Others :</h4>
                  <p>In my projects, I have used Node.js, React JS, and Express JS. I've also worked with Firebase, MongoDB, Git, Github, Visual Studio Code, Android Studio, and Bootstrap.</p>
                </li>
              </ul>
              <ul>
                <li><h4>Relevent Courseworks:</h4>
                  <p>In my four semesters of B.Tech, I studied data structures and algorithms, computing and data science, mathematical foundations of computer science, probability and statistics, basic machine learning, data handling and visualisation.</p>
                </li>
              </ul>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
