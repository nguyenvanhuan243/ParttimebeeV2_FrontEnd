import React from 'react';
import ImportantIcon from 'components/Icons/ImportantIcon/Loadable';
import CloseIcon from 'components/Icons/CloseIcon/Loadable';

const ImportantAlert = () => (
  <div className="ImportantAlert">
    <div className="ImportantAlert-iconContainer">
      <div className="ImportantAlert-icon">
        <ImportantIcon />
      </div>
      <div className="ImportantAlert-importantText">
        IMPORTANT
      </div>
      <div className="ImportantAlert-closeIcon">
        <CloseIcon />
      </div>
    </div>
    <div className="ImportantAlert-textContainer">
    </div>
  </div>
);
export default ImportantAlert;
