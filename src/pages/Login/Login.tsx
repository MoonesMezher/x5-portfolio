
import { useState } from 'react'
import MainInput from '../../components/shared/MainInput/MainInput'
import './Login.css'
import MainButton from '../../components/shared/MainButton/MainButton';
import axios from 'axios';
import API from '../../api/axios';
import { useNavigate } from 'react-router';
import { useAdminContext } from '../../hooks/useAdminContext';

const Login = () => {
    const [email ,setEmail] = useState('');
    const [error ,setError] = useState({});
    const [password ,setPassword] = useState('');

    const navigate = useNavigate();

    const { dispatch } = useAdminContext();

    const handleLogin = () => {
        const data = {
            email: email,
            password: password
        }
        axios.post(API.POST.login, data)
            .then(res => {
                if(res.data.admin) {
                    dispatch({ type: 'LOGIN'});
                    navigate('/');
                }                       
            })
            .catch(err => {
                setError(err.response.data);
            });
    }

    return (
        <section className="login page">
            <div className="ne-login-card main-container">
                <h1>Log in</h1>
                <form method="post">
                    <MainInput  type={'email'} errorRequest={error} label='Email' value={email} setValue={setEmail} filed={'email'} required={true} placeholder='Enter Your Email'  />
                    <MainInput  type={'password'} label='Password' value={password} setValue={setPassword} filed={'password'} required={true} placeholder='Enter Your Password'  />
                    <div className="login-btn" onClick={handleLogin}>
                        <MainButton title='Log in' url='#' />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login