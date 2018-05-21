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

export default class SabahIcon extends PureComponent { // eslint-disable-line react/prefer-stateless-function
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
          AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAn1BMVEWq//+AyPCAyO9MndYp
          gcMpgsMrqtWByfCAyfB/vOZlptTJ5feWsNGVrtK42O7P6/rtKiruKirtKSntKCjuKSnuKCj/QEDt
          KSnuKSntKSnuKSntKir/MzOAyO8ogcN4wOhcnNBHg743cLAMOYooXKJzueQ5cbEjV54VRZIBLYAA
          K39foNN8xOwSQY8eUJp/yO8uZKhFgbxBe7j////tKCi/9JswAAAAHXRSTlMDh+XG54kGiOe/v8fl
          5uO/7u7n5YiFBIPc89uABeUjYacAAAABYktHRDM31XxeAAAAB3RJTUUH4gUUFAQmLY0UxAAAAIdJ
          REFUKM+9z8cSglAMheGoYMEuiqLmYkMx9vL+z4YzaCaRy8oZ/+X5VgegVEauYrIctwo1xDwY40Ld
          Dg58tkiDyWCxXK033xBvd8meXh00HE/07nxRcCXuhg2PAxLdmw9OAbWKoC0glnUEyOPY/Ql6qj4H
          z4L+AgP77sPQDiMIxpMw13Q2TwHzWlXvLTKQwAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNS0y
          MFQyMDowNDozOC0wNzowMDfnkkUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDUtMjBUMjA6MDQ6
          MzgtMDc6MDBGuir5AAAAAElFTkSuQmCC"
        />
      </svg>
    );
  }
}

