import { useState } from "react";
import './css/projects.css';

function ProjectCards({ project, onClick }) {

    return (
        <div className="project-card" onClick={onClick}>
            <h3 className="project-title">{project.title}</h3>
            <div className="project-divider"></div>
            <p className="project-description">{project.description}</p>
        </div>
    )
}

export default ProjectCards;