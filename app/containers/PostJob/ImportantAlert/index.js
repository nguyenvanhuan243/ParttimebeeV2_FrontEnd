import React, { PureComponent, PropTypes } from 'react';
import ImportantIcon from 'components/Icons/ImportantIcon/Loadable';
import CloseIcon from 'components/Icons/CloseIcon/Loadable';

export default class ImportantAlert extends PureComponent {
  render() {
    const {
      closeFunc = () => {},
    } = this.props;
    return (
      <div className="ImportantAlert">
        <div className="ImportantAlert-iconContainer">
          <div className="ImportantAlert-icon">
            <ImportantIcon />
          </div>
          <div className="ImportantAlert-importantText">
            IMPORTANT
          </div>
          <CloseIcon closeFunc={closeFunc} size={12} />
        </div>
        <div className="ImportantAlert-textContainer">
          <div className="ImportantAlert-text">
            ● Your Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <div className="ImportantAlert-text">
            ● Your Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <div className="ImportantAlert-text">
            ● Your Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <div className="ImportantAlert-text">
            ● Your Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <div className="ImportantAlert-text">
            ● Your Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
        </div>
      </div>
    );
  }
}
ImportantAlert.propTypes = {
  closeFunc: PropTypes.func.isRequired,
};

