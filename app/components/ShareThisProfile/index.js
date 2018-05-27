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
import FacebookIcon from 'components/ShareThisProfile/Icons/FacebookIcon/Loadable';
import WhatsAppIcon from 'components/ShareThisProfile/Icons/WhatsAppIcon/Loadable';
import EmailIcon from 'components/ShareThisProfile/Icons/EmailIcon/Loadable';

export default class ShareThisProfile extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  shareProfileOnFacebook() {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${location.href}`;
    window.open(url, 'width=200,height=100');
  }
  render() {
    return (
      <div className="ShareThisProfile">
        <div className="ShareThisProfile-title">
          Share This Profile
        </div>
        <div className="ShareThisProfile-separate">
        </div>
        <div className="ShareThisProfile-buttonContainer">
          <button onClick={() => this.shareProfileOnFacebook()} className="ShareThisProfile-facebook">
            <FacebookIcon />
          </button>
          <div className="ShareThisProfile-whatsapp">
            <WhatsAppIcon />
          </div>
          <div className="ShareThisProfile-email">
            <EmailIcon />
          </div>
        </div>
      </div>
    );
  }
}
