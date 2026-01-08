import { useNavigate } from "react-router-dom";
import "../styles/main.css";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar premium-nav">
      <div className="nav-container">

        <div className="nav-brand">
          <h1 className="logo-wordmark">
            A<span>U</span>RA
          </h1>
        </div>

        <ul className="nav-links">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/projects")}>Projects</li>
          <li onClick={() => navigate("/studio")}>Studio</li>
          <li>Services</li>
          <li className="nav-cta" onClick={() => navigate("/contact")}>
            Contact
          </li>
        </ul>

      </div>
    </nav>
  );
}
