import React, { PureComponent, PropTypes } from 'react';
import Facebook from 'components/JobDetail/JobInformation/SocialButton/Facebook/Loadable';
import Whatsapp from 'components/JobDetail/JobInformation/SocialButton/Whatsapp/Loadable';
import Email from 'components/JobDetail/JobInformation/SocialButton/Email/Loadable';
import ReportIcon from 'components/Icons/Report/Loadable';

export default class JobInformation extends PureComponent {
  render() {
    const {
      handleShowPopup = () => {},
      jobId = '',
      category = '',
      salary = 0,
      createdDay = '',
      view = 0,
    } = this.props;
    return (
      <div className="JobInformation">
        <div className="JobInformation-socialButton">
          <Facebook />
          <Whatsapp />
          <Email />
          <button onClick={handleShowPopup} className="ReportButon">
            <ReportIcon />
            <div className="ReportButon-text"> REPORT JOB </div>
          </button>
        </div>
        <div className="JobInformation-separate">
        </div>
        <div className="JobInformation-description">
          <div className="JobInformation-leftDescription">
            <div className="JobInformation-jobId"> Job ID:
              <span className="JobInformation-textBold"> { jobId }</span>
            </div>
            <div className="JobInformation-category"> Category:
              <span className="JobInformation-textBold"> { category }</span>
            </div>
            <div className="JobInformation-salary"> Salary:
              <span className="JobInformation-textBold"> RM{ salary } per month</span>
            </div>
          </div>
          <div className="JobInformation-rightDescription">
            <div className="JobInformation-postedDate"> Posted Date:
              <span className="JobInformation-textBold"> { createdDay }</span>
            </div>
            <div className="JobInformation-jobView"> Job Views:
              <span className="JobInformation-textBold"> { view }</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

JobInformation.propTypes = {
  handleShowPopup: PropTypes.func.isRequired,
  jobId: PropTypes.string,
  category: PropTypes.string,
  salary: PropTypes.number,
  createdDay: PropTypes.string,
  view: PropTypes.number,
};

