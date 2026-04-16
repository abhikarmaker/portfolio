import React, { Component } from "react";

export default class About extends Component {
  render() {
    const resumeData = this.props.resumeData || {};
    const aboutItems = Array.isArray(resumeData.aboutme) ? resumeData.aboutme : [];
    const name = resumeData.name || "Abhijeet Karmaker";
    return (
      <section id="about">
        <div className="row">
          <h1>About Me</h1>
          <div className="three columns">
            <img
              className="profile-pic"
              src={`${process.env.PUBLIC_URL}/images/mypic1.jpg`}
              alt={`${name} portrait`}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="nine columns main-col">
            {aboutItems.map((item, index) => {
                return (
                  <React.Fragment key={`${item.name}-${index}`}>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                  </React.Fragment>
                );
              })}
            <div className="download">
              <a href={`${process.env.PUBLIC_URL}/files/Resume.pdf`} target="_blank" rel="noreferrer noopener" className="button">Download Resume</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
