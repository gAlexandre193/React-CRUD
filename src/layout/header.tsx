import React from "react";
import { HeaderT } from "../assets/types/layout";
import { IconPlus } from "../assets/icons";
import "../assets/styles/header.css";

function Header({ title, modApp, changeModApp }: HeaderT) {
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