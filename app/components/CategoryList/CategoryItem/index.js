import React, { PureComponent, PropTypes } from 'react';
import classNames from 'classnames';
import 'w3-css/w3.css';

export default class CategoryItem extends PureComponent {
  render() {
    const { selected, onClickFunc, text = 'Home', iconType = 'HomeIcon' } = this.props;
    const categoryItemClassName = classNames('CategoryItem', { 'CategoryItem-selected': selected });
    return (
      <button className="CategoryItem-container w3-ripple" onClick={onClickFunc}>
        <div className={categoryItemClassName}>
          <div className="CategoryItem-icon">
            { iconType }
          </div>
          <div className="CategoryItem-text">
            { text }
          </div>
        </div>
      </button>
    );
  }
}
CategoryItem.propTypes = {
  text: PropTypes.string,
  iconType: PropTypes.object,
  selected: PropTypes.bool,
  onClickFunc: PropTypes.func.isRequired,
};

