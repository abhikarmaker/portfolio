import React, { Component } from "react";

const KEYWORD_PATTERNS = [
  { label: "Automation", pattern: /\bautomat(e|ed|ion|ing)\b/i },
  { label: "Manual Testing", pattern: /\bmanual\b/i },
  { label: "API Testing", pattern: /\bapi\b/i },
  { label: "Postman", pattern: /\bpostman\b/i },
  { label: "SQL", pattern: /\bsql\b/i },
  { label: "PyTest", pattern: /\bpytest\b/i },
  { label: "Azure AD", pattern: /\bazure ad\b/i },
  { label: "Active Directory", pattern: /\bactive directory\b/i },
  { label: "Windows", pattern: /\bwindows\b/i },
  { label: "Linux", pattern: /\blinux\b/i },
  { label: "Cloud", pattern: /\bcloud\b/i },
  { label: "Regression", pattern: /\bregression\b/i },
  { label: "Defect Tracking", pattern: /\bdefect|bug|jira|mantis\b/i },
  { label: "Integration Testing", pattern: /\bintegration\b/i },
  { label: "Security Testing", pattern: /\bsecurity|penetration\b/i },
  { label: "Troubleshooting", pattern: /\btroubleshoot|resolv(e|ing)\b/i },
  { label: "Collaboration", pattern: /\bcollaborat(e|ed|ion)\b/i },
  { label: "Test Design", pattern: /\btest cases?|test plans?\b/i },
];

function extractKeywords(text) {
  if (typeof text !== "string") {
    return [];
  }
  const matches = KEYWORD_PATTERNS.filter((item) => item.pattern.test(text)).map(
    (item) => item.label
  );
  return matches.slice(0, 4);
}

export default class resume extends Component {

  render() {
    const resumeData = this.props.resumeData || {};
    const education = Array.isArray(resumeData.education) ? resumeData.education : [];
    const work = Array.isArray(resumeData.work) ? resumeData.work : [];
    const certifications = Array.isArray(resumeData.certifications) ? resumeData.certifications : [];
    const skills = Array.isArray(resumeData.skills) ? resumeData.skills : [];

    return (
      <div>
        <section id="resume">
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              {education.map((item) => {
                  return (
                    <React.Fragment key={item.id}>
                      <div className="row item">
                        <div className="twelve columns">
                          <h3>{item.school}</h3>
                          <p className="info">
                            {item.degree} <span>&bull;</span>{" "}
                            {item.fieldofstudy}
                            <span>&bull;</span>{" "}
                            <em className="date">
                              {item.MonthOfPassing} {item.YearOfPassing}
                            </em>
                            <span>&bull;</span> {item.address}
                          </p>
                          <p>Achievements : {item.description}</p>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
            </div>
          </div>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Experience</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              {work.map((item) => {
                  const achievements = Array.isArray(item.achievements)
                    ? item.achievements
                    : Object.values(item.Achievements || {}).filter(Boolean);
                  const endDate = item.YearOfLeaving
                    ? `${item.MonthOfLeaving} ${item.YearOfLeaving}`
                    : item.MonthOfLeaving;

                  return (
                    <React.Fragment key={item.id}>
                      <div className="row item">
                        <div className="twelve columns">
                          <h3>{item.Title}</h3>
                          <p className="info">
                            {item.CompanyName}
                            <span>&bull;</span>{" "}
                            <em className="date">
                              {item.StartingMonthAndYear} - {endDate}
                            </em>
                            <span>&bull;</span>{" "}{item.address}
                          </p>
                          <hr></hr>
                          <h1>
                            Roles & Responsibilities
                          </h1>
                            <ul className="roles">
                              {achievements.map((achievement, index) => {
                                const keywords = extractKeywords(achievement);

                                return (
                                  <li key={`${item.id}-${index}`} className="role-item">
                                    <p className="role-text">{achievement}</p>
                                    {keywords.length ? (
                                      <div className="role-keywords" aria-label="Key skills">
                                        {keywords.map((keyword) => (
                                          <span
                                            key={`${achievement}-${keyword}`}
                                            className="role-chip"
                                          >
                                            {keyword}
                                          </span>
                                        ))}
                                      </div>
                                    ) : null}
                                  </li>
                                );
                              })}
                            </ul>                          
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
            </div>
          </div>

          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Certifications</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              {certifications.map((item) => {
                  const hasCredentialLink =
                    typeof item.credential === "string" &&
                    /^https?:\/\//.test(item.credential);

                  return (
                    <React.Fragment key={item.id}>
                      <div className="row item">
                        <div className="twelve columns">
                          <h3>{item.name}</h3>
                          <p className="info">
                            {item.issuingOrganization}
                            <span>&bull;</span>{" "}
                            <em className="date">{item.issueDate}</em>
                          </p>
                          {item.credential ? (
                            <p className="info">
                              {hasCredentialLink ? (
                                <a
                                  href={item.credential}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                >
                                  Credential
                                </a>
                              ) : (
                                item.credential
                              )}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
            </div>
          </div>

          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              {/* <p>{resumeData.skillsDescription}</p> */}
              <div className="bars">
                <ul className="skills">
                  {skills.map((item) => {
                      return (
                        <React.Fragment key={item.id}>
                          <li className="skill-card">
                            <div className="skill-meta">
                              <em>{item.skillname}</em>
                              <i className={item.className} aria-hidden="true"></i>
                            </div>
                            <span
                              className={`bar-expand ${item.skillname.toLowerCase()}`}
                            ></span>
                          </li>
                        </React.Fragment>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
