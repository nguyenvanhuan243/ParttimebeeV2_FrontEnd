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

export default class ShowPasswordIcon extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <svg
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="14px"
        height="10px"
        viewBox="0 0 14 10"
        enableBackground="new 0 0 14 10"
        xmlSpace="preserve"
      >
        <image
          width={14}
          height={10}
          x={0}
          y={0}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAQAAAAu0KdMAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
          AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN
          RQfiBQkCDjHuaSkJAAAA+ElEQVQY0z3PsUrDUBjF8f+9N01qKY0gqBiMIBaLDoKDg4LgZDc3VwcV
          X0NfwS0O+hpCJ6mDbrYuDg4iRWzBoS62ucn9HBo94+8Mh6P4z2VQCit5PNzL/kQBiL6upxt6uqBP
          eTp7L8qbcrbv5pTojv9mvWyVOrjXmbvD3EtK4wMVgrofDWRTUh6xrOmVb59b7bZUCCo9efGbblka
          ZnfcBcjjpKFNBMDowkgVQMLgZ7ItkZY2gNQWp9QzaHEdswAgtvKg4GpddkD3Xcv3jU2DvElVrGmd
          9hRAEqttqYk1ffFkFs2g3D76Kn7CuY6W8nlCcm+oescfE/0Fz8VX4bjIqA8AAAAldEVYdGRhdGU6
          Y3JlYXRlADIwMTgtMDUtMDlUMDI6MTQ6NDktMDc6MDDSrqDXAAAAJXRFWHRkYXRlOm1vZGlmeQAy
          MDE4LTA1LTA5VDAyOjE0OjQ5LTA3OjAwo/MYawAAAABJRU5ErkJggg=="
        />
      </svg>
    );
  }
}
