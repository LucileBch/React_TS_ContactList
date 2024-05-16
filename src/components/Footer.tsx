// ---------- FOOTER component ----------
// Style imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Footer.css";

export function Footer(): JSX.Element {
  return (
    <footer className="container footer__container">
      <ul className="footer__navbar">
        <li>
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
        </li>
        <li>
          <FontAwesomeIcon icon={["fab", "facebook"]} />
        </li>
        <li>
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </li>
        <li>
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </li>
      </ul>
      <p>| Lucile Bouchire | Le Reacteur | 2024</p>
    </footer>
  );
}
