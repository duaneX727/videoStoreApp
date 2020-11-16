import React from 'react';


class MoviesDetail extends React.Component {
  handleClick = () =>{
     this.props.history.push('/movies');
  }
  render() { 
    return (
    <React.Fragment>
      <h1>Movie Details - 
        {this.props.match.params.id}
      </h1>
      <button onClick={this.handleClick}>
        Save
      </button>
    </React.Fragment>);
  }
}
 
export default MoviesDetail;