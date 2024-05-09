import './ErrorPage.css';
import MainButton from '../../components/shared/MainButton/MainButton'

const ErrorPage = () => {
    return (
        <div className="error-page page">
            <h1 className='fill-text'>Oops!</h1>
            <h2>404 - PAGE NOT FOUND</h2>
            <MainButton title={'Try Again'} url={'/'}/>
        </div>
    )
}

export default ErrorPage