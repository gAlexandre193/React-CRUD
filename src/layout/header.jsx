import { IconPlus } from "../icons";
import "../styles/header.css";

function Header({ title }) {
  return (
    <header className="headerContainer">
      <h2 className="titleText"> {title} </h2>

      <IconPlus isPointer size={24} />
    </header>
  );
}

export default Header;