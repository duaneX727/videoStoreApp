import React, { Component } from 'react';
import { getMovies } from '../../services/fakeMovieService';
import Pagination from '../../utils/pagination';
import { paginate } from '../../utils/paginate';
import { genres, getGenres} from '../../services/fakeGenreService';
import ListGroup from '../common/list-group';
import MoviesTable from './moviesTable';
import { Link } from 'react-router-dom';
import _ from 'lodash';


class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: 'title', order: 'asc' }
  };
  componentDidMount() {
    let genres = [...getGenres()];
    genres.unshift({ _id: '0', name: "All Genres" });
    //genresArr.forEach(g => (genres.push(`{ id: '${g._id}', name: '${g.name}' },`)));
    this.setState({
      movies: getMovies(),
      genres
    });
  }
  handleDelete = mov => {
    const movies = this.state.movies.filter(m => m._id !== mov._id);
    this.setState({
      movies
    })
  }
  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies })
  }
  handlePageChange = page => {
    this.setState({ currentPage: page });
  }
  handleGenreSelect = genre => {
    let movies = (genre._id === "0") ? getMovies() : [...this.state.movies];
    this.setState({
        movies,
        selectedGenre: genre,
        currentPage: 1,
    });
  }
  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const { pageSize, currentPage, selectedGenre, movies: allMovies, sortColumn } = this.state;
    const filtered =
      selectedGenre && selectedGenre._id && selectedGenre._id !== '0' ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn } = this.state;
    if (count === 0)
      return (<p>There are no movies in the database.</p>);

    const { totalCount, data: movies } = this.getPageData();
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <button id="new-btn" className="btn btn-primary btn-lg"><Link to="/movies/new">
            New Movie
          </Link></button>
          <p>
            Showing {totalCount} movies in the database.
          </p>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;