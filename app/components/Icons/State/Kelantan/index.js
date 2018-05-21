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

export default class KelantanIcon extends PureComponent { // eslint-disable-line react/prefer-stateless-function
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
            AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhFBMVEX/gIDiRUXkExP80hLz
            1UT/6HSXXl4SEhL70RPy1U/y1Uf//9Xu1WD60hr60hvy1Ev//4DlAADzpSX/0QDfBQUaFxeMMjLj
            AQEAAAAiHR2YLy8sIyOlKio4KSmwJSVDLi67ICABAQFOMTHFGRkEBARaNDTMFBSnki6wky/4xA79
            0gr///8CQ9HdAAAAEXRSTlMKx/z8xwu4/PzBxga4+/vDCrmrR9QAAAABYktHRCskueQIAAAAB3RJ
            TUUH4gUHAQYh2Z56DwAAAGpJREFUKM/lyVkWQ0AURdEnpQsheAlXSETfzH+Alh9hVdUIcj7PJjIu
            8aGEt4Rpkf2IZWA2yXmmmQIEAchfMvAGQFFqAHh/NABUXw2gblo1AF0//GA8Nc07sKY/BqH+Ll3V
            4JF/Cxap8B6tQMEtynTo53UAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDUtMDdUMDE6MDY6MzMt
            MDc6MDAkKGMYAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA1LTA3VDAxOjA2OjMzLTA3OjAwVXXb
            pAAAAABJRU5ErkJggg=="
        />
      </svg>
    );
  }
}

