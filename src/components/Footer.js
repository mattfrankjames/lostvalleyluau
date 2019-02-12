import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import img from '../images/LostValleyCorner.jpg';

const Footer = styled.footer`
  background: url(${img});
`;

const Footing = () => {
  return (
    <Footer>
      <div className="footer--top">
        <h2>Presented by:</h2>
        Sponsors go here
      </div>
      <div className="footer__bottom">
        <a
          aria-label="link to facebook page"
          target="_blank"
          rel="noopener"
          href="https://www.facebook.com/events/2290171741011071/"
        >
          <svg className="icon-fb" viewBox="0 0 24 24">
            <path
              fill="#000000"
              d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z"
            />
          </svg>
        </a>
      </div>
    </Footer>
  );
};

export default Footing;
