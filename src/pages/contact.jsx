export default function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-container">

        
        <div className="contact-info">
          <span className="contact-eyebrow">Get in Touch</span>
          <h1>Let’s Work Together</h1>
          <p>
            We are always open to discussing new projects, creative ideas,
            or opportunities to be part of your vision.
          </p>

          <div className="contact-details">
            <p><strong>Email:</strong> info@auraarchitects.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Location:</strong> Sangli, Maharashtra</p>
          </div>
        </div>

        
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Project Type" />
            <textarea placeholder="Tell us about your project" rows="5"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
}
