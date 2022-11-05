import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from "react-router-dom";

const NavigationSidebar = (
 {
   active = 'explore'
 }
) => {
 return (
  <div className="col-2 col-md-2 col-lg-1 col-xl-2">
       <div className="list-group">
     <Link className="list-group-item" to="/tuiter"><i className="fa-brands fa-twitter"></i></Link>
     <Link className={`list-group-item
                    ${active === 'home'?'active':''}`}
                    to="/tuiter/home">
       <i className="fa-sharp fa-solid fa-house"></i> Home
     </Link>
     <Link className={`list-group-item
                    ${active === 'explore'?'active':''}`}
                    to="/tuiter/explore">
       <i className="fa-solid fa-hashtag"></i> Explore
     </Link>
     <Link className={`list-group-item
                    ${active === 'notifications'?'active':''}`}
                    to="/tuiter/notifications">
       <i className="fa-solid fa-bell"></i> Notifications
     </Link>
     <Link className={`list-group-item
                    ${active === 'messages'?'active':''}`}
                    to="/tuiter/messages">
       <i className="fa-sharp fa-solid fa-envelope"></i> Messages
     </Link>
     <Link className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}
                    to="/tuiter/bookmarks">
       <i className="fa-sharp fa-solid fa-bookmark"></i> Bookmarks
     </Link>
     <Link className={`list-group-item
                    ${active === 'lists'?'active':''}`}
                    to="/tuiter/lists">
       <i className="fa-solid fa-list"></i> Lists
     </Link>
     <Link className={`list-group-item
                    ${active === 'profile'?'active':''}`}
                    to="/tuiter/profile">
       <i className="fa-solid fa-user"></i> Profile
     </Link>
     <Link className={`list-group-item
                    ${active === 'more'?'active':''}`}
                    to="/tuiter/more">
      <i className="fa-solid fa-circle"></i> More
     </Link>
   </div>
  </div>

 );
};
export default NavigationSidebar;