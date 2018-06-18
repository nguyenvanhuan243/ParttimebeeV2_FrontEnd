import React, { PureComponent, PropTypes } from 'react';
import ViewIcon from 'components/Icons/View/Loadable';
import ShareIcon from 'components/Icons/Share/Loadable';
import DeleteIcon from 'components/Icons/Delete/Loadable';
import classNames from 'classnames';
import config from '../../../../config';

export default class JobItem extends PureComponent {
  constructor() {
    super();
    this.state = { hover: false };
  }
  render() {
    const {
      showView = true, showShare = true, showEdit = false, showDelete = false,
      showImage = true, title = '', href = '', onClickJobItem = () => {}, showCompanyName = true,
      viewNumber = 0,
      jobId = 0,
      state = '',
      city = '',
      companyName = 'Company Name Here',
    } = this.props;
    const hoverClass = classNames('JobItem', { 'JobItem-hover': this.state.hover });
    const hoverShareClass = classNames('JobItem-contentShareContainer',
      { 'JobItem-contentShareContainerHover': this.state.hover });
    return (
      <div>
        <div
          className={hoverClass}
          onMouseEnter={() => this.setState({ hover: true })}
          onMouseLeave={() => this.setState({ hover: false })}
        >
          { showImage && <a className="JobItem-href" href={href}> <div className="JobItem-image" /> </a> }
          <div className="JobItem-content">
            <div className="JobItem-contentTitle">
              <a className="JobItem-href" href={href}> { title } </a>
            </div>
            { showCompanyName &&
              <div className="JobItem-contentCompanyName">{ companyName }</div> }
            <div className="JobItem-contentFooter">
              <div className="JobItem-contentJobState">
                <div className="JobItem-contentJobStateText">
                  { state }
                </div>
              </div>
              { (city !== '') &&
                <div className="JobItem-contentJobCity">
                  <div className="JobItem-contentJobCityText">
                    { city }
                  </div>
                </div> }
              { showView &&
                <div className="JobItem-contentViewContainer">
                  <ViewIcon />
                  <div className="JobItem-contentViewNumber"> { viewNumber } </div>
                </div> }
              { showShare &&
                <div className={hoverShareClass}>
                  <ShareIcon />
                  <span className="JobItem-contentShareText"> SHARE </span>
                </div> }
              { showDelete &&
                <button onClick={onClickJobItem} className="JobItem-deleteIcon">
                  <DeleteIcon />
                </button> }
              { showEdit &&
                <a href={`${config.BASE_URL}/postjobs-edit-job/${jobId}?edit-job`} className="JobItem-contentEditContainer">
                  <div> <ShareIcon /> </div>
                  <div className="JobItem-contentEditText"> EDIT </div>
                </a> }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

JobItem.propTypes = {
  showView: PropTypes.bool,
  showShare: PropTypes.bool,
  showEdit: PropTypes.bool,
  showDelete: PropTypes.bool,
  showImage: PropTypes.bool,
  onClickJobItem: PropTypes.func.isRequired,
  title: PropTypes.string,
  href: PropTypes.string,
  showCompanyName: PropTypes.bool,
  viewNumber: PropTypes.number,
  jobId: PropTypes.number,
  state: PropTypes.string,
  city: PropTypes.string,
  companyName: PropTypes.string,
};

