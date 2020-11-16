import React from 'react';

const Selector = ({ name, label, options, selectedValue: value, textProperty, valueProperty,onChangeSelection}) => {
  //console.log('Selector: value: ', value);
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
       <div className="input-group">
        <select
          className="custom-select"
          value={value} 
          onChange={(value)=>onChangeSelection(value,name)}>
          {options.map((option)=> (
            <option key={option[valueProperty]} value={option[textProperty]}>
               {option[textProperty]}
            </option>))}
        </select>
        {/* {error && <div className="alert alert-danger">{error}</div>} */}
       </div>
    </React.Fragment>
  );
}
Selector.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id'
}
export default Selector;