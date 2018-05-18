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

export default class MelakaIcon extends PureComponent { // eslint-disable-line react/prefer-stateless-function
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
            AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAsVBMVEV0orlEZJoSPIXeEhLc
            RET/dHT8/Pz09PTz8/P///////8ALXzdAAAUOnJLXFcNNXVcZ0/nvws9VF45UWD8zAF2eEJQX1W0
            nyT9zQAQN3QFMXk2T2HFqhzowAvkvQ1rcUf+zgDVtBQ3UGHSsRXwxAcIMnjuxAj/zgA8U16KhDgy
            TWNKW1hYZVFmbkpRYFQKNHfWtBO2oCMBLXsMNHaPhzaAfj0LNHbx9Pf88vL88fH////t9omSAAAA
            C3RSTlMLx/z8xwv8yMcLCaPUzjEAAAABYktHRAnx2aXsAAAAB3RJTUUH4gUHAQMGAeM7IQAAAJNJ
            REFUKM9jYGBk4oYBHhhgZmFlYOTmxpTg4WFhAKvn5eNHk2BmAAkICAqh6+ABSQiLiAJJMUwJcQlJ
            KWkhGUwJWTlubnkFBUUldAllFW5uVTV1DQwdmupa3No6unoYEvoGhkZAih9DgtvYxNQMm3Ox+ZyH
            wRwJWFgiAIMVDjDUJNiwi7MxsGOX4GDg5MCih42DCwD+eU+ZJ3+ClQAAACV0RVh0ZGF0ZTpjcmVh
            dGUAMjAxOC0wNS0wN1QwMTowMzowNi0wNzowMB62gBgAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgt
            MDUtMDdUMDE6MDM6MDYtMDc6MDBv6zikAAAAAElFTkSuQmCC"
        />
      </svg>
    );
  }
}

