import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import img from '../images/gallery/51760952_530918350736088_688081978754334720_n.jpg';
import Headline from './styles/Headline';

const Sponsors = styled.div`
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem; */

  width: 95%;
  max-width: 900px;
  margin: 0 auto;
  .gatsby-image-wrapper {
    width: 200px;
    display: inline-block;
    margin: 1rem 1rem 1rem 0;
    vertical-align: middle;
    img {
      object-fit: contain;
    }
  }
`;

const Footer = styled.footer`
  position: relative;
  background: url(${img});
  &::before {
    content: '';
    background: rgba(255, 255, 255, 0.2);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
  }
  span {
    margin-top: 1.5rem;
  }
`;

export default () => (
  <StaticQuery
    query={graphql`
      query {
        imageOne: file(relativePath: { eq: "sponsor-logos/thehub.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageTwo: file(relativePath: { eq: "sponsor-logos/sbr.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageThree: file(relativePath: { eq: "sponsor-logos/quantum.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageFour: file(relativePath: { eq: "sponsor-logos/stl-biking-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Footer>
        <div className="footer--top">
          <Headline>
            <h2>Presented by:</h2>
          </Headline>
          <Sponsors>
            <Img fluid={data.imageTwo.childImageSharp.fluid} />
            <Img fluid={data.imageThree.childImageSharp.fluid} />
            <Img fluid={data.imageOne.childImageSharp.fluid} />
            <Img fluid={data.imageFour.childImageSharp.fluid} />
          </Sponsors>
        </div>
        <div className="footer__bottom">
          <a
            aria-label="link to facebook page"
            target="_blank"
            rel="noopener noreferrer"
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
    )}
  />
);
