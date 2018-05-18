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
export default class CloseIconAlert extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <svg
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="14px"
        height="14px"
        viewBox="0 0 14 14"
        enableBackground="new 0 0 14 14"
        xmlSpace="preserve"
      >
        <image
          width={14}
          height={14}
          x={0}
          y={0}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
          AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAOVBMVEUAAADrFBThFAzgFAvh
          FArgFAvgEwzgEwrhEwrhFAvgEwrjFQ7hEwvgEwrhEwvhFArkFA3gEwr///8YMsIhAAAAEXRSTlMA
          DYHQ889C4P7m3yXVyNLLJjJy0NkAAAABYktHRBJ7vGwAAAAAB3RJTUUH4gUPFyEYgUG3TwAAAF1J
          REFUCNddT1sOwDAI0tq3fYz7X3atabKsfKgkBIGIiJ14HxyTISYYUjSWcZAX54RSN6kFickBog1o
          KoCjNdB1DO3rEPJbOFXn3v6mP3Ewq+ezuh5dMe6Qp4JYhRc9wwfmHENR6AAAACV0RVh0ZGF0ZTpj
          cmVhdGUAMjAxOC0wNS0xNVQyMzozMzoyNC0wNzowMNPab4sAAAAldEVYdGRhdGU6bW9kaWZ5ADIw
          MTgtMDUtMTVUMjM6MzM6MjQtMDc6MDCih9c3AAAAAElFTkSuQmCC"
        />
      </svg>
    );
  }
}
