import React from "react";
import { useModApp } from "../assets/hooks/modApp";
import { HeaderT } from "../assets/types/layout";
import { IconPlus } from "../assets/icons";
import "../assets/styles/header.css";

function Header({ title }: HeaderT) {
  const { modApp, handlerChangerToDataAdd } = useModApp();

  return (
    <header className="headerContainer">
      <h2 className="titleText"> {title} </h2>

      {modApp === "dataRead"
        ? <IconPlus isPointer size={24} action={handlerChangerToDataAdd} />
        : null}
    </header>
  );
}

export default Header;