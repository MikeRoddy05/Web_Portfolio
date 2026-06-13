import projects from './data/project/projects.json';
import ProjectCards from './ProjectCards';
import './css/projects.css';
import { useState } from 'react';


function MyProjects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return(
        <>
        <h3>My Projects</h3>
        <div className="projects-container">

            {projects.map((project, index) => (
                <ProjectCards
                    key={index}
                    project={project}
                    onClick={() => setSelectedProject(project)}/>
            ))}
        </div>

        {selectedProject && (
            <div 
                className='modal-overlay'
                onClick={() => setSelectedProject(null)}>
                    <div 
                        className='modal-content'
                        onClick={(e) => e.stopPropagation()}>
                            <h2>{selectedProject.title}</h2>
                            <ul>
                                {selectedProject.details.map((detail) => (
                                    <li key={detail}>{detail}</li>
                                ))}
                            </ul>

                            <button
                                onClick={() => setSelectedProject(null)}>
                                    Close
                                </button>

                    </div>
                </div>
        )}
        </>
    );
}

export default MyProjects;