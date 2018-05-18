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
import PhoneIcon from 'components/Icons/Phone/Loadable';
import WhiteEmailIcon from 'components/Icons/WhiteEmail/Loadable';
import WebIcon from 'components/Icons/Web/Loadable';
import AddressIcon from 'components/Icons/Address/Loadable';
export default class EmployerProfileBanner extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="EmployerProfileBanner">
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
              Tapway is growing fast as a start­up and is looking to expand our marketing and sales team. Thus, we are looking for a marketing trainee to:… <a className="EmployerProfileBanner-hrefText" href="">Read more</a>
            </div>
          </div>
          <div className="EmployerProfileBanner-editButton">
            <div className="EmployerProfileBanner-editButtonText">
              Edit
            </div>
          </div>
        </div>
      </div>
    );
  }
}
