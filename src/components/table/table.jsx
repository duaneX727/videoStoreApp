import React from 'react';
import TableBody from './tableBody';
import TableHeader from './tableHeader';
import { PropTypes } from 'prop-types';

const Table = ({sortColumn,onSort, data, columns}) => {
  return ( 
    <table className="table">
        <TableHeader 
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody 
          data={data} 
          columns={columns}
        />
      </table>
   );
}
Table.propTypes = {
  movies: PropTypes.array,onSort: PropTypes.func.isRequired,sortColumn: PropTypes.object.isRequired, columns: PropTypes.array
}
export default Table;