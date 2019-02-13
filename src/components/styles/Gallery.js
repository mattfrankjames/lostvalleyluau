import styled from 'styled-components';

const Gallery = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(26vh, 190px);
  max-width: 1200px;
  margin: 1em auto;
`;

export default Gallery;
