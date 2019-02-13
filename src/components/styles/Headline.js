import styled from 'styled-components';

const Headline = styled.span`
  background: #3b3331;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  transform: skew(-10deg, 0deg) rotate(-5deg);
  margin: 4rem 1rem 1rem;

  h2 {
    transform: skew(10deg, 0deg) rotate(5deg);
    margin: 0;
    font-weight: 600;
  }
`;

export default Headline;
