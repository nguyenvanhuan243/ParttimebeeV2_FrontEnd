/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PureComponent } from 'react';
export default class JobDescription extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="JobDescription">
        <div className="JobDescription-content">
        Tapway is growing fast as a start­up and is looking to expand our marketing and sales team. Thus, we are looking for a <br></br> marketing trainee to:<br></br><br></br>
        ● Develop marketing campaigns to promote our products & services<br></br>
        ● Communicate with target audiences and manage customer relationships<br></br>
        ● Source advertising opportunities in the press ­ local, regional, national, specialist and digital publications­ or on<br></br>
        ● Manage the production of marketing materials, including videos, leaflets, posters, flyers and newsletters<br></br>
        ● Organize events such as workshops, conferences and seminars<br></br>
        ● Manage our social media websites such as Facebook, Twitter, LinkedIn and YouTube page<br></br>
        ● Have fun in a highly dynamic team and drive innovations to continue as a leader in one of the fastest ­growing<br></br>
        Having initially focused on classic slim fit men’s shirt, the range evolved to a complete modern and contemporary motive featuring from geometrical to floral theme. Mixing the classical and out of the norm colour, makes our batik shirt the most sought after in domestic market.<br></br>
        The idea was started when two young entrepreneurs, also a good friend who appreciate the art of batik trying to cultivate, preserve and nurture our batik tradition back to a modern and hectic lifestyle. As both of them travel extensively throughout Nusantara, more and more ideas come to reality and its where Kapten Batik was born.
        </div>
      </div>
    );
  }
}

