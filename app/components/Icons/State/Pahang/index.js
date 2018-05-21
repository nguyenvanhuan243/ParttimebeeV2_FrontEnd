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

export default class PahangIcon extends PureComponent { // eslint-disable-line react/prefer-stateless-function
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
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
          AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN
          RQfiBRQUATSjQ5HJAAAAYklEQVQ4y+2RKw6AMBQEp/wcHs1JOBkCQ2o5EkchgdaTIDCLQtMnSBDM
          2hm1qNSoVSkEeRXIJ8k33inQkE50kkEHMpv+By8Frt6NAf/T3wiiyd9yajpDMOTMHLRUnI9b6Jku
          6h95thx/6GgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDUtMjBUMjA6MDE6NTItMDc6MDCz0Q/I
          AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA1LTIwVDIwOjAxOjUyLTA3OjAwwoy3dAAAAABJRU5E
          rkJggg=="
        />
      </svg>
    );
  }
}

