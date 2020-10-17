import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies';
import { Route, Switch } from 'react-router-dom';
import MovieComponent from './components/common/pages/movieComponent';
import RentalComponent from './components/common/pages/rentalComponent';
import CustomerComponent from './components/common/pages/customerComponent';
import NavBar from './components/common/pages/navbar';


class App extends Component {
  state = {
    navItem: null
  }
  handleNavItemSelect = navItem => {
    this.setState({
      navItem
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
            <Route path="/nav/movies" component={MovieComponent} />
            <Route path="/nav/rentals" component={RentalComponent} />
            <Route path="/nav/customers" component={CustomerComponent} />
          </Switch>
          {navItem === null && <Movies />}
        </div>
      </main>
    );
  }
}
export default App;
