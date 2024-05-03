import { FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contactinfo">
      <div className="leftcolumn">
        <div className="first_row">
          <strong>SERVICES</strong>
          <ul>
            <li>
              <a href="#">Websites</a>
            </li>
            <li>
              <a href="#">Branding</a>
            </li>
            <li>
              <a href="#">Ecommerce</a>
            </li>
            <li>
              <a href="#">SEO</a>
            </li>
          </ul>
        </div>
        <div className="second_row">
          <strong>STAY CONNECTED</strong>
          <ul>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <FaPinterest />
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
        <div className="third_row">
          <strong>START A PROJECT</strong>
          <p>I'm available for freelance projects</p>
        </div>
      </div>
      <div className="rightcolumn">
        <strong>ABOUT</strong>
        <p>
          Joshua is a professional web developer. Feel free to get in touch with
          me.
        </p>
        <strong className="contact_email">EMAIL</strong>
        <p>
          <a href="#">hello@josh.design</a>
        </p>
        <strong className="contact_call">CALL</strong>
        <p>
          <a href="#">120-240-9600</a>
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
