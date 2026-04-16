import React from "react";

function EasyTech({ resumeData }) {
  const easyTech = resumeData?.easyTech;

  if (!easyTech) {
    return null;
  }

  const bannerSrc = `${process.env.PUBLIC_URL}/${easyTech.bannerImage}`;
  const logoSrc = `${process.env.PUBLIC_URL}/${easyTech.logoImage}`;
  const highlights = Array.isArray(easyTech.highlights) ? easyTech.highlights : [];
  const phone = typeof easyTech.phone === "string" ? easyTech.phone : "";

  return (
    <section id="easytech">
      <div className="row">
        <div className="twelve columns collapsed">
          <div className="easytech-shell">
            <div className="easytech-copy">
              <p className="easytech-kicker">{easyTech.kicker}</p>
              <h2>{easyTech.title}</h2>
              <p className="easytech-lead">{easyTech.description}</p>
              <ul className="easytech-highlights">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="easytech-actions">
                <a
                  href={easyTech.website}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="easytech-primary"
                >
                  Visit EasyTech Vancouver
                </a>
                <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="easytech-secondary">
                  Call {phone}
                </a>
              </div>
            </div>

            <div className="easytech-visual" aria-label="EasyTech Vancouver showcase">
              <a
                href={easyTech.website}
                target="_blank"
                rel="noreferrer noopener"
                className="easytech-banner-card easytech-visual-link"
                aria-label="Open EasyTech website from banner"
              >
                <img
                  src={bannerSrc}
                  alt="EasyTech Vancouver service banner"
                  className="easytech-banner"
                  loading="lazy"
                  decoding="async"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    if (event.currentTarget.parentElement) {
                      event.currentTarget.parentElement.classList.add("is-fallback");
                    }
                  }}
                />
                <div className="easytech-banner-fallback" aria-hidden="true">
                  <span className="easytech-pill">Metro Vancouver IT Support</span>
                  <strong>EasyTech Digital Solutions</strong>
                  <span>Smart, friendly, local IT consultant services</span>
                </div>
              </a>

              <a
                href={easyTech.website}
                target="_blank"
                rel="noreferrer noopener"
                className="easytech-logo-card easytech-visual-link"
                aria-label="Open EasyTech website from logo"
              >
                <img
                  src={logoSrc}
                  alt="EasyTech Vancouver logo"
                  className="easytech-logo"
                  loading="lazy"
                  decoding="async"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    if (event.currentTarget.parentElement) {
                      event.currentTarget.parentElement.classList.add("is-fallback");
                    }
                  }}
                />
                <div className="easytech-logo-fallback" aria-hidden="true">
                  <span>EasyTech</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EasyTech;
