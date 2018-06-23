import React, { PureComponent, PropTypes } from 'react';
import ViewIcon from 'components/Icons/View/Loadable';
import ShareIcon from 'components/Icons/Share/Loadable';
import DeleteIcon from 'components/Icons/Delete/Loadable';
import Facebook from 'components/ShareThisProfile/Icons/FacebookIcon/Loadable';
import WhatsApp from 'components/ShareThisProfile/Icons/WhatsAppIcon/Loadable';
import Email from 'components/ShareThisProfile/Icons/EmailIcon/Loadable';
import classNames from 'classnames';
import config from '../../../../config';

export default class JobItem extends PureComponent {
  constructor() {
    super();
    this.state = {
      hover: false,
      hoverShareButton: false,
      hoverState: false,
      hoverCity: false,
      showAddThis: false,
      showSocialShare: false,
    };
  }
  render() {
    const {
      title = '',
      href = '',
      city = '',
      state = '',
      jobId = 0,
      viewNumber = 0,
      showView = true,
      showShare = true,
      showEdit = false,
      showCity = true,
      showImage = true,
      showDelete = false,
      showCompanyName = true,
      onClickJobItem = () => {},
      companyName = 'Company Name Here',
    } = this.props;
    const {
      hover,
      hoverState,
      hoverShareButton,
      hoverCity,
      showSocialShare,
    } = this.state;
    const hoverClassName = classNames('JobItem',
      { 'JobItem-hover': hover && !hoverShareButton && !hoverState && !hoverCity });
    const hoverShareClassName = classNames('JobItem-contentShareContainer',
      { 'JobItem-contentShareContainerHover': hoverShareButton });
    const hoverStateClassName = classNames('JobItem-contentJobState', {
      'JobItem-contentJobStateHover': hoverState,
    });
    const hoverCityClassName = classNames('JobItem-contentJobCity', {
      'JobItem-contentJobCityHover': hoverCity,
    });
    return (
      <div>
        <div
          id="homepage"
          className={hoverClassName}
          onMouseEnter={() => this.setState({ hover: true })}
          onMouseLeave={() => this.setState({ hover: false, showSocialShare: false })}
        >
          { showImage && <a className="JobItem-href" href={href}> <div className="JobItem-image" /> </a> }
          <div className="JobItem-content">
            <div className="JobItem-contentTitle">
              <a className="JobItem-href" href={href}> { title } </a>
            </div>
            { showCompanyName &&
              <div className="JobItem-contentCompanyName">{ companyName }</div> }
            <div className="JobItem-contentFooter">
              <div
                className={hoverStateClassName}
                onMouseEnter={() => this.setState({ hoverState: true })}
                onMouseLeave={() => this.setState({ hoverState: false })}
              >
                <div className="JobItem-contentJobStateText">
                  { state && state.toUpperCase() }
                </div>
              </div>
              { (city !== '' && showCity) &&
                <div
                  className={hoverCityClassName}
                  onMouseEnter={() => this.setState({ hoverCity: true })}
                  onMouseLeave={() => this.setState({ hoverCity: false })}
                >
                  <div className="JobItem-contentJobCityText">
                    { city && city.toUpperCase() }
                  </div>
                </div> }
              { showView &&
                <div className="JobItem-contentViewContainer">
                  <ViewIcon />
                  <div className="JobItem-contentViewNumber"> { viewNumber } </div>
                </div> }
              {
                showSocialShare && <div className="JobItem-socialShare">
                  <span className="JobItem-socialShareMargin">
                    <Facebook />
                  </span>
                  <span className="JobItem-socialShareMargin">
                    <WhatsApp />
                  </span>
                  <span className="JobItem-socialShareMargin">
                    <Email />
                  </span>
                </div>
              }
              { showShare &&
                <div
                  className={hoverShareClassName}
                  onMouseEnter={() => this.setState({ hoverShareButton: true, showSocialShare: true })}
                  onMouseLeave={() => this.setState({ hoverShareButton: false })}
                >
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
  showCity: PropTypes.bool,
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

