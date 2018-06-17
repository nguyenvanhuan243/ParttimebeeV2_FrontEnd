import React, { PureComponent, PropTypes } from 'react';
import classNames from 'classnames';
import 'w3-css/w3.css';

export default class CategoryItem extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      isHoverd: false,
    };
  }
  render() {
    const {
      text = 'Home',
      iconType = 'HomeIcon',
      selected,
      onClickFunc,
    } = this.props;
    const {
      isHoverd,
    } = this.state;
    const CategoryItemClassName = classNames('CategoryItem-container w3-ripple', {
      'CategoryItem-hover': isHoverd, 'CategoryItem-selected': selected,
    });
    return (
      <button
        className={CategoryItemClassName}
        onMouseEnter={() => this.setState({ isHoverd: !this.state.isHoverd })}
        onMouseLeave={() => this.setState({ isHoverd: !this.state.isHoverd })}
        onClick={onClickFunc}
      >
        <div className="CategoryItem">
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

