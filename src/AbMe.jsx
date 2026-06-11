
import about from './data/about/about.json';
import amazingPhoto from './data/about/amazingPhoto.JPG';
import './css/about.css';
function AbMe() {

    return (
        <>
        <div className="title">
            <h3>About Me</h3>
        </div>
        <div className='ab-me-content'>
            <div className="ab-me-text">            
                <p>{about.description}</p>
            </div>
            <div className='ab-me-photo'>
                <img src={amazingPhoto} alt="Michael Roddy" />
            </div>
        </div>
        </>
    );
}

export default AbMe;