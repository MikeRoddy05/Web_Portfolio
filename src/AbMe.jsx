
import headShot from './data/about/Roddy_Michael.jpg';
import './css/about.css';
function AbMe() {

    return (
        <>
        <div className="title">
            <h3>About Me</h3>
        </div>
        <div className='ab-me-content'>
            <div className='ab-me-photo'>
                <img src={headShot} alt="Michael Roddy" />
            </div>
            <div className="ab-me-text">
                <p>I'm Michael Roddy, a Computer Science student at the University of Nebraska at Omaha, 
                    pursuing a B.S. in Computer Science (Software Engineering concentration) alongside a 
                    B.S. in Artificial Intelligence, with a 3.97 GPA and an expected graduation of May 2027.</p>
                <p>I'm currently a Systems Test Engineer Intern at WoodmenLife, where I work with Agile teams 
                    automating regression and API testing. Outside of work, I have built full-stack projects spanning 
                    React, Django, and machine learning — from a peer-to-peer service marketplace to an LSTM-based 
                    stock price predictor. I got into CS because I've always had a knack for solving problems and 
                    a fascination with automation — figuring out what actually makes a computer work.</p>
                <p>When I'm not coding, you'll usually find me outdoors — golfing, disc golfing, bowling, hunting, 
                    or working on the farm, usually with a dog nearby. I'm also an Eagle Scout, which is where a lot 
                    of my instinct for planning things out and seeing them through probably comes from.</p>
            </div>
        </div>
        </>
    );
}

export default AbMe;