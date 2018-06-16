import React from 'react';
import JobSavedIcon from 'components/Icons/JobSavedIcon/Loadable';
const JobSavedAlert = () => (
  <div className="JobSavedAlert">
    <div className="JobSavedAlert-icon">
      <JobSavedIcon />
    </div>
    <div className="JobSavedAlert-text">
      Job has been saved!
    </div>
  </div>
);
export default JobSavedAlert;

