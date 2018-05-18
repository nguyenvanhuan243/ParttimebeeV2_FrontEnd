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

import React, { PureComponent } from 'react';
import Facebook from 'components/JobDetail/JobInformation/SocialButton/Facebook/Loadable';
import Whatsapp from 'components/JobDetail/JobInformation/SocialButton/Whatsapp/Loadable';
import Email from 'components/JobDetail/JobInformation/SocialButton/Email/Loadable';
import ReportButton from 'components/JobDetail/JobInformation/ReportButton/Loadable';

export default class JobInformation extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="JobInformation">
        <div className="JobInformation-socialButton">
          <Facebook />
          <Whatsapp />
          <Email />
          <ReportButton />
        </div>
        <div className="JobInformation-separate">
        </div>
        <div className="JobInformation-description">
          <div className="JobInformation-leftDescription">
            <div className="JobInformation-jobId">
              Job ID: 8888
            </div>
            <div className="JobInformation-category">
              Category: Category 01
            </div>
            <div className="JobInformation-salary">
              Salary: RM8,888.00 per month
            </div>
          </div>
          <div className="JobInformation-rightDescription">
            <div className="JobInformation-postedDate">
              Posted Date: December 25
            </div>
            <div className="JobInformation-jobView">
              Job Views: 8,888
            </div>
          </div>
        </div>
      </div>
    );
  }
}

