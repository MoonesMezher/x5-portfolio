import { PiPhone } from "react-icons/pi"
import { Link, useLocation } from "react-router-dom"
import './Header.css'
import { useEffect, useState } from "react"
import { MdMenu } from "react-icons/md"
import { CgClose } from "react-icons/cg"
import MainLink from "../MainLink/MainLink"

const Header = () => {
    let [changeColor, setChangeColor] = useState<boolean>(false);

    let [showMenu, setShowMenu] = useState<boolean>(false);

    let { pathname } = useLocation();

    const links = [
        {
            title: 'HOME',
            url: '/'
        },
        {
            title: 'LOGIN',
            url: '/login'
        },
        {
            title: 'DASHBOARD',
            url: '/dashboard'
        },
    ]    

    window.onscroll = function() { 
        setTimeout(() => {
            setChangeColor(window.scrollY > 10)
        }, 500);
    };

    useEffect(() => {
        setShowMenu(false);
        window.scrollTo(0,0)
    }, [pathname]);

    return (
        <header className={`mm-header main-container ${changeColor ? 'changed-header': ''} ${showMenu && 'show-menu' }`}>
            <div className="left-side">
                <Link to={'/'} className="logo font-5">X5</Link>
                <ul>
                    {links.map((e, i) => <MainLink key={i} info={e}/>)}
                </ul>
            </div>
            <div>
                <PiPhone className="icon"/>
                <span className="number">120-240-9600</span>
                {!showMenu ?<MdMenu className="menu" onClick={() => setShowMenu(true)}/>
                    :<CgClose className="menu" onClick={() => setShowMenu(false)}/>}
            </div>
        </header>
    )
}

export default Header