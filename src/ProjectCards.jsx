import { useState } from "react";
import './css/projects.css';

function ProjectCards({ project, onClick }) {

    return (
        <div className="project-card" onClick={onClick}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </div>
    )
}

export default ProjectCards;