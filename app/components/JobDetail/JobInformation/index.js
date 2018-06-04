import React, { PureComponent, PropTypes } from 'react';
import Facebook from 'components/JobDetail/JobInformation/SocialButton/Facebook/Loadable';
import Whatsapp from 'components/JobDetail/JobInformation/SocialButton/Whatsapp/Loadable';
import Email from 'components/JobDetail/JobInformation/SocialButton/Email/Loadable';
import ReportIcon from 'components/Icons/Report/Loadable';

export default class JobInformation extends PureComponent {
  render() {
    const { handleShowPopup = () => {} } = this.props;
    return (
      <div className="JobInformation">
        <div className="JobInformation-socialButton">
          <Facebook />
          <Whatsapp />
          <Email />
          <button onClick={handleShowPopup} className="ReportButon">
            <div className="ReportButon-icon"> <ReportIcon /> </div>
            <div className="ReportButon-text"> REPORT JOB </div>
          </button>
        </div>
        <div className="JobInformation-separate">
        </div>
        <div className="JobInformation-description">
          <div className="JobInformation-leftDescription">
            <div className="JobInformation-jobId"> Job ID: 8888 </div>
            <div className="JobInformation-category"> Category: Category 01 </div>
            <div className="JobInformation-salary"> Salary: RM8,888.00 per month </div>
          </div>
          <div className="JobInformation-rightDescription">
            <div className="JobInformation-postedDate"> Posted Date: December 25 </div>
            <div className="JobInformation-jobView"> Job Views: 8,888 </div>
          </div>
        </div>
      </div>
    );
  }
}

JobInformation.propTypes = {
  handleShowPopup: PropTypes.func.isRequired,
};

