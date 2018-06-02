import React from 'react';
import PropTypes from 'prop-types';
import './popup.css';

const Popup = props => (
  <div className="popupWrapper">
    <div className="popupContainer">
      <header className="popupHeader">
        <div className="popupHeaderTitle">
          {props.title}
        </div>
        <button
          className="btnClosePopup"
          onClick={props.close}
        >
          <i className="btnCloseIcon" />
        </button>
      </header>
      <div className="popupContent">
        {props.content}
      </div>
    </div>
  </div>
);

Popup.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
  close: PropTypes.func.isRequired,
};

Popup.defaultProps = {
  title: 'Popup',
};

export default Popup;
