import React, { PureComponent, PropTypes } from 'react';
import CloseIcon from 'components/Icons/CloseIcon/Loadable';
import axios from 'axios';
import config from '../../../../config';

export default class DeleteConfirmationPopup extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleDelete() {
    const jobId = 22;
    const url = `${config.API_BASE_URL}/jobs/${jobId}}`;
    axios.delete(url);
    window.location.reload();
  }
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
                <button onClick={closeFunc} className="DeleteConfirmationPopup-cancelButton">
                  <span className="DeleteConfirmationPopup-cancelButtonText"> Cancel </span>
                </button>
                <button onClick={() => this.handleDelete()} className="DeleteConfirmationPopup-deleteButton">
                  <span className="DeleteConfirmationPopup-deleteButtonText"> Delete </span>
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

