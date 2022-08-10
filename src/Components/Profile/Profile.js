import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
   return (
      <div className={s.content}>
         <div>
            <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
         </div>
         <div>
            <img src="https://thumbs.dreamstime.com/b/young-man-standing-cliff-edge-celebrates-reaching-top-mountain-arms-air-shouting-young-man-cliff-edge-213584552.jpg" />
         </div>
         <MyPosts/>
      </div>
   );
}

export default Profile;