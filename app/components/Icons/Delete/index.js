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
        width="10px"
        height="12px"
        viewBox="0 0 10 12"
        enableBackground="new 0 0 10 12"
        xmlSpace="preserve"
      >
        <image
          width={10}
          height={12}
          x={0}
          y={0}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAMCAAAAAB+AHN8AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
      AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN
      RQfiBRMEFAw9BVSKAAAAPUlEQVQI12P894nh2+G/trwMvIw7HjJAgATTbyiL4Tfjt9dQpjAL8w4o
      M5KJAQ7IZLKwaX9gYGBgYODhBQA9pA0Adsm6FAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNS0x
      OVQwNDoyMDoxMi0wNzowMC8DKKwAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDUtMTlUMDQ6MjA6
      MTItMDc6MDBeXpAQAAAAAElFTkSuQmCC"
        />
      </svg>
    );
  }
}

