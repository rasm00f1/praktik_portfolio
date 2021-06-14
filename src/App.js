import "./App.css";
import { useState, useEffect } from "react";
import { ReactComponent as Hub } from "./frontpage_portfolio.svg";
import Project from "./Project";

function App() {
  const [projects, setProjects] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  console.log(projects);
  useEffect(() => {
    async function getProjects() {
      const JSONData = await fetch("https://portfolio-70b9.restdb.io/rest/portfolio-projects", {
        method: "get",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "x-apikey": "60c45802e2c96c46a246346b",
          "cache-control": "no-cache",
        },
      });
      const projectData = await JSONData.json();
      setProjects(projectData);
      setIsFetched(true);
    }
    getProjects();
  }, []);

  const projectsCopy = [...projects];
  console.log(projectsCopy);
  return (
    <div className="App" style={{ overflowY: "scroll", scrollBehavior: "smooth", height: "100vh" }}>
      <section id="hub" style={{ overflowX: "scroll", height: "100vh", paddingTop: "5vh" }}>
        <Hub style={{ margin: "0 auto", height: "90vh" }}></Hub>
      </section>
      <section style={{ minHeight: "100vh" }} id="projects">
        <nav style={{ paddingTop: "5vh", height: "10vh", display: "flex", justifyContent: "center", alignItems: "center", position: "sticky" }}>
          <a className="link" href="#hub">
            <svg width="100" height="100" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.812 16.61L12 2L4.83073 15.9547L24.812 16.61Z" fill="#E27C37" />
              <path d="M25.0403 15.8955L13.5 1.5L6.07235 15.2656L25.0403 15.8955Z" fill="#3C3466" />
              <path d="M25.6573 21.3533L24.398 18.965L4.41691 18.7834L6.54374 22.8171L25.6573 21.3533Z" fill="#E27C37" />
              <path d="M25.8531 20.2666L24.5938 17.8783L5.23184 17.3702L7.35867 21.4038L25.8531 20.2666Z" fill="#3C3466" />
            </svg>
          </a>
        </nav>
        <div className="grid">
          {projectsCopy.map((project) => (
            <Project isFetched={isFetched} {...project} key={project.title} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
