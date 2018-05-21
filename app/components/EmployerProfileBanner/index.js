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
import PhoneIcon from 'components/Icons/Phone/Loadable';
import WhiteEmailIcon from 'components/Icons/WhiteEmail/Loadable';
import WebIcon from 'components/Icons/Web/Loadable';
import AddressIcon from 'components/Icons/Address/Loadable';
import classNames from 'classnames';
import config from '../../../config';
export default class EmployerProfileBanner extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      showReadMore: false,
    };
  }
  handleReadMore() {
    this.setState({
      showReadMore: !this.state.showReadMore,
    });
    return false;
  }
  render() {
    const {
      showReadMore,
    } = this.state;
    const {
      showEdit = false,
    } = this.props;
    const className = classNames('EmployerProfileBanner',
      { 'EmployerProfileBanner-readMore': showReadMore }
    );
    return (
      <div className={className}>
        <div className="EmployerProfileBanner-container">
          <div className="EmployerProfileBanner-avatar">
          </div>
          <div className="EmployerProfileBanner-contentContainer">
            <div className="EmployerProfileBanner-title">
              RZSCORPORATIONSDNBHD
            </div>
            <div className="EmployerProfileBanner-infoContainer">
              <div className="EmployerProfileBanner-phoneContainer">
                <PhoneIcon />
                <div className="EmployerProfileBanner-phoneText">
                  03-33410108
                </div>
              </div>
              <div className="EmployerProfileBanner-mailContainer">
                <WhiteEmailIcon />
                <div className="EmployerProfileBanner-mailText">
                  rzs@gmail.com
                </div>
              </div>
              <div className="EmployerProfileBanner-webContainer">
                <WebIcon />
                <div className="EmployerProfileBanner-webText">
                  www.jobprima.com.my
                </div>
              </div>
            </div>
            <div className="EmployerProfileBanner-addressContainer">
              <AddressIcon />
              <div className="EmployerProfileBanner-addressText">
                241, Kuala Lumpur City Centre, City Centre, 50088 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia
              </div>
            </div>
            <div className="EmployerProfileBanner-separate">
            </div>
            <div className="EmployerProfileBanner-companyDescription">
              Company Description
            </div>
            <div className="EmployerProfileBanner-companyDescriptionText">
              Tapway is growing fast as a start­up and is looking to expand our marketing and sales team. Thus, we are looking for a marketing trainee to:… { !showReadMore && <button onClick={() => this.handleReadMore()} className="EmployerProfileBanner-hrefText">Read more</button> }
              { showReadMore ?
                <span>
                  <br /><br />
                  ● Develop marketing campaigns to promote our products & services<br />
                  ● Communicate with target audiences and manage customer relationships<br />
                  ● Source advertising opportunities in the press ­ local, regional, national, specialist and digital publications­ or on<br />
                  ● Manage the production of marketing materials, including videos, leaflets, posters, flyers and newsletters<br />
                  ● Organize events such as workshops, conferences and seminars<br />
                  ● Manage our social media websites such as Facebook, Twitter, LinkedIn and YouTube page<br />
                  ● Have fun in a highly dynamic team and drive innovations to continue as a leader in one of the fastest ­growing<br />
                  <br />
                  <br />
                  <p>
                  Having initially focused on classic slim fit men’s shirt, the range evolved to a complete modern and contemporary motive featuring from geometrical to floral theme. Mixing the classical and out of the norm colour, makes our batik shirt the most sought after in domestic market.
The idea was started when two young entrepreneurs, also a good friend who appreciate the art of batik trying to cultivate, preserve and nurture our batik tradition back to a modern and hectic lifestyle. As both of them travel extensively throughout Nusantara, more and more ideas come to reality and its where Kapten Batik was born.
                  </p>
                </span>
                : null
              }
            </div>
          </div>
          { showEdit ?
            <a className="EmployerProfileBanner-hrefText" href={`${config.BASE_URL}/myprofile/edit-profile`}>
              <div className="EmployerProfileBanner-editButton">
                <div className="EmployerProfileBanner-editButtonText">
                  Edit
                </div>
              </div>
            </a> : null }
        </div>
      </div>
    );
  }
}

EmployerProfileBanner.propTypes = {
  showEdit: PropTypes.bool,
};

