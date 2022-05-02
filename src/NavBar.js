import React, { useState } from 'react'
import "./NavBar.css";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
function NavBar() {

    const [navbar, setNavbar] = useState(false);
    console.log(navbar);

    return (
        <>
            <nav className='navbar'>
                <div className="logo">
                    <h2>Kamlesh Banewar</h2>
                </div>

                <div className={navbar ? "menu mobail_menu" : "menu"}>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/services'>Services</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>

                <div className="socialMidia">
                    <ul className='socialMidia_handler'>
                        <li><NavLink to="https://www.facebook.com/people/Kamlesh-Banewar/100007618367563/" target="_blank"></NavLink><FaFacebookF /></li>
                        <li><NavLink to=":https://www.instagram.com/kamlesh__banewar/" target="_blank"></NavLink><FaInstagram /></li>
                        <li><NavLink to="https://www.facebook.com/people/Kamlesh-Banewar/100007618367563/" target="_blank"></NavLink><FaLinkedin /></li>
                    </ul>
                    <div className="hamburg">
                        <NavLink to="#" onClick={() => setNavbar(!navbar)}>
                            <GiHamburgerMenu />
                        </NavLink>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default NavBar