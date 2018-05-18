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

export default class WhatsAppIcon extends PureComponent { // eslint-disable-line react/prefer-stateless-function
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
          AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAArlBMVEVV/1VE2lRE2FRD2FRi
          3nCs7bPg+OL2/fZG2Fev7rb9/v3////N9NK+8sRP21/H9Mxl33N65IZM2lx244Kt7rTw+/HR9tVE
          2VV344P+//7S9daW6qCT6Z3a+N3g+eOr7bP8//x95Ily4n9S3GJF2VaK55VY3Gf5/fqS6ZxY3We2
          8L3Y99yE5pBf3m3Q9tTP9dRU22T6/vrU9tj8/vxp33aE5Y9N2l1Z3GjV9tnw/PKzkwj7AAAAA3RS
          TlMGiOZEyO1iAAAAAWJLR0QLH9fEwAAAAAd0SU1FB+IFDgESA19YozQAAADTSURBVEjH7dbHDoMw
          DAbgpAYCMdA96KKD7r3b93+xAlJRj5WNeuI/5ZJPTuIoEUKWgJGSFEJygCRSsGpI6xBcAaAg/kgY
          pqWUZRpkwnY0ptGOTSNsF7O4Nolw8CsOhTA0en75Q2iDQJiIFahmZZgEwkKsgZ8RFoFQiHVoZIQi
          EE3EVrsTcIhuPK8H/QAHQ+pCwnjeaAwTbxrNiNs5XyTGMoqHK+Khwjrdg83W3+2JrQUH5Db4UZ/O
          F941u97u8AifL9Zl/zEFkS+Rw7Ocw+eA/0V5A+rfJPsBQpDHAAAAJXRFWHRkYXRlOmNyZWF0ZQAy
          MDE4LTA1LTE0VDAxOjE4OjAzLTA3OjAw2470OQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNS0x
          NFQwMToxODowMy0wNzowMKrTTIUAAAAASUVORK5CYII="
        />
      </svg>
    );
  }
}
