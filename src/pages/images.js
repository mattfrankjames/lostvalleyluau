import React from 'react';
import Link from 'gatsby-link';
import Layout from '../layouts/index';
import Images from '../components/Images';
import Headline from '../components/styles/Headline';

import { graphql } from 'gatsby';

export default ({ data }) => {
  //console.log(data.GalleryImgs);
  const { edges: galleryImgData } = data.GalleryImgs;
  //console.log(GalleryImgData);
  return (
    <Layout>
      <Headline>
        <h2>Image Gallery</h2>
      </Headline>
      <Images galleryImgs={galleryImgData} />
      <Link to="/">Home</Link>
    </Layout>
  );
};

export const query = graphql`
  query allImgsQuery {
    GalleryImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "gallery/.*.jpg/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
