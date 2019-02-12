import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import img from '../images/gallery/51760952_530918350736088_688081978754334720_n.jpg';

const Header = styled.header`
  background: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -4rem;
  padding-top: 6rem;
  position: relative;
  min-height: 49vmin;
  transform: skewY(-5deg);
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
  }
`;
const HeaderWrap = styled.div`
  transform: skewY(5deg);
`;
const Nav = styled.nav`
  background: pink;
  border-radius: 3px;
  box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.9);
  width: 80vw;
  max-width: 1080px;
  padding: 0 1.5rem;
  margin: auto;
  display: flex;
  a {
    color: #666666;
    font-weight: 600;
    padding: 0.5rem 1rem;
    text-decoration: none;
    font-size: 1rem;
    &:hover {
      color: white;
      background: brown;
      border-radius: 4px;
    }
  }
  span {
    display: inline-block;
    margin-left: auto;
    background: #545454;
    transform: skewX(-5deg);
    a {
      color: aquamarine;
      display: block;
      text-shadow: -2px 2px 0 rgba(0, 0, 0, 0.9);
      transform: skewX(5deg);
      &:hover {
        color: white;
        background: initial;
        border-radius: initial;
      }
    }
  }
`;
const Headline = styled.h1`
  color: aquamarine;
  font-size: 6rem;
  margin: 0 auto 2rem;
  text-align: center;
  text-shadow: -4px 4px 0 rgba(0, 0, 0, 0.8);
  width: 80vw;
  max-width: 1080px;
`;
const Subhead = styled.span`
  display: block;
  font-size: 2rem;
  font-style: italic;
  font-weight: normal;
  text-align: right;
`;
const Heading = () => {
  return (
    <Header>
      <HeaderWrap>
        <Headline>
          Lost Valley Luau<Subhead>Sunday, March 31 - 2019</Subhead>
        </Headline>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/images">Images</Link>
          <Link to="/videos">Videos</Link>
          <span>
            <a
              className="standalone"
              target="_blank"
              rel="noopener noreferrer"
              href="https://legacy.usacycling.org/register/2019-309"
            >
              Register
            </a>
          </span>
        </Nav>
      </HeaderWrap>
      {/* <svg className="header__clip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="white" points="0,100 100,0 100,100" />
      </svg> */}
    </Header>
  );
};

export default Heading;
