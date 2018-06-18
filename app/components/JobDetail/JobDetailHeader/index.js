import React, { PureComponent, PropTypes } from 'react';
export default class JobDetailHeader extends PureComponent {
  render() {
    const {
      title = '',
      companyName = 'Company Name Here',
      state = 'KUALALUMPUR',
      city = 'PUTRAJAYA',
    } = this.props;
    return (
      <div className="JobDetailHeader">
        <div className="JobDetailHeader-image" />
        <div className="JobDetailHeader-info">
          <div className="JobDetailHeader-title"> { title } </div>
          <div className="JobDetailHeader-companyName"> { companyName } </div>
          <div className="JobDetailHeader-address">
            <div className="JobDetailHeader-addressState">
              <div className="JobDetailHeader-addressStateText">
                { state && state.toUpperCase() }
              </div>
            </div>
            <div className="JobDetailHeader-addressCity">
              <div className="JobDetailHeader-addressCityText">
                { city && city.toUpperCase() }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

JobDetailHeader.propTypes = {
  title: PropTypes.string,
  companyName: PropTypes.string,
  state: PropTypes.string,
  city: PropTypes.string,
};

