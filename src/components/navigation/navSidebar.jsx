import React from 'react';
import {Link} from 'react-router-dom';

const NavSideBar = ({onItemSelect,selectedNavItem:item}) => {
  return ( 
    <ul className="navbar-nav mr-left">
      <li className="nav-item ">
        <Link 
          className={(item === 'movies') ? "nav-link text-white bg-primary":"nav-link"} 
          to="/nav/movies"
          onClick={()=> onItemSelect('movies')}>
          Movies
        </Link>
      </li>
      <li className="nav-item">
        <Link 
          className={(item === 'customers') ? "nav-link text-white bg-primary":"nav-link"} 
          to="/nav/customers"
          onClick={()=> onItemSelect('customers')}
        >
          Customers
        </Link>
      </li>
      <li className="nav-item">
        <Link 
          className={(item === 'rentals') ? "nav-link text-white bg-primary":"nav-link"} 
          to="/nav/rentals"
          onClick={()=> onItemSelect('rentals')}
        >
          Rentals
        </Link>
      </li>
    </ul> 
  );
}

export default NavSideBar;