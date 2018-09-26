import React, { PureComponent, PropTypes } from 'react';
import classNames from 'classnames';

export default class Item extends PureComponent {
  constructor() {
    super();
    this.state = { hover: false };
  }

  render() {
    const {
      href = () => {},
      showSeparate = true,
      changePaddingTop = false,
      changePaddingBottom = false,
      title = 'JOB TITLE HERE',
      companyName = 'Company Name',
    } = this.props;

    const itemClassName = classNames('RelatedJobItem', {
      'RelatedJobItem-hover': this.state.hover,
      'RelatedJobItem-paddingTop11': changePaddingTop,
      'RelatedJobItem-paddingBottom11': changePaddingBottom,
    });

    return (
      <button
        onClick={href}
        className="RelatedJobItem-href"
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <div className={itemClassName}>
          <div className="RelatedJobItem-container">
            <div className="RelatedJobItem-image" />
            <div className="RelatedJobItem-text">
              <div className="RelatedJobItem-title"> { title } </div>
              <div className="RelatedJobItem-companyName"> { companyName } </div>
            </div>
          </div>
          { showSeparate && <div className="RelatedJobItem-separate" /> }
        </div>
      </button>
    );
  }
}
Item.propTypes = {
  title: PropTypes.string,
  companyName: PropTypes.string,
  href: PropTypes.func.isRequired,
  showSeparate: PropTypes.bool,
  changePaddingTop: PropTypes.bool,
  changePaddingBottom: PropTypes.bool,
};
