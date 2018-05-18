import React, { PureComponent } from 'react';

export default class SearchIcon extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <svg height="15" width="13" viewBox="0 0 13 15">
        <path d="M12.802 13.213L9.598 9.88a5.419 5.419 0 0 0 1.275-3.495A5.443 5.443 0 0 0 5.437.95 5.443 5.443 0 0 0 0 6.385a5.443 5.443 0 0 0 5.437 5.437c1.125 0 2.197-.34 3.114-.984l3.23 3.359a.705.705 0 0 0 1.002.02.71.71 0 0 0 .02-1.004zM5.437 2.367a4.023 4.023 0 0 1 4.018 4.018 4.023 4.023 0 0 1-4.018 4.019 4.023 4.023 0 0 1-4.019-4.019 4.023 4.023 0 0 1 4.019-4.018z" fill="#999" />
      </svg>
    );
  }
}

