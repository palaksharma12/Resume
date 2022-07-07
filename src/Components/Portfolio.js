import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {

    return (
      <section id="portfolio">
        <Fade duration={1000}>
        <h1><span>Achievements</span></h1>
          <div className="row">
           
            <div className=" main-col">
              <ul>
                <li><h4>Silver in Inter-IIT techmeet 10.0 :</h4>
                  <p>I Won Silver Medal in Blue Yonder Drone optimized delivery system event conducted in Inter - IIT Tech Meet 10.0. It was a low prep event.</p>
                </li>
                <li><h4>Top 10 in ACMW Natinal level hackathon :</h4>
                  <p>My team ranked under Top 10 Among participants from all over India in ACMW 6th National Hackathon.</p>
                </li>
                <li><h4>Under 700 in Code Jam to I/O :</h4>
                  <p>I secured 673rd rank among 3000+ participants in Code Jam to I/O for Women 2022.</p>
                </li>
                <li><h4>2nd rank in B3B coding Contest :</h4>
                  <p>I achieved 2nd rank among all participants from college in B3B coding Contest held on Codeforces.</p>
                </li>
                <li><h4>100 percentile in Chemistry :</h4>
                  <p>I got 100 percentile in Chemistry among 9 lakh participants from All over India in JEE mains-2020.</p>
                </li>
              </ul>
              
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
