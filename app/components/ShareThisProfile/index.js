import React from 'react';
import FacebookIcon from 'components/ShareThisProfile/Icons/FacebookIcon/Loadable';
import WhatsAppIcon from 'components/ShareThisProfile/Icons/WhatsAppIcon/Loadable';
import EmailIcon from 'components/ShareThisProfile/Icons/EmailIcon/Loadable';

const ShareThisProfile = () => (
  <div className="ShareThisProfile">
    <div className="ShareThisProfile-title"> Share This Profile </div>
    <div className="ShareThisProfile-separate" />
    <div className="ShareThisProfile-buttonContainer">
      <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${location.href}`)} className="ShareThisProfile-facebook">
        <FacebookIcon />
      </button>
      <button onClick={() => window.open('https://web.whatsapp.com')} className="ShareThisProfile-whatsapp">
        <WhatsAppIcon />
      </button>
      <button onClick={() => window.open('mailto: parttimebee.my@gmail.com')} className="ShareThisProfile-email">
        <EmailIcon />
      </button>
    </div>
  </div>
);
export default ShareThisProfile;
