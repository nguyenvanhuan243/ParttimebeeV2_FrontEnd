/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PureComponent } from 'react';
import ReportIcon from 'components/Icons/Report/Loadable';

export default class ReportButon extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="ReportButon">
        <div className="ReportButon-icon">
          <ReportIcon />
        </div>
        <div className="ReportButon-text">
          REPORTJOB
        </div>
      </div>
    );
  }
}

