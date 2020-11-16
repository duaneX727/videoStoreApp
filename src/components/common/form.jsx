import React, { Component } from 'react'
import Joi from 'joi-browser';
import Input from './input';
import Selector from './selector';
class Form extends Component {

  validate = () => {
    const options = {abortEarly: false};
    const { error } = Joi.validate(this.state.data, this.schema,options);
    if(!error) return null;
    const errors = {};
    for (let item of error.details)
      errors[item.path[0]] = item.message;
    return errors;
  }
  validateProperty = ({name, value}) => {
    const obj = { [name]: value};
    const schema = {[name]: this.schema[name]};
    const {error} = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  }
  handleSubmit = e => {
    console.log('All Data: ', JSON.stringify(this.state.data));
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    //this.doSubmit();
  };
  handleChange = ({currentTarget: input},name) => {
    const errors = {...this.state.errors };
    // console.log('input: value -',input.value);
    // console.log('input: name -', name);
    const errorMessage = this.validateProperty(input);
     //console.log(errorMessage);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
     const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };
  handleChangeSelect = ({currentTarget: input},name) => {
    const errors = {...this.state.errors };
    // console.log('input: value -',input.value);
    // console.log('input: name -', name);
     const data = { ...this.state.data };
    data[name] = input.value;
    this.setState({ data, errors });
  };
  renderInput(name, label, type = 'text') {
    const { data, errors } = this.state;
    return (
    <Input
      type={type}
      
      name={name}
      label={label}
      value={data[name]}
      onChange={this.handleChange}
      error={errors[name]} 
    />);
  };
  renderSelectorInput(name, label, type, ref) {
    const { data, genres, errors} = this.state;
    console.log('renderSelectorInput: ',data.genre);
    return (
      <Selector
        type={type}
        ref={ref}
        name={name}
        label={label}
        selectedValue={data.genre}
        options={genres}
        onChangeSelection={this.handleChangeSelect}
        error={errors[name]}
      />
    );
  };
  renderButton(label, type) {
    return <button
      type={type}
      disabled={this.validate()}
      className="btn btn-primary"
      onClick={(e) => this.handleSubmit(e)}>
      {label}
    </button>
  };
}
export default Form;