import React from 'react';
import PropTypes from 'prop-types';
import List from '../index';
import ListControls from '../components/list-edit/list-edit';
import SearchBox from '../../searchbox';

const style = {
  background: '#ffffff',
  boxShadow: '0 0 10px 2px rgba(0,0,0,0.2)',
  display: 'flex',
  flexDirection: 'column',
  aligntItems: 'center',
  justifyContent: 'center',
};

const controlStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '92%',
};

export default (function withSearch(WrappedComponent) {
  const ListWithSearch = props => (
    <div className="list-withsearch-wrapper" style={style} >
      <div className="list-withsearch-n-controls" style={controlStyles}>
        <SearchBox
          onChange={props.onSearchboxChange}
          onSearchboxComplete={props.onSearchboxComplete}
        />
        <ListControls />
      </div>
      <WrappedComponent {...props} />
    </div>
  );

  ListWithSearch.propTypes = {
    onSearchboxChange: PropTypes.func.isRequired,
    onSearchboxComplete: PropTypes.func.isRequired,
  };

  return ListWithSearch;
}(List));
