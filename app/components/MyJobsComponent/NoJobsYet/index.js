import React from 'react';
import config from '../../../../config';

const NoJobsYet = () => (
  <div className="NoJobsYet">
    <div className="NoJobsYet-text">
      No jobs yet
    </div>
    <a className="NoJobsYet-linkCustom" href={`${config.BASE_URL}/postjobs-post-job`}>
      <div className="NoJobsYet-link">
        <div className="NoJobsYet-linkHref">
          POST NOW
        </div>
      </div>
    </a>
  </div>
);
export default NoJobsYet;
