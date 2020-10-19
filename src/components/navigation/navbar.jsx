import React from 'react';
import NavSideBar from './navSidebar';
import {Link} from 'react-router-dom';

const NavBar = ({selectedNavItem, onItemSelect}) => {
   return ( 
    <nav 
      className="navbar navbar-expand-sm navbar-light bg-light">
        <Link 
          className="navbar-brand mb-0" 
          to="/"
        >
        Vidly
        </Link>
      <NavSideBar
          selectedNavItem={selectedNavItem} 
          onItemSelect={onItemSelect}
      />
    </nav>
     );
}
export default NavBar;
