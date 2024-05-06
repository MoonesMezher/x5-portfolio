
import { useState } from 'react'
import MainInput from '../../components/shared/MainInput/MainInput'
import './Login.css'
import MainButton from '../../components/shared/MainButton/MainButton';

const Login = () => {
    const [email ,setEmail] = useState('');
    const [error ,setError] = useState({});
    const [password ,setPassword] = useState('');
    return (
        <section className="login page main-container">
            <div className="ne-login-card">
                <h1>Log in</h1>
                <form method="post">
                    <MainInput  type={'email'} errorRequest={error} label='Email' value={email} setValue={setEmail} filed={'email'} required={true} placeholder='Enter Your Email'  />
                    <MainInput  type={'password'} label='Password' value={password} setValue={setPassword} filed={'password'} required={true} placeholder='Enter Your Password'  />
                    <div className="login-btn">
                        <MainButton title='Log in' url='/' />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login