import React, { PureComponent, PropTypes } from 'react';

export default class FacebookIcon extends PureComponent {
  getImage(hover) {
    if (hover) {
      return (
        `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
        AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN
        RQfiBhIIKRy8XOiBAAAAkElEQVQoz72OsQ3CMBBFvyOIlCYNDaJiBUSRikFYhoJ9YBYKVmCAIBCK
        g3g0Z2KMpXT85uR3T74vRaFkxxkPtMqFA5/k1s2wpgu0iIy1za0Wmgc4iYSZzaPzAzSBlWotjW14
        qnWn7/tpLrkO2QThnvD0TUnF3r6vqZgmJZ2X6I09XP97YrTDn4SrJOmmVyy8AfOeUxxP3FzaAAAA
        JXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA2LTE4VDA4OjQxOjI4LTA3OjAwlQ9/vwAAACV0RVh0ZGF0
        ZTptb2RpZnkAMjAxOC0wNi0xOFQwODo0MToyOC0wNzowMORSxwMAAAAASUVORK5CYII=`
      );
    }
    return (
      `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
      AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAXVBMVEUAAABVgKo9WZo8WZk7
      Wpk7Wpg8Wpk8XZk7WZk8WZo9Wpo9XJk8WqU7Wpk+Xpw9WZo8WZk9W5hAWpo7WZk8Wpk8WphVcao9
      WplJW6RmZpk8Wpo8WZhVqqo7WZj///9ifjxoAAAAHXRSTlMABn7U+vGtN/lqWBkRfTE/nUMw5fTa
      CYIOBW/zA7wgBg4AAAABYktHRB5yCiArAAAAB3RJTUUH4gUHAh8UFmupbQAAAFZJREFUGNNjYAAD
      RiZmFllWBgRgkwUBBJ8dzOdACHACuVzcPAgBXqAAI4LLxy8AFBDkF4IJyEKBME4BEaiAKEyAUUwc
      yJUQk0S1BYlLHQEpWVlpGQgTABvaCbIqhvvxAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA1LTA3
      VDAyOjMxOjIwLTA3OjAwH55orQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNS0wN1QwMjozMToy
      MC0wNzowMG7D0BEAAAAASUVORK5CYII=`
    );
  }
  render() {
    const {
      hover = false,
    } = this.props;
    return (
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
          xlinkHref={this.getImage(hover)}
        />
      </svg>
    );
  }
}
FacebookIcon.propTypes = {
  hover: PropTypes.bool,
};
