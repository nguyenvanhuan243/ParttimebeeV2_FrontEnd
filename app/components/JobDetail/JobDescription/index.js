import React, { PureComponent, PropTypes } from 'react';

export default class JobDescription extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      text = '',
    } = this.props;
    const buttonRendered = (location.search === '?preview');
    return (
      <div className="JobDescription">
        <div dangerouslySetInnerHTML={{ __html: text }} className="JobDescription-content" />
        { buttonRendered ?
          <div>
            <button className="JobDescription-editButton">
              <span className="JobDescription-editButtonText">
                EDIT JOB
              </span>
            </button>
            <button className="JobDescription-postButton">
              <span className="JobDescription-postButtonText">
                POST JOB
              </span>
            </button>
          </div> : null }
      </div>
    );
  }
}
JobDescription.propTypes = {
  text: PropTypes.string,
};

