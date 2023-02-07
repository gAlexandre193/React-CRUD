import { IconPlus } from "../icons";
import "../styles/header.css";

function Header({ title, modApp, changeModApp }) {
  return (
    <header className="headerContainer">
      <h2 className="titleText"> {title} </h2>

      {modApp === "dataRead"
        ? <IconPlus isPointer size={24} action={changeModApp} />
        : null}
    </header>
  );
}

export default Header;