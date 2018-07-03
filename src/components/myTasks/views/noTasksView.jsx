import React from 'react';

const noTasksView = () => (
  <div style={{
    color: '#E0E9E9',
    fontFamily: 'Open Sans',
    textAlign: 'center',
    fontSize: '1.5em',
    width: '450px',
  }}
  >
    <span>You dont have any tasks.</span><br /> <span>Create one using the Add button.</span>
  </div>
);

export default noTasksView;
