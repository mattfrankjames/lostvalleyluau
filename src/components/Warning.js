import React from 'react';
import styled from 'styled-components';

export default function AlertBanner() {
  return (
    <Warning>
      <span>The Lost Valley Luau has been cancelled due to concerns of COVID-19.</span>
    </Warning>
  );
}

const Warning = styled.div`
  color: white;
  background: red;
  padding: 1rem 0;
  position: relative;
  z-index: 10;
  text-align: center;
  span {
    display: block;
    width: 95vw;
    max-width: 860px;
    margin: 0 auto;
  }
`;
