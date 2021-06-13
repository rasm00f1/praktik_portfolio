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
    <div className="App" style={{ overflowY: "hidden", scrollBehavior: "smooth", height: "100vh" }}>
      <section id="hub" style={{ height: "100vh", paddingTop: "5vh" }}>
        <Hub style={{ maxHeight: "90vh" }}></Hub>
      </section>
      <section id="projects">
        <nav style={{ height: "10vh", display: "flex", justifyContent: "center", alignItems: "center", position: "sticky", top: "0" }}>
          <a href="#hub">Hello</a>
        </nav>
        <div style={{ height: "90vh" }} class="m-auto grid grid-cols-2 gap-3 max-w-screen-lg">
          {projectsCopy.map((project) => (
            <Project isFetched={isFetched} {...project} key={project.title} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
