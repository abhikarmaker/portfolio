import React, { Component } from "react";

export default class contactus extends Component {
  render() {
    const resumeData = this.props.resumeData || {};
    const socialLinks = Array.isArray(resumeData.socialLinks) ? resumeData.socialLinks : [];
    const phoneNumber = typeof resumeData.phoneNumber === "string" ? resumeData.phoneNumber : "";
    const phoneHref = `tel:${phoneNumber.replace(/[^+\d]/g, '')}`;
    const easyTechLogoSrc = `${process.env.PUBLIC_URL}/images/easytech-logo.png`;

    return (
      <section id="contactus">
        <h2>Contact</h2>
        <div className="contact-shell section-head">
          <div className="contact-intro">
            <p className="lead">
              Feel free to reach out about opportunities, collaborations, or project ideas.
            </p>
          </div>
        </div>
        <div className="contact-shell contact-grid">
          <aside className="contact-card footer-widgets">
            <h3>Social Profiles</h3>
            <ul className="social-links">
              {socialLinks.map((item) => {
                  return (
                    <li key={item.className}>
                      <h4>
                        <span>{item.name}</span>{" "}
                        <i className={item.className} aria-hidden="true" />{" "}
                        <a href={item.url} target="_blank" rel="noreferrer noopener">
                          {item.id}
                        </a>
                      </h4>
                    </li>
                  );
                })}
            </ul>
            <h3>Details</h3>
            <address className="address">
              <span><i className="fa fa-user" aria-hidden="true" /> {resumeData.name}</span>
              <br />
              <a href={phoneHref}><i className="fa fa-phone" aria-hidden="true" /> {phoneNumber}</a>
            </address>
          </aside>
          <div className="contact-card footer-widget" aria-label="LinkedIn profile badge">
            <h3>Professional Profiles</h3>
            <div
              className="LI-profile-badge"
              data-version="v1"
              data-size="large"
              data-locale="en_US"
              data-type="vertical"
              data-theme="light"
              data-vanity="abhijeet-karmaker"
            >
              <a
                className="LI-simple-link contact-profile-link"
                href="https://ca.linkedin.com/in/abhijeet-karmaker?trk=profile-badge"
              >
                <i className="fa fa-linkedin" aria-hidden="true" />
                <span className="contact-profile-label">Abhijeet Karmaker on LinkedIn</span>
              </a>
            </div>
            <a
              href={resumeData.website}
              target="_blank"
              rel="noreferrer noopener"
              className="contact-easytech-link contact-profile-link"
              aria-label={resumeData.websiteLabel || "Owner of easytechvancouver.ca"}
            >
              <span className="contact-easytech-mark" aria-hidden="true">
                <img
                  src={easyTechLogoSrc}
                  alt=""
                  className="contact-easytech-logo"
                />
              </span>
              <span className="contact-easytech-label contact-profile-label">
                <strong>EasyTech Vancouver</strong>
                <span className="contact-profile-meta">Owner</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
