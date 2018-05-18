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

export default class FacebookIcon extends PureComponent { // eslint-disable-line react/prefer-stateless-function
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
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAiCAMAAADcfv+AAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
          AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAY1BMVEVVgKo8Wpo8Wpk7WZg/
          XJqbq8rd4+37+/z////09fm/yd1lfK76+/yMnsJ+krtOaaJIZJ6bqspgeKtrgrGzv9duhLNfeKvr
          7vT29/ri5vBBXpuercxFYp0+XJqQocT19/o9WpkLBcdMAAAAA3RSTlMGiOZEyO1iAAAAAWJLR0QI
          ht6VegAAAAd0SU1FB+IFDgELASpWawAAAACMSURBVEjH7dZJEoMgEIXhRjC2xsQBh8SM9z+lOKzR
          8Ciz4T/AV93FgiYSkQSKBJFAgClB0AzzHIQKUgbiUELFp4RTiMh4CiHOs5AjxMUA16JEiMoQamNX
          K1HrxhCt7twJXuv/StxW4u5OqOFhgOfwcieWF7EDgfiBeDN/vhixp0D4JTx8yx6OA/xEGQEalx4X
          5piPTgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNS0xNFQwMToxMTowMS0wNzowMLAEztoAAAAl
          dEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDUtMTRUMDE6MTE6MDEtMDc6MDDBWXZmAAAAAElFTkSuQmCC"
        />
      </svg>
    );
  }
}
