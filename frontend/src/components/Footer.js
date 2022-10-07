import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="a">
        <h4>S - Company</h4>
        <p>Customer satisfaction is our at-most priority with more than a million happy customers</p>
        <p>Copyright &copy;{date}</p>
      </div>
      <div className="b">
        <h4>Follow us</h4>
        <a href="facebook.com">Facebook</a>
        <br />
        <a href="instagram.com">Instagram</a>
        <br />
        <a href="twitter.com">Twitter</a>
        <br />
      </div>
    </div>
  );
};

export default Footer;
