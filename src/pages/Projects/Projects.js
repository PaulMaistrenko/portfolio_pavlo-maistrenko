import { ProjectList } from "../../components/ProjectList/ProjectList";

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h1 className="section__title">My works</h1>
        <div className="projects__content">
          <ProjectList />
        </div>
      </div>
    </section>
  );
}
