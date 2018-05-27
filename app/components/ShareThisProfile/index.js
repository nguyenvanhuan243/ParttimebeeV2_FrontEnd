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
  handleShare(url) {
    window.open(url);
  }
  render() {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${location.href}`;
    const whatsappUrl = 'https://web.whatsapp.com';
    const mailTo = 'mailto: parttimebee.my@gmail.com';
    return (
      <div className="ShareThisProfile">
        <div className="ShareThisProfile-title">
          Share This Profile
        </div>
        <div className="ShareThisProfile-separate">
        </div>
        <div className="ShareThisProfile-buttonContainer">
          <button onClick={() => this.handleShare(facebookUrl)} className="ShareThisProfile-facebook">
            <FacebookIcon />
          </button>
          <button onClick={() => this.handleShare(whatsappUrl)} className="ShareThisProfile-whatsapp">
            <WhatsAppIcon />
          </button>
          <button onClick={() => this.handleShare(mailTo)} className="ShareThisProfile-email">
            <EmailIcon />
          </button>
        </div>
      </div>
    );
  }
}
