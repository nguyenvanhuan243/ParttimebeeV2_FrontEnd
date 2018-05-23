/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PureComponent, PropTypes } from 'react';
import CloseIcon from 'components/Icons/CloseIcon/Loadable';

export default class DeleteProfile extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      closeFunc = () => {},
    } = this.props;
    return (
      <div className="DeleteProfile">
        <button onClick={closeFunc} className="DeleteProfile-closeButton">
          <div className="DeleteProfile-closeIcon">
            <CloseIcon />
          </div>
        </button>
        <div className="DeleteProfile-container">
          <div className="DeleteProfile-content">
            <div className="DeleteProfile-text">
              Are you sure to delete this job?
            </div>
            <div className="DeleteProfile-buttonContainer">
              <button className="DeleteProfile-cancelButton">
                <span className="DeleteProfile-cancelButtonText">
                  Cancel
                </span>
              </button>
              <button className="DeleteProfile-deleteButton">
                <span className="DeleteProfile-deleteButtonText">
                  Delete
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DeleteProfile.propTypes = {
  closeFunc: PropTypes.func.isRequired,
};

