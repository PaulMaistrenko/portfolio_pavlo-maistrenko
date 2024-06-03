import { ProjectList } from "../../components/ProjectList/ProjectList";

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects__content">
          <ProjectList />
        </div>
      </div>
    </section>
  );
}
