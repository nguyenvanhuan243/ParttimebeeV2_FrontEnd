import React from 'react';
import LoadingJobsItem from 'components/LoadingJobs/LoadingJobsList/LoadingJobsItem/Loadable';

const LoadingJobsList = () => (
  <div className="LoadingJobsList">
    <LoadingJobsItem />
    <LoadingJobsItem />
    <LoadingJobsItem />
  </div>
);
export default LoadingJobsList;

