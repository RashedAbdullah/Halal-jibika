import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiYoutubeshorts } from "react-icons/si";

const FooterComp = () => {
  return (
    <div>
      <footer>
        <ul>
          <li>
            <a href="">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="">
              <RiInstagramFill />
            </a>
          </li>
          <li>
            <a href="">
              <SiYoutubeshorts />
            </a>
          </li>
        </ul>
      </footer>
      <div className="sub-footer">
        <p>
          2024 &#169; Halal jibika <span>Terms</span>
        </p>
      </div>
    </div>
  );
};

export default FooterComp;
