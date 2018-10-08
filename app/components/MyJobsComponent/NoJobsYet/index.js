import React from 'react';
import SadIcon from 'components/Icons/Sad/Loadable';
import config from '../../../../config';

// const isMyJob = location.pathname.includes('myjobs');
const NoJobsYet = () => (
  <div className="NoJobsYet">
    <div className="NoJobsYet-sadIcon">
      <SadIcon />
    </div>
    <div className="NoJobsYet-text">
      No jobs yet
    </div>
    { false && <a className="NoJobsYet-linkCustom" href={`${config.BASE_URL}/postjobs-post-job`}>
      <div className="NoJobsYet-link">
        <div className="NoJobsYet-linkHref">
          POST NOW
        </div>
      </div>
    </a> }
  </div>
);
export default NoJobsYet;
