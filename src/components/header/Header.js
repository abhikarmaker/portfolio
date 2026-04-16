import React, { Component } from "react";

export default class header extends Component {
  render() {
    const resumeData = this.props.resumeData || {};
    const socialLinks = Array.isArray(resumeData.socialLinks) ? resumeData.socialLinks : [];
    const name = resumeData.name || "Abhijeet Karmaker";
    const role = resumeData.role || "Web Developer";
    const roleDescription = resumeData.roleDescription || "";
    const headerStyle = {
      backgroundImage: `linear-gradient(180deg, rgba(10, 10, 10, 0.54), rgba(10, 10, 10, 0.74)), url(${process.env.PUBLIC_URL}/images/header-background.jpg)`,
    };
    return (
      <React.Fragment>
        <header id="home" style={headerStyle}>
          <div className="row banner">
            <div className="banner-text">
              <p className="hero-kicker">Editorial portfolio</p>
              <div className="typewriter"><h1 className="responsive-headline">I'm {name}.</h1></div>
              <h3>
                I am a {role}.{roleDescription}
              </h3>
              <hr />
              <ul className="social">
                {socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank" rel="noreferrer noopener" aria-label={item.name}>
                          <i className={item.className} aria-hidden="true"></i>
                          <span className="sr-only">{item.name}</span>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about" aria-label="Scroll to about section">
              <i className="icon-down-circle" aria-hidden="true"></i>
              <span className="sr-only">Scroll to about section</span>
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
