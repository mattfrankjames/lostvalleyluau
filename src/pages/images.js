import React from 'react';
import Link from 'gatsby-link';
import Layout from '../layouts/index';
import Images from '../components/Images';
import { graphql } from 'gatsby';

export default ({ data }) => {
  //console.log(data.GalleryImgs);
  const { edges: galleryImgData } = data.GalleryImgs;
  //console.log(GalleryImgData);
  return (
    <Layout>
      <h1>Image Gallery</h1>
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
            sizes(maxWidth: 500) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
