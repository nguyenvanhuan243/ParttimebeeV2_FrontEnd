import React from 'react';
import JobSavedIcon from 'components/Icons/JobSavedIcon/Loadable';

const CreatedJobAlert = () => (
  <div className="CreatedJobAlert">
    <div className="CreatedJobAlert-icon">
      <JobSavedIcon />
    </div>
    <div className="CreatedJobAlert-text">
      Job has been created and waiting for approval!
    </div>
  </div>
);
export default CreatedJobAlert;
