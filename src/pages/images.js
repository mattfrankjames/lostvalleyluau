import React from 'react';
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
        <h2>Images from Luaus Past..</h2>
      </Headline>
      <Images galleryImgs={galleryImgData} />
    </Layout>
  );
};

export const query = graphql`
  query allImgsQuery {
    GalleryImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "images/gallery/.*.jpg/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 2000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
