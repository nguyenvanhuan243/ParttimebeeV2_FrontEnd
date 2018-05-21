import React, { PureComponent } from 'react';
import config from '../../../../config';

export default class LogoIcon extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <a href={config.BASE_URL}>
        <svg height="34" width="28" viewBox="0 0 28 34">
          <g fill="none">
            <path d="M0 0h28v34H0z" />
            <g>
              <path d="M14.487 0H5.806C2.635 0 .064 2.715.06 5.769L.043 28.287C.043 31.442 2.797 34 5.971 34c3.175 0 5.929-2.558 5.929-5.713V25.5h2.6c7.025 0 12.714-5.768 12.714-12.75S21.513 0 14.487 0z" fill="#3B3836" />
              <path d="M19.287 8.429c0-.708-.573-1.282-1.281-1.282H9.222c-.708 0-1.281.574-1.281 1.282 0 .812.74 1.281 1.167 1.281h8.898c.708 0 1.281-.573 1.281-1.281z" fill="#FA0" />
              <path d="M19.72 11.42H7.508a1.282 1.282 0 1 0 0 2.563H19.72a1.282 1.282 0 1 0 0-2.563z" fill="#FFF" />
              <path d="M18.006 15.692H9.222a1.282 1.282 0 1 0 0 2.563h3.11c.709 0 1.282.574 1.282 1.282 0-.708.574-1.282 1.282-1.282h3.11a1.282 1.282 0 1 0 0-2.563z" fill="#FA0" />
            </g>
          </g>
        </svg>
      </a>
    );
  }
}
