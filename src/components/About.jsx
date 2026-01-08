export default function About() {
  return (
    <section className="about premium-about">
      <div className="about-wrapper">

        {/* Left content */}
        <div className="about-intro">
          <span className="about-eyebrow">Studio Philosophy</span>
          <h2>
            Architecture<br />
            with Meaning
          </h2>
        </div>

        {/* Right content */}
        <div className="about-content">
          <p className="about-lead">
            Aura Architects is a contemporary architecture and interior studio
            driven by clarity, restraint, and long-lasting design values.
          </p>

          <p>
            We believe architecture should quietly serve people and place.
            Our work focuses on spatial balance, material honesty, and timeless
            forms that remain relevant beyond trends.
          </p>

          <div className="about-metrics">
            <div className="metric">
              <h3>10+</h3>
              <span>Years</span>
            </div>
            <div className="metric">
              <h3>120+</h3>
              <span>Projects</span>
            </div>
            <div className="metric">
              <h3>15</h3>
              <span>Cities</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
