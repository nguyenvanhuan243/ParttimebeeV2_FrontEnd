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

export default class KedahIcon extends PureComponent { // eslint-disable-line react/prefer-stateless-function
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
          AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABVlBMVEX/AADfAADdAADeAADd
          AADMAADeAADdAADeAADeAADdAADdAADdAADdAAD/AADdAADfEQHiKQHnSgTgGwXjLQzgHATiKAbp
          VADhHwHdAQDoUAHxkAHmQhLzoB3znx3znSTynUTnSQDwhQHgGQDeDADxkQDoUQDiKhH0pjz2wJD4
          zLrvggDsbADqXQDtcQDiJADeEgb3xZH50qn1smnufyTqWwDwigDfEgDmQADvfwDjKwCgLADxm4Hz
          pTfzniXGYBDPCwDoUwDxjAHfDgDiJwDylgDjLwB3SQCaTQfxlB/qeh9QZQC/FgDrZADvgAHeCgDw
          hADueADAMAAfhwA6fwMjhAFBbwDjMgDvgQHpWgHoTgDtcwC+PgB0SwCBSADeYwDraADufADgGgDp
          VgDueQDymAD1pQH1rADwhgDsbgDiKQDgFgDlPgDtdgDvgADlOgDdAwD////diaoVAAAAD3RSTlMC
          YOPniQXlh4Vr3PPbgAVFhqsdAAAAAWJLR0Rxrwdc4gAAAAd0SU1FB+IFFBM5Hx0vwvcAAAC3SURB
          VCjPY2BgZOLHAMwsrAws/FgBCwMzdglmBhApICgkLCIqJi6BJAOSkJSSlpGVk1dQVFJGlVBRVVOX
          1dDU4tfWkUSR0NXTNzA0MjbhNzUzR5GwsLSytrG1s3dwdHJGkXBxdXP38PTy9vH1Q7XDPyAwKDgk
          NCw8IhJVgj8qOiAmNi4+ITEJTYI/OSU1LT0jM4sfXYI/Oyc3L7+AH1MCEww1CRxRy8bAjl2Cg4GB
          k4sbA/Dw8gEA5bgzpsrzqS0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDUtMjBUMTk6NTc6MzEt
          MDc6MDDD6+/kAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA1LTIwVDE5OjU3OjMxLTA3OjAwsrZX
          WAAAAABJRU5ErkJggg=="
        />
      </svg>
    );
  }
}

