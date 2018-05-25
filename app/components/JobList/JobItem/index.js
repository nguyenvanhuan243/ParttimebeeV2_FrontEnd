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
import ViewIcon from 'components/Icons/View/Loadable';
import ShareIcon from 'components/Icons/Share/Loadable';
import DeleteIcon from 'components/Icons/Delete/Loadable';
import config from '../../../../config';

export default class JobItem extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      showDeleteConfirmationPopup: false,
    };
  }
  showDeleteConfirmationPopup() {
    this.setState({
      showDeleteConfirmationPopup: true,
    });
  }
  render() {
    const {
      showCity = true,
      showView = true,
      showShare = true,
      showEdit = false,
      showDelete = false,
      showImage = true,
    } = this.props;
    const {
      onClickJobItem = () => {},
    } = this.props;
    return (
      <div>
        <div className="JobItem">
          { showImage ?
            <a className="JobItem-href" href={`${config.BASE_URL}/job-detail`}>
              <div className="JobItem-image">
              </div>
            </a> : null }
          <div className="JobItem-content">
            <div className="JobItem-contentTitle">
              <a className="JobItem-href" href={`${config.BASE_URL}/job-detail`}>
                Presentable Chinese Female Crew - KL/Selangor
              </a>
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
              { showCity ?
                <div className="JobItem-contentJobCity">
                  <div className="JobItem-contentJobCityText">
                    PUTRAJAYA
                  </div>
                </div> : null }
              { showView ?
                <div className="JobItem-contentViewContainer">
                  <div className="JobItem-contentViewIcon">
                    <ViewIcon />
                  </div>
                  <div className="JobItem-contentViewNumber">
                    <span>
                      888
                    </span>
                  </div>
                </div> : null }
              { showShare ?
                <div className="JobItem-contentShareContainer">
                  <div className="JobItem-contentShareIcon">
                    <ShareIcon />
                  </div>
                  <div className="JobItem-contentShareText">
                    SHARE
                  </div>
                </div> : null }
              { showDelete ?
                <button onClick={onClickJobItem} className="JobItem-deleteIcon">
                  <DeleteIcon />
                </button> : null }
              { showEdit ?
                <div className="JobItem-contentEditContainer">
                  <div>
                    <ShareIcon />
                  </div>
                  <div className="JobItem-contentEditText">
                    EDIT
                  </div>
                </div> : null }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

JobItem.propTypes = {
  showCity: PropTypes.bool,
  showView: PropTypes.bool,
  showShare: PropTypes.bool,
  showEdit: PropTypes.bool,
  showDelete: PropTypes.bool,
  showImage: PropTypes.bool,
  onClickJobItem: PropTypes.func.isRequired,
};

