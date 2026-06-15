import work from './data/work/work.json';
import './css/work.css';

function WorkExperience() {

    return(
        <>
        <div className='title'>
            <h3>My Work Experience</h3>
        </div>
        <div className="work-container">
            <div className="experience-section">
                {work.map((work, index) => (
                    <div className='experience-card' key={index}>
                        <h2>{work.company}</h2>
                        <p className='work-position'>{work.position}</p>
                        <p className='work-description'>{work.description}</p>
                        <ul>
                            {work.highlights.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                        <div className='work-footer'>
                            <p className='work-location'>{work.location}</p>
                            <p className='work-dates'>{work.dates}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default WorkExperience;