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

export default class Logo extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <svg
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="39px"
        height="47px"
        viewBox="0 0 39 47"
        enableBackground="new 0 0 39 47"
        xmlSpace="preserve"
      >
        <image
          width={39}
          height={47}
          x={0}
          y={0}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAvCAMAAABXLiNqAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
      AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABvFBMVEUAAAA/Ozc9OTY8ODc8
      OTY8ODY8ODc8OTY9OTc8PDhVVVVHOTk8OTY7ODY8ODdCOjo9PT08ODY8ODc8PDz///88OTY8ODY7
      Ozc8OTY9Ojc8OTc9OjhJSTc7ODY8OTc7Ozs+PjY/Ojo7OTc9ODg8OTY+OTlBOzs8Ojg7OTY8OTdF
      OztAOzs+OzdAQEA8ODc9OTc8OTaAgIA7ODg8OTc8PDc8Ojc8OTc8OTdVVVU8Ojg8ODc+Ojo7OTc8
      OTk8OTc8ODc9OTc+OTk/OzY9OTlAOjo8PDw9ODhCOTlAQEA7ODY8OTc7ODc7OTY9OjY7OTY7OTZA
      QEBEREQ8OTZVOTk/Ojo8ODc7OTc8ODY7OTc7OTY7OTg7ODZOQzBSRS9ORDBBPDTTkAz/qgDYkwpD
      PTNvVyd2WiVNQjD0pAL3pgJSRi9VSC6LZh+OaB+KZx9XSC5LSUdkYmBNSkhzcXD6+vr////7+/t6
      d3a5t7fAv7+Af32IhoVeW1p7eXhgXlxIQDJzWCZzWSZJQDHrngXuoARMQjFwVid3WyVFPjPjmQfn
      nAZlUCppUilpUymVbR34pgGZbhtqVChmUSpCPDNsVCiUqUlrAAAAW3RSTlMAQaDe+OvRt49AAxKy
      7JofFdmMEQHA5zhZXMRpDv37KyE5sDvFOid3xvwaNEoI2ovhAl/SPHOhnQZyzD7bWvfQgjE9Pywm
      MhsU+c21Y0vYygwPqQk1ldf08tOOPKl5UgAAAAFiS0dEFJLfyTUAAAAHdElNRQfiBQcUEAidWTYv
      AAABjklEQVQ4y63U5VfCUBzG8Z+KASh2oKKo2Ind3d11bcXuTuzE9h8W8Gw32N144fcNhz2fw4Ft
      DMCRh6eXChF5+/j6qTXApPVHUgXoAikWFIw4qUJCMQsLR/wiIkUXheRS6QUXjeSL+WOxBgUX5+F0
      8UipAKPDJSg6lOjiJiZxU/hwEu2mZ2bJ5uaFwWR3ydgtzNJZxCWFcotLFFteEZdUyqHVtXXcxiYe
      0mjHLV1DuK1tth1xy8Bud2+f7eBQGDOxO9p37VgYs7A7kXCn+Ewnid/h7JztQtyMhJMrm3LWSwvu
      6hoPOUA66w11PW7vxCWXcvfM9X0gbxjCPT5R7NkqDHlmyqHpF5vN9vr2/vFpf/36Fo/nA0j93h/m
      fYH946BQ8ZwYnH8kZVcEbrlicMuVlLrjDGXCY0PWlVeAG66yKgyUXHVNbR31lKxnhV6tbmjUss9c
      V9cEkv23a2Zdi7RrZVibRtpBO+06OAw6adfFc2YTyRKBW1A3Zj29fAd9/cLdoRsA2QaHhkdGx8bj
      +eIX6ADwAaDmWMoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDUtMDdUMjA6MTY6MDgtMDc6MDBV
      1vLpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA1LTA3VDIwOjE2OjA4LTA3OjAwJItKVQAAAABJ
      RU5ErkJggg=="
        />
      </svg>
    );
  }
}