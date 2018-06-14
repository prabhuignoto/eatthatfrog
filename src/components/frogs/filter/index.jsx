import React, { Component } from 'react';
import { DropdownFox } from '../../imports';
import './filter.css';

class TaskFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div className="filters-container">
        <div>
          <DropdownFox
            label="Created"
            foxes={[{ name: 'Today', id: 'todays-tasks', selected: false },
            { name: 'Yesterday', id: 'yest-tasks', selected: false }, { name: 'Older', id: 'old-tasks', selected: false }]}
          />
        </div>
        <br />
        <div>
          <DropdownFox
            label="Custom Labels"
            foxes={[{ name: 'Productivity', id: 'prod', selected: false },
            { name: 'Excercise', id: 'excer', selected: false }, { name: 'Yoga', id: 'yoga', selected: false }]}
          />
        </div>
      </div>
    );
  }
}

export default TaskFilter;
