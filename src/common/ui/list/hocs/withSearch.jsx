import React from 'react';
import PropTypes from 'prop-types';
import List from '../index';
import SearchBox from '../../searchbox';

export default (function withSearch(WrappedComponent) {
  const ListWithSearch = props => (
    <div className="list-withsearch-wrapper">
      <SearchBox
        onChange={props.onSearchboxChange}
        onSearchboxComplete={props.onSearchboxComplete}
      />
      <WrappedComponent {...props} />
    </div>
  );

  ListWithSearch.propTypes = {
    onSearchboxChange: PropTypes.func.isRequired,
    onSearchboxComplete: PropTypes.func.isRequired,
  };

  return ListWithSearch;
}(List));
