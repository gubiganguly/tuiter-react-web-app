import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';

const NavigationSidebar = (
 {
   active = 'explore'
 }
) => {
 return (
   <div className="list-group">
     <a className="list-group-item"><i class="fa-brands fa-twitter"></i></a>
     <a className={`list-group-item
                    ${active === 'home'?'active':''}`}>
       <i class="fa-sharp fa-solid fa-house"></i> Home
     </a>
     <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
       <i class="fa-solid fa-hashtag"></i> Explore
     </a>
     <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
       <i class="fa-solid fa-bell"></i> Notifications
     </a>
     <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
       <i class="fa-sharp fa-solid fa-envelope"></i> Messages
     </a>
     <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
       <i class="fa-sharp fa-solid fa-bookmark"></i> Bookmarks
     </a>
     <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
       <i class="fa-solid fa-list"></i> Lists
     </a>
     <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
       <i class="fa-solid fa-user"></i> Profile
     </a>
     <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
      <i class="fa-solid fa-circle"></i> More
     </a>
   </div>
 );
};
export default NavigationSidebar;