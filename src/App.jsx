import { useRef } from 'react';
import './index.css';
import AbMe from './AbMe';
import MyProjects from './MyProjects';
import WorkExperience from './WorkExperience';
import MyFooter from './MyFooter';

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const workRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className='top-bar-container'>
        <div className='top-bar-title'>
          <h1>Michael Roddy's Portfolio</h1>
        </div>

        <div className='nav-divider'></div>

        <div className='go-to-link'>
          <button onClick={() => scrollTo(aboutRef)}>About Me</button>
          <span className="divider">|</span>
          <button onClick={() => scrollTo(projectsRef)}>My Projects</button>
          <span className="divider">|</span>
          <button onClick={() => scrollTo(workRef)}>Work Experience</button>
        </div>

        <div className='nav-divider'></div>

        <div className='top-bar-actions'>
          <a href='#resume' className='link'>My Resume</a>
          <a href='#contact' className='link'>Contact Me</a>
        </div>
      </div>
      <div ref={aboutRef} className='subsection'>
          <AbMe />
      </div>
      <div ref={projectsRef} className='subsection'>
        <MyProjects />
      </div>
      <div ref={workRef} className='subsection'>
        <WorkExperience />
      </div>
      <div className='footer'>
        <MyFooter />
      </div>
      </>
  );
}

export default App;
