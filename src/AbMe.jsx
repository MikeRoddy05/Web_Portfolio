
import headShot from './data/about/Roddy_Michael.jpg';
import './css/about.css';
function AbMe() {

    return (
        <>
        <div className="title">
            <h3>About Me</h3>
        </div>
        <div className='ab-me-content'>
            <div className="ab-me-text">            
                <p>My name is Michael Roddy and I am a senior at the University of Nebraska at Omaha. 
                    I am studying Computer Science with a concentration in Software Engineering and 
                    I am also majoring in Artificial Intelligence.</p>
            </div>
            <div className='ab-me-photo'>
                <img src={amazingPhoto} alt="Michael Roddy" />
            </div>
        </div>
        </>
    );
}

export default AbMe;