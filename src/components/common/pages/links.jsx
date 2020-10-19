import React from 'react';
import Link from 'react-router-dom';

const Links = (item) => {
  return ( 
    console.log('item',_.get(item,'_id'))
  <Link 
    className="text-white bg-primary" 
    to="/nav/movies"
    onClick={()=>  }
  </Link> );
}
 
export default Links;