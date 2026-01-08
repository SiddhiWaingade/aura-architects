import "../styles/main.css";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="hero-text">
        <h1>
          Architecture<br />
          Beyond Boundaries
        </h1>
        <p>Designing timeless spaces with precision & purpose</p>

        <button onClick={() => navigate("/projects")}>
          Explore Projects
        </button>
      </div>
    </section>
  );
}
