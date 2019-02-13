import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/index';
import Headline from '../components/styles/Headline';
import Table from '../components/styles/Table';
import Img from 'gatsby-image';
import bg from '../images/LostValleyCorner.jpg';

const Inner = styled.section`
  p {
    width: 95%;
    max-width: 40rem;
    margin: 0 auto 1rem;
    &:last-of-type {
      margin-bottom: 2rem;
    }
  }
`;
const Mapwrap = styled.section`
  background: aquamarine;
  padding: 1rem 5rem 5rem;
  position: relative;
  transform: skewY(-5deg);
`;

const MapwrapInner = styled.div`
  transform: skewY(5deg);
  div {
    width: 95%;
    max-width: 600px;
    margin: auto;
  }
`;
const InnerBG = styled(Inner)`
  background: url(${bg});
  background-size: cover;
  padding: 5rem 0 2rem;
  margin-top: -5rem;
  position: relative;
  z-index: -10;
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -5;
  }
`;
const Columns = styled.section`
  > div {
    width: 95%;
    max-width: 860px;
    margin: 1em auto;
    @media (min-width: 600px) {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  h3 {
    font-weight: normal;
    font-style: italic;
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 1rem;
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
        <a
          href="https://gorctrails.com/sites/default/files/media/Media%20Root/lost_valley_1.pdf"
          type="application/pdf; length=614380"
        >
          Download Map
        </a>
      </MapwrapInner>
    </Mapwrap>
    <InnerBG>
      <Headline>
        <h2>Start Times and Entry</h2>
      </Headline>
      <Table className="responsive-table">
        <thead>
          <tr>
            <th scope="col">Class</th>
            <th scope="col">Start Time</th>
            <th scope="col">Prizes</th>
            <th scope="col">Entry Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Junior</th>
            <td data-title="Start Time">9:30am</td>
            <td data-title="Prizes">Prizes</td>
            <td data-title="Entry Fee">$10</td>
          </tr>
          <tr>
            <th scope="row">eBike Open</th>
            <td data-title="Start Time">9:40am</td>
            <td data-title="Prizes">Prizes</td>
            <td data-title="Entry Fee">$30</td>
          </tr>
          <tr>
            <th scope="row">Category 3</th>
            <td data-title="Start Time">9:45am</td>
            <td data-title="Prizes">Prizes</td>
            <td data-title="Entry Fee">$30</td>
          </tr>
          <tr>
            <th scope="row">Category 2</th>
            <td data-title="Start Time">11am</td>
            <td data-title="Prizes">Prizes</td>
            <td data-title="Entry Fee">$30</td>
          </tr>
          <tr>
            <th scope="row">Category 1</th>
            <td data-title="Start Time">11am</td>
            <td data-title="Prizes">Cash</td>
            <td data-title="Entry Fee">$35</td>
          </tr>
          <tr>
            <th scope="row">Endurance</th>
            <td data-title="Start Time">9:30</td>
            <td data-title="Prizes">Cash</td>
            <td data-title="Entry Fee">$35</td>
          </tr>
        </tbody>
      </Table>
    </InnerBG>
    <Columns>
      <Headline>
        <h2>The Goods</h2>
      </Headline>
      <div>
        <div className="card">
          <Img fluid={data.imageTwo.childImageSharp.fluid} />
          <h3>Prize List for Overall</h3>
          <ul>
            <li>Cat 1 - Cash to top 3</li>
            <li>Cat 2 - Prizes to top 3</li>
            <li>Cat 3, Juniors - Prizes to top 3</li>
            <li>Marathon - Cash to top 3</li>
            <li>eBike - Prizes to top 3</li>
          </ul>
        </div>
        <div className="card">
          <Img fluid={data.imageThree.childImageSharp.fluid} />
          <h3>The Rules</h3>
          <p>
            Events are subject to weather. Annual USAC License required for Cat 1 and Pro only, optional for cat 2 and
            3. Helmets must be worn at all times while on a bike at USAC events. Promoter reserves the right to cancel /
            combine events and alter prize lists as necessary. Promoter reserves the right to adjust start times and
            mileage.
          </p>
          <p>
            Have Fun. This isn’t the World Championships. You’re outside, enjoy it. Help each other. Look out for each
            other. Enjoy life. Get dirty. No whining. No explanation needed.
          </p>
        </div>
      </div>
    </Columns>
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
    imageTwo: file(relativePath: { eq: "gallery/51626396_618039795322140_823983007516852224_n.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "gallery/51754563_977468915784592_5158553217700724736_n.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
