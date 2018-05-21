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

export default class PerakIcon extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <svg
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        enableBackground="new 0 0 24 24"
        xmlSpace="preserve"
      >
        <image
          width={24}
          height={24}
          x={0}
          y={0}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
          AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAP1BMVEX/////////////////
          ///+4REICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////93wAAAADD8/AVAAAA
          EnRSTlMGh+XnifDZ5+WIhQaD3PPbgAWPZuDCAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+IFFBQDFd0c
          4xUAAABDSURBVCjPzcnJEYBADMRAgc19LBjyj5UA1vOjKPopQdNGxRw8Uo7lwwjhk9EJXMJPRy9w
          C2+OIe8jUz5mlnXbK+U4H5DaJsevPeSkAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA1LTIwVDIw
          OjAzOjIxLTA3OjAwjAnMcQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNS0yMFQyMDowMzoyMS0w
          NzowMP1UdM0AAAAASUVORK5CYII="
        />
      </svg>
    );
  }
}

