import React from 'react';
import s from './Navbar.module.css';

// // let s = {
// //    'nav': 'Navbar_nav__5eh32',
// //    'item': 'Navbar_item__7fg42'
//       'active': 'Navbar_active__9gtg45'
// // }



const Navbar = () => {
   return (
      <nav className={s.nav}>
         <div className={s.item}>
            <a>Profile</a>
         </div>
         <div className={`${s.item} ${s.active}`}>
            <a>Messages</a>
         </div>
         <div className={s.item}>
            <a>News</a>
         </div>
         <div className={s.item}>
            <a>Music</a>
         </div>
         <div className={s.item}>
            <a>Settings</a>
         </div>
      </nav>
   );
}

export default Navbar;