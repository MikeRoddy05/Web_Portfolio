import './index.css';
import AbMe from './AbMe';
import MyProjects from './MyProjects';
import WorkExperience from './WorkExperience';
import MyFooter from './MyFooter';

function App() {

  return (
    <>
      <div className='top-bar-container'>
        <div className='top-bar-contact'>
          <a href='#contact' className='link'>Contact Me</a>
        </div>
        <div className='top-bar-title'>
          <h1>Michael Roddy's Portfolio</h1>
        </div>
        <div className='top-bar-resume'>
          <a href='#resume' className='link'>My Resume</a>
        </div>
      </div>
      <div className='subsection'>
          <AbMe />
      </div>
      <div className='subsection'>
        <MyProjects />
      </div>
      <div className='subsection'>
        <WorkExperience />
      </div>
      <div className='footer'>
        <MyFooter />
      </div>
      </>
  );
}

export default App;
