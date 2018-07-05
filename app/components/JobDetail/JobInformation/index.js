import React, { PureComponent, PropTypes } from 'react';
import Facebook from 'components/JobDetail/JobInformation/SocialButton/Facebook/Loadable';
import WhatsApp from 'components/JobDetail/JobInformation/SocialButton/Whatsapp/Loadable';
import Email from 'components/JobDetail/JobInformation/SocialButton/Email/Loadable';
import ReportIcon from 'components/Icons/Report/Loadable';
import moment from 'moment';
import classNames from 'classnames';
import config from '../../../../config';

export default class JobInformation extends PureComponent {
  constructor() {
    super();
    this.state = { hoverReportButton: false };
  }
  render() {
    const {
      views = 0,
      salary = 0,
      jobId = '',
      category = '',
      createdDay = '',
      handleShowPopup = () => {},
    } = this.props;

    const Id = location.pathname.match(/\d+/)[0];
    const jobUrl = `${config.BASE_URL}/job-detail/${Id}`;
    const reportButonClassNames = classNames('ReportButon', {
      'ReportButon-hover': this.state.hoverReportButton,
    });

    return (
      <div className="JobInformation">
        <div className="JobInformation-socialButton">
          <button
            onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${jobUrl}`)}
            className="JobInformation-facebook"
          >
            <Facebook />
          </button>
          <button
            onClick={() => window.open('https://web.whatsapp.com')}
            className="JobInformation-whatsapp"
          >
            <WhatsApp />
          </button>
          <button
            onClick={() => window.open('mailto: parttimebee.my@gmail.com')}
            className="JobInformation-email"
          >
            <Email />
          </button>
          <button
            onClick={handleShowPopup}
            className={reportButonClassNames}
            onMouseEnter={() => this.setState({ hoverReportButton: true })}
            onMouseLeave={() => this.setState({ hoverReportButton: false })}
          >
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
              <span className="JobInformation-textBold"> { createdDay && moment(createdDay).format('MMM D') } </span>
            </div>
            <div className="JobInformation-jobView"> Job Views:
              <span className="JobInformation-textBold"> { views }</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

JobInformation.propTypes = {
  handleShowPopup: PropTypes.func.isRequired,
  jobId: PropTypes.number,
  category: PropTypes.string,
  salary: PropTypes.number,
  createdDay: PropTypes.string,
  views: PropTypes.number,
};

