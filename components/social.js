import styles from "styles/social.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

export default function Social({ iconSize = "initial" }) {
  return (
    <ul className={styles.list} style={{ "--icon-size": iconSize }}>
      <li>
        <a href="https://twitter.com/pronomin_">
          <FontAwesomeIcon icon={faTwitter} color="rgb(47, 152, 187)" />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
    </ul>
  );
}
