import { Link } from "react-router-dom"
import './MainButton.css'

const MainButton = ({ url, title } : { url: string, title: string }) => {
    return (
        <Link to={url} className='main-button bg-purple text-white'>{title}</Link>
    )
}

export default MainButton