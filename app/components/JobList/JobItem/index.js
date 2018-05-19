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
import ViewIcon from 'components/Icons/View/Loadable';
import ShareIcon from 'components/Icons/Share/Loadable';
import config from '../../../../config';

export default class JobItem extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <a target="_blank" className="JobItem-href" href={`${config.BASE_URL}/job-detail`}>
        <div className="JobItem">
          <div className="JobItem-image">
          </div>
          <div className="JobItem-content">
            <div className="JobItem-contentTitle">
              Presentable Chinese Female Crew - KL/Selangor
            </div>
            <div className="JobItem-contentCompanyName">
              Company Name Here
            </div>
            <div className="JobItem-contentFooter">
              <div className="JobItem-contentJobState">
                <div className="JobItem-contentJobStateText">
                  KUALALUMPUR
                </div>
              </div>
              <div className="JobItem-contentJobCity">
                <div className="JobItem-contentJobCityText">
                  PUTRAJAYA
                </div>
              </div>
              <div className="JobItem-contentViewContainer">
                <div className="JobItem-contentViewIcon">
                  <ViewIcon />
                </div>
                <div className="JobItem-contentViewNumber">
                  <span>
                    888
                  </span>
                </div>
              </div>
              <div className="JobItem-contentShareContainer">
                <div className="JobItem-contentShareIcon">
                  <ShareIcon />
                </div>
                <div className="JobItem-contentShareText">
                  SHARE
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }
}
