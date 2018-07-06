import React from 'react';
import { func } from 'prop-types';
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

export default function withSearch(BaseComponent) {
  const ListWithSearch = ({ props }) => (
    <div className="list-withsearch-wrapper" style={style}>
      <div className="list-withsearch-n-controls" style={controlStyles}>
        <SearchBox
          onChange={props.onSearchboxChange}
          onSearchboxComplete={props.onSearchboxComplete}
        />
        {/* <ListControls /> */}
      </div>
      <BaseComponent {...props} />
    </div>
  );

  ListWithSearch.propTypes = {
    onSearchboxChange: func.isRequired,
    onSearchboxComplete: func.isRequired,
  };

  return ListWithSearch;
}
