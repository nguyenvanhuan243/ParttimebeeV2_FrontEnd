import React from 'react';
import Facebook from 'components/ShareThisProfile/Icons/FacebookIcon/Loadable';
import WhatsApp from 'components/ShareThisProfile/Icons/WhatsAppIcon/Loadable';
import Email from 'components/ShareThisProfile/Icons/EmailIcon/Loadable';

const ShareThisProfile = () => (
  <div className="ShareThisProfile">
    <div className="ShareThisProfile-title"> Share This Profile </div>
    <div className="ShareThisProfile-separate" />
    <div className="ShareThisProfile-buttonContainer">
      <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${location.href}`)} className="ShareThisProfile-facebook">
        <Facebook />
      </button>
      <button onClick={() => window.open('https://web.whatsapp.com')} className="ShareThisProfile-whatsapp">
        <WhatsApp />
      </button>
      <button onClick={() => window.open('mailto: parttimebee.my@gmail.com')} className="ShareThisProfile-email">
        <Email />
      </button>
    </div>
  </div>
);
export default ShareThisProfile;
