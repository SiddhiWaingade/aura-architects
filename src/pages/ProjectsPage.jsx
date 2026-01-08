export default function ProjectsPage() {
  return (
    <section className="projects-page advanced-projects">

      
      <div className="projects-intro">
        <span className="projects-eyebrow">Portfolio</span>
        <h1>
          Built Spaces,<br />
          Thoughtfully Crafted
        </h1>
        <p>
          Our work explores the relationship between architecture,
          people, and place — shaped through restraint, clarity,
          and long-lasting design principles.
        </p>
      </div>

      
      <div className="featured-project">
        <img src="/images/villa.jpg" alt="Luxury Villa" />

        <div className="featured-content">
          <span className="project-category">Residential Architecture</span>
          <h2>Hilltop Luxury Villa</h2>
          <p>
            A contemporary residence designed to frame landscape views
            while maintaining privacy and material honesty. The project
            emphasizes natural light, open planning, and contextual form.
          </p>

          <div className="project-meta">
            <span>📍 Pune</span>
            <span>📐 6,500 sq.ft</span>
            <span>📅 2024</span>
          </div>
        </div>
      </div>

      
      <div className="projects-collection">

        <div className="project-item">
          <img src="/images/commercial.jpg" alt="Commercial Complex" />
          <div className="project-text">
            <h3>Urban Commercial Complex</h3>
            <p>
              A mixed-use development integrating retail and workspace
              within a compact urban footprint.
            </p>
            <span>Commercial • Kolhapur</span>
          </div>
        </div>

        <div className="project-item">
          <img src="/images/interior.jpg" alt="Interior Studio" />
          <div className="project-text">
            <h3>Minimal Interior Studio</h3>
            <p>
              A calm interior environment using neutral materials,
              soft lighting, and minimal detailing.
            </p>
            <span>Interior • Mumbai</span>
          </div>
        </div>

      </div>

    </section>
  );
}
