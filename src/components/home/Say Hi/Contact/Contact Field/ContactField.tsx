import { useState } from "react";
import MainInput from "../../../../shared/MainInput/MainInput";
import "./ContactField.css";
import MainButton from "../../../../shared/MainButton/MainButton";
import axios from "axios";
import API from "../../../../../api/axios";
import Loading from "../../../../shared/Loading/Loading";

const ContactField = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [error, setError] = useState({});
  const [loading, setLoading] = useState<boolean>(false);
  
  const handleSendMessage = () => {
    const data = {
      name: name,
      email: email,
      body: body
    };
    
    setLoading(true);

    axios.post(API.POST.messages, data)
      .then(res => {
        setError({});
        setLoading(false);
        window.scrollTo(0,0)
      })
      .catch(err => {
        setError({});
        
        if(err.response.data.errors) {
          setError(err.response.data.errors);
        }
        setLoading(false);
      });
  }

  return (
    <div className="contact_field">
      <form method="post" role="form" className="contact_form">
        <Loading loading={loading}/>
        <MainInput type={'text'} label="Name" errorRequest={error} value={name} setValue={setName} filed={'name'} required={true} placeholder={'Enter Your Name'}/>
        <MainInput type={'email'} label="Email" errorRequest={error} value={email} setValue={setEmail} filed={'email'} required={true} placeholder={'Enter Your Email'}/>
        <MainInput textarea={true} label="Message" errorRequest={error} value={body} setValue={setBody} filed={'body'} required={true} placeholder={'Enter Your Message'}/>
        <div className="btn" onClick={handleSendMessage}>
          <MainButton type="" title="Send" url="/"/>
        </div>
      </form>
    </div>
  );
};

export default ContactField;
