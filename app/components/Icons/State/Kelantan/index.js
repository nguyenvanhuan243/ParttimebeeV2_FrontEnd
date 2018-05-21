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
          AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABgFBMVEXVKyvdICjeHyfeICfd
          ICf/QEDdICjeISf////cICjdHybdHyfdHybeISn/gIDdHybeJizhOkDhPELqdnvwoaTztLbnYWbs
          horzsbT1wsTpcHXiREr2xMX98fLeKTDdISj+/v7zsrTjSE3hP0XfMjj99vb////2xsjrgITkUljt
          jZHoZ2zlV1zvmp3jSU7dICfrgYX3ysv99fXfMTfnZWrmYGT++vriQkjkUVftj5LvlZj63t/52tzu
          kJPvmZzjRkz99PTmW2D0trn87u763+DnYGXtjJDeJy798/P87e3dJSvvmJvmXWL75uf88PHzsLPd
          JCv52tvqeHz76ergNDreKC/iRUvpb3T87O31vcDdIin2x8n86+zshIfiQ0nrfoLiQ0jlWV/wn6Ly
          qaz++/vkUVblWF3rfIHobHDuk5fxqKrsgobwnaD1vb/gNz33z9HukpXobXHtiIzoa3DfLDL87+/+
          /f3eKzH0vL71wMLyr7Hyra/qdXrpdHjfLjXukpZtr/zPAAAAD3RSTlMGh+XniQSAgwFg3PPbfQJR
          6E72AAAAAWJLR0QIht6VegAAAAd0SU1FB+IFFBQAAnXiNREAAAEwSURBVCjPY2BgZOLHAMwsrAws
          /FgBCwMzdglmBhhLQBBECsFl4BLCIiBSVAxDQlwCREpKIUsISQMJGVl+OXkBBUUgU0kZIqGiqqau
          wa+pxa+tw6+rp29gqGZkDNFhYqpqZm5haWVtY2tnr6Tg4CgGNUrAyVnNxdXN3cPTy9vHV83PPwAq
          IafCH6jm62YfJK7sHaxmwx8SCndVmFp4RKQ+P39UdEysWhySc+PVEhLNkvj5k1NS09TSkSR01TIs
          MrOy3URy7DXU7JAkMtVyLdz48/L4vZXy1QqQJArV1GzjQYwiXTW1YiSJklI1MwMgLW9bpuZcjhxW
          Umpqas4VlbJAKhw1EKvUoKAaPXRrHEDCHrUYwc5fJ1VfL1WHiCgcUcvEwIZdgp2Bg5OLGwPw8PIB
          ANZGRFGM2HXqAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA1LTIwVDIwOjAwOjAyLTA3OjAwFPNq
          kgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNS0yMFQyMDowMDowMi0wNzowMGWu0i4AAAAASUVO
          RK5CYII="
        />
      </svg>
    );
  }
}

