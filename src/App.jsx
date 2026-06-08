import './index.css';

function App() {

  return (
    <>
      <div className='top-bar-container'>
        <a href='#contact' className='link'>Contact Me</a>
        <h1>Michael Roddy's Portfolio</h1>
        <a href='#resume' className='link'>My Resume</a>
      </div>
      <div className='about-me'>
        <h3>ABOUT ME</h3>

        <div className='about-me-area'>

        <div className='about-me-text'>
          <p>
            I am a Computer Science student at the University of Nebraska at Omaha
            with interests in software development, artificial intelligence, and
            problem solving.
          </p>
        </div>
        <div className='about-me-photo'>
          <img></img>
        </div>

        </div>
      </div>
      </>
  );
}

export default App;
