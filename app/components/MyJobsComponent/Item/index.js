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

import React, { PureComponent, PropTypes } from 'react';
import classNames from 'classnames';

export default class Item extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      active = false,
      text = '10 On-going jobs',
      onActiveJob = () => {},
    } = this.props;
    const itemClassName = classNames('Item-container', {
      'Item-active': active,
    });
    return (
      <div>
        <button onClick={onActiveJob} className={itemClassName}>
          <div className="Item-text">
            { text }
          </div>
        </button>
      </div>
    );
  }
}

Item.propTypes = {
  active: PropTypes.bool,
  text: PropTypes.string,
  onActiveJob: PropTypes.func.isRequired,
};

