import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './css/footer.css';

function MyFooter() {
    
    return(
        <div className="footer-links">
            <a href="https://github.com/MikeRoddy05" target="_blank">
                <FaGithub />
            </a>

            <p className="copyright">
                © 2026 Michael Roddy. Built with React
            </p>

            <a href="www.linkedin.com/in/michael-roddy-b439082a0" target="_blank">
                <FaLinkedin />
            </a>
        </div>
    );
}

export default MyFooter;