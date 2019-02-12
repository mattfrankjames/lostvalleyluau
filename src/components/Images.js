import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

const Gallery = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(26vh, 190px);
  max-width: 1200px;
  margin: 0 auto;
`;

const PreviewButton = styled.button`
  background: transparent;
  border: none;
  overflow: hidden;
  div {
    height: 100%;
  }
  /* padding: 0;
  margin: 0; */
`;
class Images extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLightbox: false,
      selectedImage: null
    };
  }

  render() {
    const { galleryImgs } = this.props;
    const { showLightbox, selectedImage } = this.state;
    return (
      <section>
        <h2>Images from Luaus Past..</h2>
        <Gallery>
          {galleryImgs.map(galleryImg => (
            <PreviewButton
              key={galleryImg.node.childImageSharp.fluid.src}
              type="button"
              onClick={() => this.setState({ showLightbox: true, selectedImage: galleryImg })}
            >
              <Img fluid={galleryImg.node.childImageSharp.fluid} />
            </PreviewButton>
          ))}
        </Gallery>
        <button type="button" onClick={() => this.setState({ showLightbox: true })}>
          Show Dialog
        </button>
        {showLightbox && (
          <Dialog>
            <Img fluid={selectedImage.node.childImageSharp.fluid} />
            <button type="button" onClick={() => this.setState({ showLightbox: false })}>
              Close
            </button>
          </Dialog>
        )}
      </section>
    );
  }
}

export default Images;
