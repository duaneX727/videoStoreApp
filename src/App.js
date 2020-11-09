import React from 'react';
import RegisterForm from './components/registerForm';
import CustomersForm from './components/customerForm';
import RentalsForm from './components/rentalsForm';
import NotFound from './components/notFound';
import Movies from './components/movies/movies';
import MoviesForm from './components/moviesForm';
import LoginForm from './components/loginForm';
import { Route, Redirect, Switch } from 'react-router-dom';
import NavBar from './components/navigation/navbar';
import './App.css';


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/movies/new" component={MoviesForm} />
          <Route path="/movies/:id" component={MoviesForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={CustomersForm} />
          <Route path="/rentals" component={RentalsForm} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
