import React from 'react';
import { RadioGroup } from '../../imports';
import '../css/filter.css';

const filter = () => (
  <div className="filters-container">
    <div>
      <RadioGroup
        label="Created"
        foxes={[{ name: 'Today', id: 'todays-tasks', selected: false },
            { name: 'Yesterday', id: 'yest-tasks', selected: false }, { name: 'Older', id: 'old-tasks', selected: false }]}
      />
    </div>
    <br />
    <div>
      <RadioGroup
        label="Custom Labels"
        foxes={[{ name: 'Productivity', id: 'prod', selected: false },
            { name: 'Excercise', id: 'excer', selected: false }, { name: 'Yoga', id: 'yoga', selected: false }]}
      />
    </div>
  </div>
);

export default filter;
