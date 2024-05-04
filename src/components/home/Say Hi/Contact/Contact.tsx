import ContactField from "./Contact Field/ContactField";
import ContactInfo from "./Contact Info/ContactInfo";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <ContactInfo />
      <ContactField />
    </div>
  );
};

export default Contact;
