import { PiPhone } from "react-icons/pi"
import { NavLink } from "react-router-dom"
import './Header.css'
import { useState } from "react"
import { MdMenu } from "react-icons/md"
import { CgClose } from "react-icons/cg"

const Header = () => {
    let [changeColor, setChangeColor] = useState<boolean>(false);

    let [showMenu, setShowMenu] = useState<boolean>(false);

    const links = [
        {
            title: 'HOME',
            url: '#'
        },
        {
            title: 'ABOUT',
            url: '#'
        },
        {
            title: 'SERVICES',
            url: '#'
        },
        {
            title: 'PROJECTS',
            url: '#'
        },
        {
            title: 'CONTACT',
            url: '#'
        },
    ]

    window.onscroll = function() { 
        setTimeout(() => {
            setChangeColor(window.scrollY > 10)
        }, 500);
    };

    return (
        <header className={`mm-header main-container ${changeColor ? 'changed-header': ''} ${showMenu && 'show-menu' }`}>
            {!showMenu ?<MdMenu className="menu" onClick={() => setShowMenu(true)}/>
                :<CgClose className="menu" onClick={() => setShowMenu(false)}/>}
            <div className="left-side">
                <span className="logo font-5">X5</span>
                <ul>
                    {links.map((e, i) => <li key={i}><NavLink to={e.url} className={'active-link font--1'}>{e.title}</NavLink></li>)}
                </ul>
            </div>
            <div>
                <PiPhone className="icon"/>
                <span className="number">120-240-9600</span>
            </div>
        </header>
    )
}

export default Header