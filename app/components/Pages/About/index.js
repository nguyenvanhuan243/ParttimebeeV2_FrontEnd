import React from 'react';
import Header from 'components/Header/Loadable';
import DashlineIcon from 'components/LoginRegister/GeneralComponent/DashlineIcon/Loadable';

const AboutPage = () => (
  <div>
    <Header />
    <div className="AboutPage-container">
      <div className="AboutPage-titleContainer">
        <div className="AboutPage-title"> Big bold text here </div>
        <div className="AboutPage-abstract"> A toolkit for makers to ship awesome products </div>
      </div>
      <div className="AboutPage-dashlineIcon"> <DashlineIcon showLogo={false} /> </div>
      <div className="AboutPage-content">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Why do we use it?
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.
      </div>
      <div className="AboutPage-footer">
        <div className="AboutPage-devider" />
        <div className="AboutPage-copyRight"> Copyright © 2018 - ParttimeBee </div>
      </div>
    </div>
  </div>);
export default AboutPage;
