import React, { PureComponent, PropTypes } from 'react';
import classNames from 'classnames';

export default class Item extends PureComponent {
  render() {
    const { active = false, text = '', onActive = () => {} } = this.props;
    const itemClassName = classNames('Item-container', { 'Item-active': active });
    return (
      <div>
        <button onClick={onActive} className={itemClassName}>
          <div className="Item-text"> { text } </div>
        </button>
      </div>
    );
  }
}
Item.propTypes = {
  active: PropTypes.bool,
  text: PropTypes.string,
  onActive: PropTypes.func.isRequired,
};

