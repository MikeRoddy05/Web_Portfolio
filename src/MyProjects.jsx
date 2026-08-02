import projects from './data/project/projects.json';
import ProjectCards from './ProjectCards';
import './css/projects.css';
import { useState, useEffect } from 'react';


function MyProjects() {
    const [selectedProject, setSelectedProject] = useState(null);

    // Lock background scroll while the modal is open
    useEffect(() => {
        if (selectedProject) {
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';

            return () => {
                document.body.style.overflow = originalOverflow;
            };
        }
    }, [selectedProject]);

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

                        <div className="modal-columns">
                            <div className='modal-left'>
                                <h2>{selectedProject.title}</h2>
                                <ul className='project-details'>
                                    {selectedProject.details.map((detail) => (
                                        <li key={detail}>{detail}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="modal-right">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                />
                            </div>
                        </div>

                        {selectedProject.link && (
                            <a className="modal-link-button" href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                                View Repository
                            </a>
                        )}
                        <button 
                            className='modal-close'
                            onClick={() => setSelectedProject(null)}>
                                ×
                        </button>
                </div>
            </div>
        )}
        </>
    );
}

export default MyProjects;