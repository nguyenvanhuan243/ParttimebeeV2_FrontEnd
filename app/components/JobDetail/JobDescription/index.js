import React, { PureComponent, PropTypes } from 'react';
import config from '../../../../config';

export default class JobDescription extends PureComponent {
  handleEditJob() {
    const jobId = location.pathname.match(/\d+/)[0];
    location.replace(`${config.BASE_URL}/postjobs-edit-job/${jobId}?edit-job`);
  }
  render() {
    const {
      text = '',
      jobType = '',
    } = this.props;
    const buttonRendered = (location.search === '?preview');
    return (
      <div className="JobDescription">
        <div dangerouslySetInnerHTML={{ __html: text }} className="JobDescription-content" />
        { buttonRendered ?
          <div>
            <button className="JobDescription-editButton">
              <span className="JobDescription-editButtonText">
                EDIT JOB
              </span>
            </button>
            <button className="JobDescription-postButton">
              <span className="JobDescription-postButtonText">
                POST JOB
              </span>
            </button>
          </div> : null }
        { localStorage.currentUser && !buttonRendered ?
          <div>
            <button onClick={() => window.history.back()} className="JobDescription-editButton">
              <span className="JobDescription-editButtonText">
                BACK
              </span>
            </button>
            <button onClick={() => this.handleEditJob()} className="JobDescription-postButton">
              <span className="JobDescription-postButtonText">
                { jobType === 'expired' ? 'RE-POST' : 'EDIT JOB' }
              </span>
            </button>
          </div> : null }
      </div>
    );
  }
}
JobDescription.propTypes = {
  text: PropTypes.string,
  jobType: PropTypes.string,
};

