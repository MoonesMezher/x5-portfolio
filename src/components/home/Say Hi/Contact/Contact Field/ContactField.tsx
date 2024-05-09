import { useState } from "react";
import MainInput from "../../../../shared/MainInput/MainInput";
import "./ContactField.css";
import MainButton from "../../../../shared/MainButton/MainButton";

const ContactField = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState({});

  return (
    <div className="contact_field">
      <form method="post" role="form" className="contact_form">
        <MainInput type={'text'} label="Name" errorRequest={error} value={name} setValue={setName} filed={'name'} required={true} placeholder={'Enter Your Name'}/>
        <MainInput type={'email'} label="Email" errorRequest={error} value={email} setValue={setEmail} filed={'email'} required={true} placeholder={'Enter Your Email'}/>
        <MainInput textarea={true} label="Message" errorRequest={error} value={body} setValue={setBody} filed={'body'} required={true} placeholder={'Enter Your Message'}/>
        <div className="btn">
          <MainButton title="Send" url="/"/>
        </div>
      </form>
    </div>
  );
};

export default ContactField;
