import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/index';
import Headline from '../components/styles/Headline';
import Img from 'gatsby-image';

const Inner = styled.section`
  max-width: 40rem;
  margin: 0 auto 9rem;
`;
const Mapwrap = styled.section`
  background: aquamarine;
  padding: 5rem;
  position: relative;
  transform: skewY(-5deg);
`;

const MapwrapInner = styled.div`
  transform: skewY(5deg);
  div {
    max-width: 500px;
    margin: auto;
  }
`;
export default ({ data }) => (
  <Layout>
    <Headline>
      <h2>The Dirt</h2>
    </Headline>
    <Inner>
      <p>
        A 10.5 mile loop with a mixture of flowing singletrack and doubletrack punctuated with rock formations and
        natural springs hosts the 10th annual Lost Valley Luau. While the gravel/ doubletrack sections are fairly flat,
        the singletrack sections serve up flowing, serpentine goodness with high speed descents and stunning views of
        the valley.{' '}
      </p>
      <p>
        Trail surface varies from dirt to rock throughout the trail, and drains very well, except in the flats of the
        lower creek bottom.
      </p>
      <p>From the Highway 40/94 interchange: Take Highway 94 South approximately 1 mile on Right at the Mound.</p>
    </Inner>
    <Mapwrap>
      <MapwrapInner>
        <Headline>
          <h2>The Course</h2>
        </Headline>
        <Img fluid={data.imageOne.childImageSharp.fluid} />
      </MapwrapInner>
    </Mapwrap>
  </Layout>
);

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "lost_valley_1-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
