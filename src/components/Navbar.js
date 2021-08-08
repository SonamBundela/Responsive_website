import React,{useState,useEffect} from 'react'
import {NavLink} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } 
        else{
        setButton(true);
        }
    };
    useEffect(()=>{
     showButton();
    }, []);
        window.addEventListener('resize', showButton);
    
    return (
        <>
         <nav className='navbar'>
         <div className='navbar-container'>
         <NavLink to='/' className='navbar-logo' onClick={ closeMobileMenu}>
         Affy Informatics Pvt. Ltd. </NavLink>
         <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink exact to='/' className='nav-links' onClick={closeMobileMenu}>
                Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink exact to='/services'className='nav-links'onClick={closeMobileMenu}>
                Services </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink exact to='/contactus'className='nav-links'onClick={closeMobileMenu} >
               ContactUs</NavLink>
            </li>
            <li>
              <NavLink exact to='/sign-up'className='nav-links-mobile'onClick={closeMobileMenu}>
              Registration</NavLink>
            </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Registration</Button>}
            
          </div>
          </nav>
        </>
    );
}


export default Navbar
