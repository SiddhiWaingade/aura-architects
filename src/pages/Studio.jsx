export default function Studio() {
  return (
    <section className="studio-page">

      
      <div className="studio-intro">
        <span className="studio-eyebrow">The Studio</span>
        <h1>
          Designing with<br />
          Purpose & Clarity
        </h1>
        <p>
          Aura Architects is a design-led architecture and interior studio
          focused on creating spaces that are timeless, functional, and
          deeply connected to their context.
        </p>
      </div>

      
      <div className="studio-section">
        <h2>Our Philosophy</h2>
        <p>
          We believe architecture should quietly serve people and place.
          Our approach emphasizes clarity of form, material honesty,
          and human-centric design over fleeting trends.
        </p>
      </div>

      
      <div className="studio-section">
        <h2>Design Process</h2>

        <div className="process-grid">
          <div className="process-step">
            <h3>01 · Concept</h3>
            <p>
              Understanding site, context, climate, and client aspirations
              to establish a clear design direction.
            </p>
          </div>

          <div className="process-step">
            <h3>02 · Design</h3>
            <p>
              Translating ideas into spatial arrangements, material palettes,
              and architectural language.
            </p>
          </div>

          <div className="process-step">
            <h3>03 · Development</h3>
            <p>
              Refining details, drawings, and technical documentation to
              ensure design integrity.
            </p>
          </div>

          <div className="process-step">
            <h3>04 · Execution</h3>
            <p>
              Collaborating with consultants and contractors to deliver
              thoughtful and well-crafted spaces.
            </p>
          </div>
        </div>
      </div>

      
      <div className="studio-section">
        <h2>Studio Values</h2>

        <ul className="studio-values">
          <li>Design Integrity</li>
          <li>Sustainability & Context</li>
          <li>Attention to Detail</li>
          <li>Collaboration & Transparency</li>
        </ul>
      </div>

      
      <div className="studio-cta">
        <h2>Let’s Create Something Meaningful</h2>
        <p>
          We welcome collaborations, conversations, and new project
          opportunities.
        </p>
        <a href="/contact" className="studio-btn">Contact the Studio</a>
      </div>

    </section>
  );
}
