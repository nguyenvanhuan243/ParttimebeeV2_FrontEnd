import { Component, PropTypes } from 'react';

let didLoadScript = false;

export default class AddThis extends Component {
  static propTypes = {
    pubId: PropTypes.string,
  }

  componentDidMount() {
    if (!didLoadScript) {
      const { pubId } = this.props;

      const child = document.createElement('script');
      const parent = document.getElementsByTagName('body')[0];
      child.type = 'text/javascript';
      child.src = `https://s7.addthis.com/js/300/addthis_widget.js#pubid=${pubId}`;
      parent.appendChild(child);

      didLoadScript = true;
    }
  }

  render() {
    return null;
  }
}
