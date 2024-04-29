import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import './MainLink.css'
import { TMainLinkProps } from "../../../types";

const MainLink = ( { info } : TMainLinkProps ) => {
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