import React from 'react';
import NotFoundPageIcon from 'components/Icons/NotFoundPage/Loadable';

const SearchNotFound = () => (
  <div>
    <div className="SearchNotFound-notFoundIcon">
      <NotFoundPageIcon />
    </div>
    <div className="SearchNotFound-title">
      Bummer! No results.
    </div>
    <div className="SearchNotFound-abstract">
      No jobs found! Please try other keywords.
    </div>
  </div>
);
export default SearchNotFound;
