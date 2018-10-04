import React, { PureComponent, PropTypes } from 'react';
export default class DefaultAvatar4 extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      avatarWidth = '40px',
      avatarHeight = '40px',
    } = this.props;
    const style = {
      width: avatarWidth,
      height: avatarHeight,
    };
    return (
      <svg style={style} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <desc>Created with Sketch.</desc>
        <defs />
        <g id="004-shovel-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect id="Rectangle" x={0} y={0} width={100} height={100} />
          <g transform="translate(5.000000, 5.000000)" fillRule="nonzero">
            <polygon id="Shape" fill="#C86D5C" points="52.0295252 36.9702646 46.1751366 36 22 60.1750315 23.1834725 65.8165275 28.8249685 67 53 42.8247583" />
            <polygon id="Shape" fill="#B24D40" points="53.0070095 37.4011811 50.5755758 37 51.1652815 40.5438917 26.4293725 65.177056 23 64.4606076 23.4917083 66.7940999 29.264091 68 54 43.3666214" />
            <path d="M55.0192355,33.9808223 C40.6317755,19.5933861 38.0361177,26.1774724 53.4185728,10.7950427 C68.801028,-4.58738695 88.0172279,0.982673133 88.0172279,0.982673133 C88.0172279,0.982673133 93.5876144,20.1987354 78.204842,35.5812709 C62.8220696,50.9638063 69.4066956,48.3683643 55.0192355,33.9808223 Z" id="Shape" fill="#B3B3B3" />
            <path d="M79.0643949,36.3666979 C94.6473686,20.6666559 89.0044079,1.05396019 89.0044079,1.05396019 C89.0044079,1.05396019 88.9346756,1.033887 88.8051727,1 C89.098991,8.06220219 87.7922869,22.4025553 74.8571055,35.4348053 C70.0797465,40.2480546 67.08822,43.5477204 65,45.5254694 C68.2177548,48.9919802 69.0005561,46.506142 79.0643949,36.3666979 Z" id="Shape" fill="#999999" />
            <path d="M69.9701833,21.0625904 C70.1388479,20.4354009 69.5645724,19.8612266 68.9373866,20.0297877 C63.7811414,21.4152929 59.0797575,24.1319288 55.304513,27.9071952 L47,36.2117565 L53.788204,43 L62.0927171,34.6954387 C65.8680661,30.9201723 68.5847907,26.218761 69.9701833,21.0625904 Z" id="Shape" fill="#D9D9D9" />
            <path d="M23.8885834,73.0778604 L29,67.9664816 L22.0334668,61 L16.9222648,66.1115934 C14.2517855,63.4411338 9.92192808,63.4411338 7.2512341,66.1115934 L0.971288272,72.3910635 C-0.323762757,73.6861049 -0.323762757,75.7858792 0.971288272,77.0809207 L12.9191749,89.0287189 C14.214226,90.3237604 16.3140158,90.3237604 17.6090668,89.0287189 L23.8890126,82.7488196 C26.5593847,80.0781454 26.5593847,75.7485346 23.8885834,73.0778604 Z M15.3806089,83.0374889 L6.96256263,74.6195049 L8.01304776,73.5690275 C10.3376579,71.2444346 14.1064839,71.2444346 16.4310941,73.5690275 C18.7557042,75.8936205 18.7557042,79.6624186 16.4310941,81.9870115 L15.3806089,83.0374889 Z" id="Shape" fill="#B3B3B3" />
            <path d="M23.8639702,72.9835932 L29,67.8436755 L26.1586911,65 L21.0226612,70.1399176 C23.7059999,72.8252875 23.7059999,77.179288 21.0226612,79.8648736 L14.7124753,86.1798361 C13.4111882,87.4821083 11.3012871,87.4821083 10,86.1798361 L12.8413089,89.0232959 C14.1425961,90.325568 16.2524971,90.325568 17.5537843,89.0232959 L23.8639702,82.7083333 C26.5476323,80.0229635 26.5476323,75.6691788 23.8639702,72.9835932 Z" id="Shape" fill="#999999" />
            <g id="Group" transform="translate(68.000000, 7.000000)" fill="#3B484A">
              <path d="M0.461216663,3.33328198 C-0.0538882144,2.8181771 -0.0538882144,1.98275403 0.461216663,1.46775298 L1.50097886,0.427990789 C2.01608373,-0.0871140883 2.8515068,-0.0871140883 3.36650785,0.427990789 C3.88161273,0.943095667 3.88161273,1.77851874 3.36650785,2.29351978 L2.32674566,3.33328198 C1.81164078,3.84838685 0.976425372,3.84838685 0.461216663,3.33328198 Z" id="Shape" />
              <path d="M11.9526967,14.8246582 C11.4375918,14.3095533 11.4375918,13.4741302 11.9526967,12.9591292 L12.9924589,11.919367 C13.5075637,11.4042621 14.3429868,11.4042621 14.8579879,11.919367 C15.3730927,12.4344718 15.3730927,13.2698949 14.8579879,13.784896 L13.8182257,14.8246582 C13.3032246,15.339763 12.4680092,15.339763 11.9526967,14.8246582 Z" id="Shape" />
              <path d="M5.65192883,9.63404982 C4.83000377,8.81212476 4.40222064,7.6943856 4.47801717,6.56740548 C4.52681767,5.84038183 5.15561733,5.29080511 5.88264099,5.33970944 C6.60945698,5.38850994 7.15913753,6.01720578 7.11033703,6.74433326 C7.08572912,7.11179066 7.23410341,7.48516642 7.51766548,7.76872849 C7.80122755,8.05229056 8.17460331,8.20066485 8.54226837,8.17605694 C9.26918819,8.12704878 9.89798786,8.67683316 9.94668453,9.40396064 C9.99548503,10.1308805 9.44580448,10.759784 8.71878082,10.8083768 C7.59159305,10.8836542 6.47375005,10.4557672 5.65192883,9.63404982 Z" id="Shape" />
            </g>
          </g>
        </g>
      </svg>
    );
  }
}

DefaultAvatar4.propTypes = {
  avatarWidth: PropTypes.string,
  avatarHeight: PropTypes.string,
};
