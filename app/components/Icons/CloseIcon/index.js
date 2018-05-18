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

export default class HomeIcon extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <svg
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="16px"
        height="16px"
        viewBox="0 0 16 16"
        enableBackground="new 0 0 16 16"
        xmlSpace="preserve"
      >
        <image
          width={16}
          height={16}
          x={0}
          y={0}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
          AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN
          RQfiBQsECSvyzvKNAAAAgklEQVQoz3XQMQrCQBAF0Ickrd7AysZO7MSLpDKBXEUNnkU9YlirxLjO
          bjXL+zD8YasRv0pvTSMZQn4aHWCQ3EO+TN88kvEUuZV5GSnwd1GR4SFJv7xazLUd2JfO8jZqw9Ko
          vIzasHTGeemZu7D03Lv7WzpIrtCHPEVObBxLZ3FWfwAUSDS91oRazAAAACV0RVh0ZGF0ZTpjcmVh
          dGUAMjAxOC0wNS0xMVQwNDowOTo0My0wNzowMBb+IDgAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgt
          MDUtMTFUMDQ6MDk6NDMtMDc6MDBno5iEAAAAAElFTkSuQmCC"
        />
      </svg>
    );
  }
}

