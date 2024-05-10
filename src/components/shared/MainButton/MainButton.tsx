import { Link } from "react-router-dom"
import './MainButton.css'

const MainButton = ({ url, title , type  } : { url: string, title: string ,type:string  }) => {
    return (
        <Link to={url} className='main-button bg-purple text-white' type={type} >{title}</Link>
    )
}

export default MainButton