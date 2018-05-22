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
import Header from 'components/Header/Loadable';
export default class PolicyPage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="PolicyPage">
        <div className="PolicyPage-header container">
          <Header />
        </div>
        <div className="PolicyPage-container">
          <div className="PolicyPage-privacy">
            Privacy
          </div>
          <div className="PolicyPage-contentContainer">
            <div className="PolicyPage-sectionContainer">
              <div className="Policy-session1">
                Effective date: August 17th 2014<br></br><br></br>
                We at Product Hunt know you care about how your personal information is used and shared, and we take your privacy seriously. Please read the following to <br></br>
                learn more about our Privacy Policy. By using or accessing the Services in any manner, you acknowledge that you accept the practices and policies outlined in <br></br>
                this Privacy Policy, and you hereby consent that we will collect, use, and share your information in the following ways. Remember that your use of Product<br></br>
                Hunt’s Services is at all times subject to the  Terms of Use, which incorporates this Privacy Policy. Any terms we use in this Policy without defining them have<br></br>
                the definitions given to them in the  Terms of Use.
              </div>
              <div className="Policy-session2">
                What does this Privacy Policy cover?
              </div>
              <div className="Policy-session3">
                This Privacy Policy covers our treatment of personally identifiable information Personal Information that we gather when you are accessing or using our Services, but not to the practices of companies we don’t own or control, or people that we don’t manage. We gather various types of Personal Information from our users, as explained in more detail below, and we use this Personal Information internally in connection with our Services, including to personalize, provide, and improve our services, to allow you to set up a user account and profile, to contact you and allow other users to contact you, to fulfill your requests for certain products and services, and to analyze how you use the Services. In certain cases, we may also share some Personal Information with third parties, but only as described below.
                <br></br><br></br>
                As noted in the  Terms of Use, we do not knowingly collect or solicit personal information from anyone under the age of 13. If you are under 13, please do not attempt to register for the Services or send any personal information about yourself to us. If we learn that we have collected personal information from a child under age 13, we will delete that information as quickly as possible. If you believe that a child under 13 may have provided us personal information, please contact us at hello@producthunt.com.
              </div>
              <div className="Policy-session4">
                Will Product Hunt ever change this Privacy Policy?
              </div>
              <div className="Policy-session5">
                We’re constantly trying to improve our Services, so we may need to change this Privacy Policy from time to time as well, but we will alert you to changes by placing a notice on the Services, by sending you an email, and/or by some other means. Please note that if you’ve opted not to receive legal notice emails from us (or you haven’t provided us with your email address), those legal notices will still govern your use of the Services, and you are still responsible for reading and understanding them. If you use the Services after any changes to the Privacy Policy have been posted, that means you agree to all of the changes. Use of information we collect now is subject to the Privacy Policy in effect at the time such information is used or collected.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

