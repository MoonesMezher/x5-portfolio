import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import './MainLink.css'

const MainLink = ( { info } : { info: { url: string, title: string } } ) => {
    const [isActive, setIsActive] = useState<boolean>(false)

    let { pathname } = useLocation();

    useEffect(() => {
        setIsActive(pathname === info.url);
    }, [pathname]);    
    
    return (
        <li className={`mm-main-link ${isActive && "active"}`}>
            <Link to={info.url} className={`active-link font--1`}>{info.title}</Link>
        </li>
    )
}

export default MainLink