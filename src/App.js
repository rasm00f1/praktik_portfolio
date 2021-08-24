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

      <section id="about" style={{ height: "100vh", paddingTop: "5vh" }}>
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
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: "25px" }}>
          <article style={{ backgroundColor: "white", boxShadow: "5px 5px 10px #bebebe,-5px -5px 10px #ffffff", borderRadius: "5px", maxWidth: "500px" }}>
            <div className="go_to_page" style={{ overflowY: "hidden", maxWidth: "500px" }}>
              <img style={{ borderRadius: "5px 5px 0px 0px", objectFit: "cover" }} src="./img/self_portrait.jpg" alt="selfportrait" />
            </div>
            <div style={{ textAlign: "center", padding: "1.5rem" }}>
              <h2>Rasmus Petersen</h2>
              <p style={{ fontSize: "1.5rem" }}>Aspiring frontend developer.</p>
              <p style={{ fontSize: "1.5rem" }}>Creative mind.</p>
              <p style={{ fontSize: "1.5rem" }}>Quick learner.</p>
            </div>
          </article>
          <article
            id="contact"
            style={{
              display: "flex",
              margin: "1rem",
              alignItems: "center",
              backgroundColor: "rgb(60, 52, 102)",
              padding: "2rem",
              boxShadow: "5px 5px 10px #bebebe,-5px -5px 10px #ffffff",
              borderRadius: "5px",
              maxWidth: "500px",
            }}
          >
            <div>
              <h2 style={{ color: "orange" }}>contact info</h2>
              <p style={{ color: "white", fontSize: "1.5rem" }}>+45 21 60 28 50</p>
              <p style={{ color: "white", fontSize: "1.5rem" }}>rasmusharbro@hotmail.com</p>
              <a style={{ color: "orange", fontSize: "1.5rem" }} target="blank_" href="https://www.linkedin.com/in/rasmus-harbro-petersen-2b208420b/">
                <p>LinkedIn</p>
              </a>
              <a style={{ color: "orange", fontSize: "1.5rem" }} target="blank_" href="https://github.com/rasm00f1?tab=repositories">
                <p>GitHub</p>
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
