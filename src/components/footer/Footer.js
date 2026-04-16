import React, { Component } from 'react'

export default class footer extends Component {
  render() {
    const resumeData = this.props.resumeData || {};
    const socialLinks = Array.isArray(resumeData.socialLinks) ? resumeData.socialLinks : [];
    const currentYear = new Date().getFullYear();

    return (
      <div>
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                {
                  socialLinks.map((item) => {
                    return (
                      <React.Fragment key={item.url}>
                      <li>
                        <a href={item.url} target="_blank" rel="noreferrer noopener" aria-label={item.name}>
                          {item.iconImage ? (
                            <img
                              src={`${process.env.PUBLIC_URL}/${item.iconImage}`}
                              alt=""
                              className="footer-social-logo"
                              aria-hidden="true"
                            />
                          ) : (
                            <i className={item.className} aria-hidden="true" />
                          )}
                          <span className="sr-only">{item.name}</span>
                        </a>
                      </li>
                      </React.Fragment>
                    )
                  })
                }
              </ul>
              <ul className="copyright">
                <li>© {currentYear} Abhijeet Karmaker</li>
                <li>Design by <a title="AbhijeetKarmaker" href="https://github.com/abhikarmaker">Abhijeet Karmaker</a></li>
              </ul>
            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home" aria-label="Back to top"><i className="icon-up-open" aria-hidden="true" /><span className="sr-only">Back to top</span></a></div>
          </div>
        </footer>
      </div>
    )
  }
}
