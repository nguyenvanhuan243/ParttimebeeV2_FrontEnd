import React from 'react';
import config from '../../../../config';

const NoJobsYet = () => (
  <div className="NoJobsYet">
    <div className="NoJobsYet-text">
      No jobs yet
    </div>
    <div className="NoJobsYet-link">
      <a className="NoJobsYet-linkHref" href={`${config.BASE_URL}/postjobs-post-job`}>
        POST NOW
      </a>
    </div>
  </div>
);
export default NoJobsYet;

