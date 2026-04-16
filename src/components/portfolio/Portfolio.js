import React, { Component } from "react";

export default class portfolio extends Component {
  render() {
    const resumeData = this.props.resumeData || {};
    const projects = Array.isArray(resumeData.portfolio) ? resumeData.portfolio : [];
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works</h1>
            <div id="portfolio-wrapper">
              {/* className="bgrid-quarters s-bgrid-thirds cf" */}
              {projects.map((item) => {
                  return (
                    <React.Fragment key={item.id}>
                      <div className="columns portfolio-item">
                        <a href={item.link} target="_blank" rel="noreferrer noopener" className="portfolio-link">
                          <img
                            src={`${process.env.PUBLIC_URL}/${item.imgurl}`}
                            className="item-img"
                            alt={`${item.name} preview`}
                            loading="lazy"
                            decoding="async"
                          />
                        </a>
                        <div className="portfolio-copy">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                          {item.githubLink ? (
                            <a
                              href={item.githubLink}
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label={`${item.name} source code`}
                              className="portfolio-github"
                            >
                              <i className={item.fabIcon} />
                              <span className="sr-only">{item.name} source code</span>
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
