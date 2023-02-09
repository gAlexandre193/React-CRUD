import React from "react";
import { HeaderT } from '../assets/types/layout';
import Header from "./header";
import "../assets/styles/layout.css";

interface LayoutI extends HeaderT {
  children: any;
}

function Layout({ title, children }: LayoutI) {
  return (
    <div className="wrapper">
      <div className="appContainer">
        <Header title={title} />
        
        <section className="sectionContainer">
          <div className="sectionScrollContainer">
            {children}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Layout;