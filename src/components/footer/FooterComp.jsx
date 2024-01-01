// FooterComp.jsx
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiYoutubeshorts } from "react-icons/si";

const FooterComp = () => {
  return (
    <div>
      <footer className="footer">
        <ul>
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/Rashed4Abdullah"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/rashed4abdullah"
              rel="noopener noreferrer"
            >
              <RiInstagramFill />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/@Ahlam_Sub"
              rel="noopener noreferrer"
            >
              <SiYoutubeshorts />
            </a>
          </li>
        </ul>
      </footer>
      <div className="sub-footer">
        <p>2024 &#169; Halal Jibika Team</p>
      </div>
    </div>
  );
};

export default FooterComp;
