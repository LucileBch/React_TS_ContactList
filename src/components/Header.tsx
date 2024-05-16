// ---------- HEADER component ----------
// Assets imports
import Logo from "../assets/react-logo.png";

// Style imports
import "../styles/Header.css";

export function Header(): JSX.Element {
  return (
    <header className="container header__container">
      <div className="header__title">
        <img className="header__logo" src={Logo} alt="logo de react" />
        <h1>Contact List</h1>
      </div>
      <ul className="header__navbar">
        <li>Pricing</li>
        <li>Product</li>
        <li>Features</li>
        <li>Marketpalce</li>
      </ul>
    </header>
  );
}
