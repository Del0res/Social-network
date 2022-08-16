import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const setActiveLink = navData => navData.isActive ? s.active : s.item;

const Navbar = () => {
   return (
      <nav className={s.nav}>
         <div>
            <NavLink to="/profile" className={setActiveLink}>Profile</NavLink>
         </div>
         <div>
            <NavLink to="/dialogs" className={setActiveLink}>Messages</NavLink>
         </div>
         <div>
            <NavLink to="/news" className={setActiveLink}>News</NavLink>
         </div>
         <div>
            <NavLink to="/music" className={setActiveLink}>Music</NavLink>
         </div>
         <div>
            <NavLink to="/setting" className={setActiveLink}>Settings</NavLink>
         </div>
      </nav>
   );
}

export default Navbar;