import React from 'react';
import Mailto from 'react-mailto';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="Footer">
    <div className="Footer-information">
      <Link to={'/pages/about'}> About </Link>
      <div className="Footer-oval"></div>
      <Mailto email={'parttimebee.my@gmail.com'}>
        Contact
      </Mailto>
      <div className="Footer-oval"></div>
      <Link to={'pages/terms'}> Terms </Link>
      <div className="Footer-oval"></div>
      <Link to={'/pages/policy'}> Privacy </Link>
    </div>
    <div className="Footer-copyRight"> PARTTIME BEE © 2017 </div>
  </div>
);
export default Footer;

