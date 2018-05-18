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

export default class EmailIcon extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <svg
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="66px"
        height="34px"
        viewBox="0 0 66 34"
        enableBackground="new 0 0 66 34"
        xmlSpace="preserve"
      >
        <image
          width={66}
          height={34}
          x={0}
          y={0}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAiCAQAAABBqcc5AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
          AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN
          RQfiBQ4BGi7SXnVJAAABLUlEQVRYw+3YsUvDQBTH8e+l5QZpoejSTg5NFwcVQads4ibo0NX+G906
          FPwXBNeM8R9wqxQdig4W16A4tNmkdBBSSuvWQbwOL5LrcG+84/348Ljk4FSkJ91lixp2KlFhpVM4
          u162KVsiQJkg1ep2bG0Kq2l41glQ82wLABzCIRzCVEVJ0wn7Bv2CNwb5TKJhbPOoC/JEiNc1e8O8
          ECN6pH+sz3hglBfikgV3vP9a/SBizoUgT3QwNafE9IkJ2ALgm0fGBPiSOBkCwKdKj4hjdvnkmR2a
          lIRZYgSUOGfIgCeKHHGAEidlQIDikD2+2EZnicmGANBUs0bIvo6pcO9fJ3GPb/xtx3khJrxI2oy1
          EbeoQziEQ5gRiW0CiadC2wYVFq76qaZu7YUiUTeVzg8k6TiiTJmm/gAAACV0RVh0ZGF0ZTpjcmVh
          dGUAMjAxOC0wNS0xNFQwMToyNjo0Ni0wNzowMIrXg9YAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgt
          MDUtMTRUMDE6MjY6NDYtMDc6MDD7ijtqAAAAAElFTkSuQmCC"
        />
      </svg>
    );
  }
}
