import React, { PureComponent, PropTypes } from 'react';

export default class RelatedJobItem extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      title = 'JOB TITLE HERE',
      companyName = 'Company Name',
      href = '',
      showSeparate = true,
    } = this.props;
    return (
      <a className="RelatedJobItem-href" href={href}>
        <div className="RelatedJobItem">
          <div className="RelatedJobItem-container">
            <div className="RelatedJobItem-image">
            </div>
            <div className="RelatedJobItem-text">
              <div className="RelatedJobItem-title">
                { title }
              </div>
              <div className="RelatedJobItem-companyName">
                { companyName }
              </div>
            </div>
          </div>
          { showSeparate ? <div className="RelatedJobItem-separate"></div> : null }
        </div>
      </a>
    );
  }
}

RelatedJobItem.propTypes = {
  title: PropTypes.string,
  companyName: PropTypes.string,
  href: PropTypes.string,
  showSeparate: PropTypes.bool,
};
