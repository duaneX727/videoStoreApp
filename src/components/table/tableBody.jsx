import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { PropTypes } from 'prop-types';

// movies
// onLike
// onDelete

class TableBody extends Component {
  renderCell = (item, column, id) => {
    if(column.content) return column.content(item);
    if(column.path === 'title') return <Link to={`/nav/movies/${id}`}>{item.title}</Link>;
    return _.get(item, column.path);
  };
  createKey = (item, column) =>{
    return item._id + (column.path || column.key);
  };
  render() { 
    const {data, columns} = this.props;
    return (
    <tbody>
      {data.map(item => <tr key={item._id}>
       {columns.map(column => <td key={this.createKey(item, column)}>{this.renderCell(item, column, item._id)}</td>)}
      </tr>)}
    </tbody>
    );
  }
}
TableBody.propTypes = {
  data: PropTypes.array.isRequired, columns: PropTypes.array.isRequired
} 
export default TableBody;