import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Lightbox from './Lightbox';

const GalleryImages = () => (
  <StaticQuery
    query={graphql`
      query {
        raceImages: allFile(filter: { sourceInstanceName: { eq: "cars" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Lightbox raceImages={data.raceImages.edges} />}
  />
);
export default Cars;
