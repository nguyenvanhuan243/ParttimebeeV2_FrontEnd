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
      hoverEdit: false,
      hoverDelete: false,
    };
  }
  handleClickState(state) {
    localStorage.setItem('selectedStateItem', state);
  }
  handleClickCity(city) {
    localStorage.setItem('selectedCityItem', city);
    alert(city);
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
      onHoverJobItem = () => {},
      companyName = 'Company Name Here',
    } = this.props;
    const {
      hover,
      hoverState,
      hoverShareButton,
      hoverCity,
      showSocialShare,
      hoverEdit,
      hoverDelete,
    } = this.state;
    const hoverClassName = classNames('JobItem',
      { 'JobItem-hover': hover && !hoverShareButton && !hoverState && !hoverCity && !hoverEdit && !hoverDelete });
    const hoverShareClassName = classNames('JobItem-contentShareContainer',
      { 'JobItem-colorHover': hoverShareButton });
    const hoverStateClassName = classNames('JobItem-contentJobState', {
      'JobItem-colorHover': hoverState,
    });
    const hoverCityClassName = classNames('JobItem-contentJobCity', {
      'JobItem-colorHover': hoverCity,
    });
    const contentEditContainerClassName = classNames('JobItem-contentEditContainer', {
      'JobItem-colorHover': hoverEdit,
    });
    const deleteIconClassName = classNames('JobItem-deleteIcon', {
      'JobItem-colorHover': hoverDelete,
    });
    const jobUrl = `${config.BASE_URL}/job-detail/${localStorage.jobId}`;
    return (
      <div>
        <div
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
              <div className="JobItem-stateAndCity">
                <div
                  className={hoverStateClassName}
                  onMouseEnter={() => this.setState({ hoverState: true })}
                  onMouseLeave={() => this.setState({ hoverState: false })}
                >
                  <button onClick={() => this.handleClickState(state)} className="JobItem-contentJobStateText">
                    { state && state.toUpperCase() }
                  </button>
                </div>
                { (city !== '' && showCity) &&
                <div
                  className={hoverCityClassName}
                  onMouseEnter={() => this.setState({ hoverCity: true })}
                  onMouseLeave={() => this.setState({ hoverCity: false })}
                >
                  <button onClick={() => this.handleClickCity(city)} className="JobItem-contentJobCityText">
                    { city && city.toUpperCase() }
                  </button>
                </div> }
              </div>
              { showView &&
                <div className="JobItem-contentViewContainer">
                  <ViewIcon />
                  <div className="JobItem-contentViewNumber"> { viewNumber } </div>
                </div> }
              {
                showSocialShare && <div className="JobItem-socialShare">
                  <button
                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${jobUrl}`)}
                    className="JobInformation-facebook"
                  >
                    <span className="JobItem-socialShareMargin">
                      <Facebook />
                    </span>
                  </button>
                  <button
                    onClick={() => window.open('https://web.whatsapp.com')}
                    className="JobInformation-whatsapp"
                  >
                    <span className="JobItem-socialShareMargin">
                      <WhatsApp />
                    </span>
                  </button>
                  <button
                    onClick={() => window.open('mailto: parttimebee.my@gmail.com')}
                    className="JobInformation-email"
                  >
                    <span className="JobItem-socialShareMargin">
                      <Email />
                    </span>
                  </button>
                </div>
              }
              { showShare &&
                <div
                  className={hoverShareClassName}
                  onMouseLeave={() => this.setState({ hoverShareButton: false })}
                  onMouseEnter={() => {
                    this.setState({ hoverShareButton: true, showSocialShare: true });
                    onHoverJobItem();
                  }}
                >
                  <ShareIcon />
                  <span className="JobItem-contentShareText"> SHARE </span>
                </div> }
              { showDelete &&
                <button
                  onClick={onClickJobItem}
                  className={deleteIconClassName}
                  onMouseEnter={() => this.setState({ hoverDelete: true })}
                  onMouseLeave={() => this.setState({ hoverDelete: false })}
                >
                  <DeleteIcon />
                </button> }
              { showEdit &&
                <a
                  href={`${config.BASE_URL}/postjobs-edit-job/${jobId}?edit-job`}
                  className={contentEditContainerClassName}
                  onMouseEnter={() => this.setState({ hoverEdit: true })}
                  onMouseLeave={() => this.setState({ hoverEdit: false })}
                >
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
  onHoverJobItem: PropTypes.func.isRequired,
  title: PropTypes.string,
  href: PropTypes.string,
  showCompanyName: PropTypes.bool,
  viewNumber: PropTypes.number,
  jobId: PropTypes.number,
  state: PropTypes.string,
  city: PropTypes.string,
  companyName: PropTypes.string,
};

