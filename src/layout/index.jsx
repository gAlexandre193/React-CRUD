import Header from "./header";
import "../styles/layout.css";

function Layout({ title, children }) {
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