import React from 'react';

const Selector = ({ name, label,options,value,onChangeSelection, textProperty,valueProperty,error}) => {
  //let optionsArr = [];
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
       <div className="input-group">
        <select
          className="custom-select"
          value={value} 
          onChange={(value)=>onChangeSelection(value)}>
          {options.map((option)=> (
            <option key={option[valueProperty]} value={option[textProperty]}>
               {option[textProperty]}
            </option>))}
        </select>
       </div>
    </React.Fragment>
  );
}
Selector.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id'
}
export default Selector;