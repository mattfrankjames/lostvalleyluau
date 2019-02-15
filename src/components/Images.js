import React, { Component } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import Gallery from './styles/Gallery';

const PreviewButton = styled.button`
  background: transparent;
  border: none;
  overflow: hidden;
  cursor: pointer;
  div {
    height: 100%;
  }
  /* padding: 0;
  margin: 0; */
`;
const CloseButton = styled.button`
  font-size: 1rem;
  color: #00698c;
  cursor: pointer;
  border: 1px solid;
  background: none;
  padding: 0.25rem 0.5rem;
  margin-bottom: 0.25rem;
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
              <Img sizes={galleryImg.node.childImageSharp.sizes} alt=""/>
            </PreviewButton>
          ))}
        </Gallery>
        <em>Photos by Marcus Janzow</em>

        {showLightbox && (
          <Dialog>
            <CloseButton type="button" onClick={() => this.setState({ showLightbox: false })}>
              &times; Close
            </CloseButton>
            <Img sizes={selectedImage.node.childImageSharp.sizes} />
          </Dialog>
        )}
      </section>
    );
  }
}

export default Images;
