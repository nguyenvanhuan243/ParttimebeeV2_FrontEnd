import React, { PureComponent, PropTypes } from 'react';

export default class WhatsappIcon extends PureComponent {
  render() {
    return this.props.hover ? <WhatsappIconHover /> : <WhatsappIconNormal />;
  }
}
WhatsappIcon.propTypes = {
  hover: PropTypes.bool,
};

const WhatsappIconNormal = () => (
  <svg
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    enableBackground="new 0 0 16 16"
    xmlSpace="preserve"
  >
    <image
      width={16}
      height={16}
      x={0}
      y={0}
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
      AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAn1BMVEUAAABH21lE2lZD2VVD
      2FVm/2ZE2VVE2VVE2VRE2VRQ32BE2VRE3VVF2VZV6lVE3VVE2lZD2VVE2FX///9F21dD2VRE2FRE
      2VVE2FVD2VRE2VRD2FVF21VF21VN2VmA/4BE2lRG3FhE2VRE2FRE2VVG2VRF3VpD2FVE2FRK31VE
      2FVE2FVD2FRF3VhF2lZJ21tK3lpE2VVE2FRD2FT///9t2LT6AAAAM3RSTlMAK4/V8wWT/bymELMt
      SgwPROvAAUbCcGzM1I76Tj8UAmEd+J3KWCW+vxj5xvs0WQ4fx+xL+wTTAAAAAWJLR0QTDLtclgAA
      AAd0SU1FB+IFBwIeKCAf5KsAAACVSURBVBjTVY/nEoMwDINFEhKge9LSQeneS+//bg2hUPr98J11
      li0DFk9IpaTwUOBrQ4fRvusDVgS5ollDW79hGDVKwXgQZBOtakRAkm10KkFCkd187ItCj+wPhuYn
      jGwdIzacTAtLYutsjkW4TFduabbOlTi1iTJ3Fhvn3e6i/cEFw5H/0U/mfLnWn7vdH3gmr3f5/geh
      ex7PFHCAtgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNS0wN1QwMjozMDo0MC0wNzowMDYzChQA
      AAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDUtMDdUMDI6MzA6NDAtMDc6MDBHbrKoAAAAAElFTkSu
      QmCC"
    />
  </svg>
);

const WhatsappIconHover = () => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M8.002 0C12.413 0 16 3.589 16 8s-3.587 8-7.998 8a7.93 7.93 0 0 1-4.401-1.322l-3.075.983.997-2.972A7.94 7.94 0 0 1 0 8c0-4.412 3.587-8 7.998-8h.004zm3.837 11.794c.183-.558.183-1.032.13-1.133-.054-.101-.201-.158-.424-.279-.224-.119-1.31-.695-1.515-.772-.2-.082-.393-.053-.545.178-.214.321-.423.647-.594.844-.133.153-.352.173-.535.091-.246-.11-.934-.37-1.782-1.18C5.916 8.914 5.47 8.13 5.34 7.897c-.13-.24-.014-.379.089-.508.112-.15.218-.255.33-.394.113-.139.175-.211.247-.375.076-.158.021-.321-.033-.442-.053-.12-.5-1.291-.683-1.766-.147-.378-.26-.393-.482-.403C4.733 4.005 4.649 4 4.554 4c-.29 0-.594.092-.777.293C3.554 4.538 3 5.108 3 6.28c0 1.17.795 2.304.902 2.462.113.158 1.55 2.596 3.784 3.59 1.746.777 2.265.704 2.662.614.58-.135 1.308-.596 1.491-1.152z"
      fill="#FFF"
      fillRule="evenodd"
    />
  </svg>
);

