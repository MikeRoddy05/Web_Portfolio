import projects from './data/project/projects.json';
import ProjectCards from './ProjectCards';
import './css/projects.css';
import { useState } from 'react';


function MyProjects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return(
        <>
        <div className='title'>
            <h3>My Projects</h3>
        </div>
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

                        <div className='modal-left'>
                            <h2>{selectedProject.title}</h2>
                            <ul className='project-details'>
                                {selectedProject.details.map((detail) => (
                                    <li key={detail}>{detail}</li>
                                ))}
                            </ul>

                            <button 
                                className='modal-close'
                                onClick={() => setSelectedProject(null)}>
                                    ×
                            </button>
                        </div>

                        <div className="modal-right">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                            />
                        </div>
                </div>
            </div>
        )}
        </>
    );
}

export default MyProjects;