import React from 'react';
import PropTypes from 'prop-types';

const ListGroup = ({items, selectedItem, onItemSelect,textProperty, valueProperty}) => {
    return ( 
    <ul className="list-group">
      {items.map(item => (
        <li 
            key={item[valueProperty]}
            className={item === selectedItem ? "list-group-item active" : "list-group-item"}
            style={{cursor: 'pointer'}} 
            onClick={()=> onItemSelect(item)}>
            {item[textProperty]}
        </li>))
      }
    </ul>
       );
}
ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id',
}
ListGroup.propTypes = {
  items: PropTypes.array.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  selectedItem: PropTypes.object, 
}
export default ListGroup;