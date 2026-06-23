import React from "react";

function TechForDad({ resumeData }) {
  const techForDad = resumeData?.techForDad;

  if (!techForDad) {
    return null;
  }

  const bannerSrc = `${process.env.PUBLIC_URL}/${techForDad.bannerImage}`;
  const highlights = Array.isArray(techForDad.highlights) ? techForDad.highlights : [];
  const categories = Array.isArray(techForDad.categories) ? techForDad.categories : [];
  const stats = Array.isArray(techForDad.stats) ? techForDad.stats : [];

  return (
    <section id="techfordad">
      <div className="row">
        <div className="twelve columns collapsed">
          <div className="tfd-shell">
            <div className="tfd-copy">
              <p className="tfd-kicker">{techForDad.kicker}</p>
              <h2>{techForDad.title}</h2>
              <p className="tfd-lead">{techForDad.description}</p>
              <ul className="tfd-highlights">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="tfd-actions">
                <a
                  href={techForDad.website}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="tfd-primary"
                >
                  Visit Tech For Dad
                </a>
              </div>
            </div>

            <div className="tfd-visual">
              <div className="tfd-content-card">
                <a
                  href={techForDad.website}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="tfd-banner-link"
                  aria-label="Visit Tech For Dad"
                >
                  <img
                    src={bannerSrc}
                    alt="Tech For Dad — Trusted Tech Reviews for Seniors & Families"
                    className="tfd-banner"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <p className="tfd-content-label">What We Cover</p>
                <ul className="tfd-categories">
                  {categories.map((cat) => (
                    <li key={cat.label}>
                      <a
                        href={cat.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="tfd-category-item"
                      >
                        <span className="tfd-category-icon">{cat.icon}</span>
                        <span className="tfd-category-name">{cat.label}</span>
                        <span className="tfd-category-arrow">→</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="tfd-stats">
                  {stats.map((s) => (
                    <div key={s.label} className="tfd-stat">
                      <strong>{s.value}</strong>
                      <span>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechForDad;
