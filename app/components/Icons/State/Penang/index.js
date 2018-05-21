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

export default class PenangIcon extends PureComponent { // eslint-disable-line react/prefer-stateless-function
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
          AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABj1BMVEVmmcw5ccg4csg+dsv/
          /wj//wD//wD//wA4csk3ccn//wA4csg3csr//wBJbds4ccj//wA3ccj//////wDi7+bx+PPq9O2P
          w6Coz7ay1b6u1Lt+upPB3Mqew6s2kFQfiUJip3kwkFAyj1B1r4j7/fzy9/RdrHYeh0EpjUtJnWRh
          pHYik0Y7m1ur0bjP5dY/l1qPwaEvkE4ujE5+tJBboHFnpn9fpHT+/v6Uw6QqjUkngkQYejmy0742
          kFM5lVbw9/NOo2g9mFszi1BnrH34+/nU5NkjgkTi7uav0brW6Ns+j1o8m1vd6uJZnnHj7Ob9/v5R
          p23k7ej4+vnq8O2+mI7bzcnu5OLGnZPPsaiyh3vGoJbw5+XRtq/KpJzMp57KpZzJpJvp7evJpZvn
          7Oni6OTh5+P9/f36+vqHtZY2kVNDlF1KhFU6lFczllMwlFBOpGnS39b09vWZwKVLm2Q7mlk3nVhF
          p2RwtYZjsXw0oFZQqGtSnGo/mFx2sojt8e+50cCSxqOrzLXI3M/U4dnP39Tgs8RnAAAAEXRSTlMF
          h+Xb1+eJBojm5umPjAfoB/tZJnIAAAABYktHRBJ7vGwAAAAAB3RJTUUH4gUUFAM3CHyi8QAAAOJJ
          REFUKM9jYGBkEmQWQgEswqxs7AwcgoKYEsLCbAycCAkRUYQEF4MgVEJMXEJSSloGJiEMl5CVk1dQ
          VFJWQZdQVVPX0NTS1tFFl9DTNzA0MjYxNUOXMLewtLK2sbWzx5BwcHRydnF1c8ew3MPTy9tHyNcP
          Q0JIyD8gMChYCIuEUEhomBBWifCISOwSUdEx2CVikQIRRSIOl0Q8LokE7BKJ5knJKalp6BLpGZlZ
          2Tm5efkFKBKFRcUlpWXlFZVV1TW1dRAJbpBEfUNjEyzGm1tAEqwMPNgTAy8DHw8/luTDKwAAYTA+
          7yS71W4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDUtMjBUMjA6MDM6NTUtMDc6MDByg+F7AAAA
          JXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA1LTIwVDIwOjAzOjU1LTA3OjAwA95ZxwAAAABJRU5ErkJg
          gg=="
        />
      </svg>
    );
  }
}

