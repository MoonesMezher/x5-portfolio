import "./ContactField.css";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsLightbulb } from "react-icons/bs";
import { CiMobile2 } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";

const ContactField = () => {
  return (
    <div className="contact_field">
      <form action="#" method="get" role="form" className="contact_form">
        <div className="first_line">
          <input type="text" name="name" placeholder="Name" required />
          <input
            type="email"
            name="email"
            id="email"
            pattern="[^ @]*@[^ @]*"
            placeholder="Email address"
            required
          />
        </div>
      </form>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" />
          <div className="icon-with-text">
            <i className="icon">
              <AiOutlineGlobal />
            </i>
            <span className="text-description">Website</span>
          </div>
        </label>

        <label className="checkbox-label">
          <input type="checkbox" />
          <div className="icon-with-text">
            <i className="icon">
              <BsLightbulb />
            </i>
            <span className="text-description">Branding</span>
          </div>
        </label>

        <label className="checkbox-label">
          <input type="checkbox" />
          <div className="icon-with-text">
            <i className="icon">
              <CiMobile2 />
            </i>
            <span className="text-description">Ecommerce</span>
          </div>
        </label>

        <label className="checkbox-label">
          <input type="checkbox" />
          <div className="icon-with-text">
            <i className="icon">
              <FaGoogle />
            </i>
            <span className="text-description">SEO</span>
          </div>
        </label>
      </div>
      <div className="text_box">
        <textarea
          name="message"
          placeholder="Tell me about the project"
        ></textarea>
      </div>
      <div className="send_button">
        <button type="submit">send</button>
      </div>
    </div>
  );
};

export default ContactField;
