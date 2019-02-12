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
  margin: 1em auto;
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
      selectedImage: 0
    };
  }
  componentDidMount = () => {
    window.addEventListener('keyup', this.handleKeyUp, false);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keyup', this.handleKeyUp, false);
  };

  handleClick = (e, index) => {
    e.preventDefault();
    this.setState({ showLightbox: !this.state.showLightbox, selectedImage: index });
  };

  closeModal = () => {
    this.setState({ showLightbox: false });
  };

  goBack = () => {
    this.setState({ selectedImage: this.state.selectedImage - 1 });
  };

  goForward = () => {
    this.setState({ selectedImage: this.state.selectedImage + 1 });
  };

  handleKeyUp = e => {
    e.preventDefault();
    const { keyCode } = e;
    if (this.state.showLightbox) {
      if (keyCode === 37) {
        // Left Arrow Key
        if (this.state.selectedImage > 0) {
          this.setState({ selectedImage: this.state.selectedImage - 1 });
        }
      }
      if (keyCode === 39) {
        // Right Arrow Key
        if (this.state.selectedImage < this.props.images.length - 1) {
          this.setState({ selectedImage: this.state.selectedImage + 1 });
        }
      }
      if (keyCode === 27) {
        // Escape key
        this.setState({ showLightbox: false });
      }
    }
  };

  render() {
    const { galleryImgs } = this.props;
    const { showLightbox, selectedImage } = this.state;
    return (
      <section>
        <Gallery>
          {galleryImgs.map((galleryImg, i) => (
            <PreviewButton
              key={galleryImg.node.childImageSharp.sizes.src}
              type="button"
              onClick={() => this.setState({ showLightbox: true, selectedImage: galleryImg })}
            >
              <Img sizes={galleryImg.node.childImageSharp.sizes} />
            </PreviewButton>
          ))}
        </Gallery>

        {showLightbox && (
          <Dialog>
            <Img sizes={selectedImage.node.childImageSharp.sizes} />
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
