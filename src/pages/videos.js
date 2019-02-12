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
`;

const Videos = () => {
  return (
    <Layout>
      <Headline>
        <h2>Videos from Luaus Past...</h2>
      </Headline>
      <Gallery>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0QM3YGECRUI"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jWk0t-lgjFw"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/MvjWvNIaUi0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/U1zoPvyU0nI"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vZYkyfBY26o"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_31YzxBxUP4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </Gallery>
    </Layout>
  );
};

export default Videos;
