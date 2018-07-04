import React, { PureComponent, PropTypes } from 'react';

export default class HidePasswordIcon extends PureComponent {
  render() {
    const {
      onToggle = () => {},
    } = this.props;
    const style = { cursor: 'pointer', padding: '0px', outline: 'none' };
    return (
      <button style={style} onClick={onToggle}>
        <svg
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="14px"
          height="11px"
          viewBox="0 0 14 11"
          enableBackground="new 0 0 14 11"
          xmlSpace="preserve"
        >
          <image
            width={14}
            height={11}
            x={0}
            y={0}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALCAQAAADljHTpAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
            AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN
            RQfiBwQHEg2pEEGFAAABB0lEQVQY023QzUoCURxA8fO/3hmMCfzAIAI3kdCiNoJGGK2CEOoVAoPo
            BXqWSAiEXsEghAIXEtEiC4lCwpa5sIzMJnXm3hbtorP7bY/wT4cJvamvdzv6lyfeaNnMmrgY6XIj
            RXB7oAHKWT+Loh+5D0VepQjSGPogcLQuiyCdTL09Fw70FriX45x9S1xEjhdsDsCt9lbkU22AUw0K
            xsXzUWEeQA1K39EXuwb2vPQehABqXtk2gNWVuL8KYc1mKlHxAORWJZvStRPnarINwamkknejPIB5
            2nsWKDtOOiiANGwMTJqYGFr7LdDgTX0V4OPMW1IzImoQPEw/7gwBNIxTTILaQZ/631M/f5peMPCJ
            VWsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDctMDRUMDc6MTg6MTMtMDc6MDBE0+bIAAAAJXRF
            WHRkYXRlOm1vZGlmeQAyMDE4LTA3LTA0VDA3OjE4OjEzLTA3OjAwNY5edAAAAABJRU5ErkJggg=="
          />
        </svg>
      </button>
    );
  }
}
HidePasswordIcon.propTypes = {
  onToggle: PropTypes.func.isRequired,
};
