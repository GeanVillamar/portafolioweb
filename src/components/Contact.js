import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <div className="container-contact">
      <footer>
        <h1>Contact</h1>
        <ul>
          <li>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="icon-contact" />
              Email: geanfranklinvillamar@gmail.com
            </p>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/gean-villamar-911707333/">
              <FontAwesomeIcon icon={faLinkedinIn} className="icon-contact" />
              Linkendin: Gean Villamar
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
export default Contact;
