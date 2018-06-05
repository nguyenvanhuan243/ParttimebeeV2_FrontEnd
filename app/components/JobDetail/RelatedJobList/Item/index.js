import React, { PureComponent, PropTypes } from 'react';
import classNames from 'classnames';

export default class Item extends PureComponent {
  constructor() {
    super();
    this.state = { hover: false };
  }
  render() {
    const {
      title = 'JOB TITLE HERE',
      companyName = 'Company Name',
      href = '',
      showSeparate = true,
      changePaddingTop = false,
      changePaddingBottom = false,
    } = this.props;
    const itemClassName = classNames('RelatedJobItem', {
      'RelatedJobItem-paddingTop11': changePaddingTop,
      'RelatedJobItem-paddingBottom11': changePaddingBottom,
      'RelatedJobItem-hover': this.state.hover,
    });
    return (
      <a
        className="RelatedJobItem-href"
        href={href}
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
          { showSeparate && <div className="RelatedJobItem-separate"></div> }
        </div>
      </a>
    );
  }
}
Item.propTypes = {
  title: PropTypes.string,
  companyName: PropTypes.string,
  href: PropTypes.string,
  showSeparate: PropTypes.bool,
  changePaddingTop: PropTypes.bool,
  changePaddingBottom: PropTypes.bool,
};
