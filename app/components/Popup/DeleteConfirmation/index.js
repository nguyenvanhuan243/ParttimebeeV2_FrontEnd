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

export default class DeleteConfirmationPopup extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      closeFunc = () => {},
      type = 'JOB',
    } = this.props;
    const isJobType = type === 'JOB';
    return (
      <div className="DeleteConfirmationPopup">
        <div className="DeleteConfirmationPopup-containerPopup">
          <button onClick={closeFunc} className="DeleteConfirmationPopup-closeButton">
            <CloseIcon />
          </button>
          <div className="DeleteConfirmationPopup-container">
            <div className="DeleteConfirmationPopup-content">
              <div className="DeleteConfirmationPopup-text">
                { isJobType ?
                  'Are you sure to delete this job?' :
                  'Are you sure to delete this account?' }
              </div>
              <div className="DeleteConfirmationPopup-buttonContainer">
                <button className="DeleteConfirmationPopup-cancelButton">
                  <span className="DeleteConfirmationPopup-cancelButtonText">
                    Cancel
                  </span>
                </button>
                <button className="DeleteConfirmationPopup-deleteButton">
                  <span className="DeleteConfirmationPopup-deleteButtonText">
                    Delete
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DeleteConfirmationPopup.propTypes = {
  closeFunc: PropTypes.func.isRequired,
  type: PropTypes.string,
};

