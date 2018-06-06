import React from 'react';
import Header from 'components/Header/Loadable';
const TermsPage = () => (
  <div>
    <Header />
    <div className="TermsPage-container">
      <div className="TermsPage-termsOfService"> Terms of Service </div>
      <div className="TermsPage-contentContainer">
        <div className="TermsPage-sectionContainer">
          <div className="TermsPage-section1">
            PLEASE NOTE THAT YOUR USE OF AND ACCESS TO OUR SERVICES (DEFINED BELOW) ARE SUBJECT TO THE FOLLOWING TERMS; IF YOU DO NOT AGREE TO ALL OF THE FOLLOWING, YOU MAY NOT USE OR ACCESS THE SERVICES IN ANY MANNER.!
          </div>
          <div className="TermsPage-section2">
            Effective date: August 17th 2014 <br></br>
            <br></br>
            Welcome to Product Hunt. Please read on to learn the rules and restrictions that govern your use of our website(s), products, services and applications (the “Services”). If you have any questions, comments, or concerns regarding these terms or the Services, please contact us at hello@producthunt.com or 90 Gold St, FLR 3, San Francisco, CA 94133.
            <br></br><br></br>
            These Terms of Use (the “Terms”) are a binding contract between you and PRODUCT HUNT, INC. (“Product Hunt,” “we” and “us”). You must agree to and accept all of the Terms, or you don’t have the right to use the Services. Your using the Services in any way means that you agree to all of these Terms, and these Terms will remain in effect while you use the Services. These Terms include the provisions in this document, as well as those in the  Privacy Policy and  Copyright Dispute Policy.
          </div>
          <div className="TermsPage-section3"> Will these Terms ever change? </div>
          <div className="TermsPage-section4">
            We are constantly trying to improve our Services, so these Terms may need to change along with the Services. We reserve the right to change the Terms <br></br> at any time, but if we do, we will bring it to your attention by placing a notice on the producthunt.com website, by sending you an email, and/or by some other means.<br></br><br></br>
            If you don’t agree with the new Terms, you are free to reject them; unfortunately, that means you will no longer be able to use the Services. If you use the <br></br> Services in any way after a change to the Terms is effective, that means you agree to all of the changes.<br></br><br></br>
            Except for changes by us as described here, no other amendment or modification of these Terms will be effective unless in writing and signed by both you and us.
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default TermsPage;
