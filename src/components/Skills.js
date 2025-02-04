import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { Fade, Slide } from "react-awesome-reveal";

function Skills() {
  return (
    <div className="skills-container">
      <ul className="list-skill">
        <Slide direction="left" triggerOnce>
          <li>
            <Fade cascade delay={200} triggerOnce>
              <p>javascript</p>
              <FontAwesomeIcon
                icon={faJs}
                style={{ color: "#FFD43B" }}
                className="icon-skill"
              />
            </Fade>
          </li>
          <li>
            <Fade cascade delay={200} triggerOnce>
              <p>React</p>
              <FontAwesomeIcon
                icon={faReact}
                style={{ color: "#74C0FC" }}
                className="icon-skill"
              />
            </Fade>
          </li>
          <li>
            <Fade cascade delay={200} triggerOnce>
              <p>Mysql</p>
              <FontAwesomeIcon icon={faDatabase} className="icon-skill" />
            </Fade>
          </li>
        </Slide>
      </ul>
    </div>
  );
}
export default Skills;
