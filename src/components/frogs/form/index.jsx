import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../common/form/textinput';
import TextArea from '../../common/form/textarea';
import Button from '../../common/form/button';
import './form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
    this.handleName = this.handleName.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleName(ev) {
    this.setState({
      name: ev.target.value,
    });
  }

  handleTextArea(ev) {
    this.setState({
      description: ev.target.value,
    });
  }

  handleSave() {
    const { name, description } = this.state;
    this.props.saveForm(name, description);
  }

  render() {
    return (
      <div className="form-container">
        <h4>{this.props.heading}</h4>
        <div className="form-wrapper">
          <TextInput
            label="Name"
            onChange={this.handleName}
            value={this.state.name}
            name="taskname"
          />
          <TextArea
            label="Description"
            onChange={this.handleTextArea}
            value={this.state.description}
            name="taskdescription"
          />
          <Button label="Save" onClick={this.handleSave} />
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  heading: PropTypes.string.isRequired,
  saveForm: PropTypes.func.isRequired,
};

export default Form;
