import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { getGenres } from '../services/fakeGenreService';

class MoviesForm extends Form {
  constructor(){
    super();
    this.state = {
        data:{title: '', genre: 'Choose', numberInStock: '', dailyRentalRate:''}, 
        genres: [],
        errors: {}
    }

    // Bind handlers here
  }
  componentDidMount() {
    let genres = getGenres();
    genres.unshift(
      { _id: '0', name: "Choose..." }
      );
    this.setState({
      genres
    });
  }
  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().allow(null, '').label("Genre"),
    numberInStock: Joi.number().required().min(0).max(100).label("Number in Stock"),
    dailyRentalRate: Joi.number().required().min(0).max(5).label("Rate")
  }
  doSubmit = () => {
    // Call the server
    //this.props.history.replace('/shop');
    console.log('Submitted');
  }
  
  render() {
   //console.log('Schema: ',this.schema);
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('title', 'Title')}
          {this.renderSelectorInput('genre', 'Genre', 'select')}
          {this.renderInput('numberInStock', 'Number in Stock')}
          {this.renderInput('dailyRentalRate', 'Rate')}
          {this.renderButton('Submit', 'submit')}
        </form>
      </div>);
  }
  
}

export default MoviesForm;

