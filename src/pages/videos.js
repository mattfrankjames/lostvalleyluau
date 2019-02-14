import React from 'react';
import Layout from '../layouts/index';
import Headline from '../components/styles/Headline';
import styled from 'styled-components';

const Gallery = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  /* grid-auto-rows: minmax(26vh, 190px); */
  max-width: 1200px;
  margin: 1em auto;
  iframe {
    margin: auto;
  }
`;

const Videos = () => {
  return (
    <Layout>
      <Headline>
        <h2>Videos</h2>
      </Headline>
      <Gallery>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0QM3YGECRUI"
          title="Lost Valley Luau video 1"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jWk0t-lgjFw"
          title="Lost Valley Luau video 2"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/MvjWvNIaUi0"
          title="Lost Valley Luau video 3"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/U1zoPvyU0nI"
          title="Lost Valley Luau video 4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vZYkyfBY26o"
          title="Lost Valley Luau video 5"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_31YzxBxUP4"
          title="Lost Valley Luau video 6"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </Gallery>
    </Layout>
  );
};

export default Videos;
