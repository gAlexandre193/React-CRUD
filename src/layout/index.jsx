import Header from "./header";
import "../styles/layout.css";

function Layout({ title, modApp, changeModApp, children }) {
  return (
    <div className="wrapper">
      <div className="appContainer">
        <Header title={title} modApp={modApp} changeModApp={changeModApp} />
        
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