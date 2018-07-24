import React, { PureComponent, PropTypes } from 'react';
import classNames from 'classnames';
import 'w3-css/w3.css';

export default class CategoryItem extends PureComponent {
  constructor() {
    super();
    this.state = { isHoverd: false };
  }
  render() {
    const {
      selected,
      onClickFunc,
      text = 'Home',
      iconType = 'HomeIcon',
    } = this.props;
    const { isHoverd } = this.state;
    const categoryItemClassName = classNames('CategoryItem', {
      'CategoryItem-hover': isHoverd,
      'CategoryItem-selected': selected,
    });
    return (
      <button
        className="CategoryItem-container w3-ripple"
        onMouseEnter={() => this.setState({ isHoverd: !this.state.isHoverd })}
        onMouseLeave={() => this.setState({ isHoverd: !this.state.isHoverd })}
        onClick={onClickFunc}
      >
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

