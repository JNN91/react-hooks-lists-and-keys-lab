import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const timeProject = projects.map(project =>{
    return <React.Fragment key={project.id}>{ProjectItem(project)}</React.Fragment>
  }) 

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{timeProject}</div>
    </div>
  );
}

export default ProjectList;
