import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies/movies';
import { Route, Switch } from 'react-router-dom';
import MovieDetails from './components/movieDetails';
import MovieComponent from './components/movieComponent';
import RentalComponent from './components/rentalComponent';
import CustomerComponent from './components/customerComponent';
import Home from './components/home';
import NavBar from './components/navigation/navbar';
import _ from 'lodash';



class App extends Component {
  state = {
    navItem: null
  }
  handleNavItemSelect = navItem => {
    this.setState({
      navItem,
    });
  }
  handleItemSelect = item => {
    console.log(item);
    //const _id = _.get(item, "_.id");
  }
  handelMovieId = id => {
    this.setState({
      id
    });
  }
  render() {
    const { navItem } = this.state;
    return (
      <main className="container">
        <NavBar
          selectedNavItem={navItem}
          onItemSelect={this.handleNavItemSelect}
        />
        <div className="content">
          <Switch>
            <Route path="/nav/movies/:id" component={MovieDetails}/>
            <Route path="/nav/movies" component={MovieComponent} />
            <Route path="/nav/rentals" component={RentalComponent} />
            <Route path="/nav/customers" component={CustomerComponent} />
            {/* <Route path="/" component={Home}/> */}
          </Switch>
          {navItem === null && <Movies onItemSelect={this.handleItemSelect}/>}
        </div>
      </main>
    );
  }
}
export default App;
