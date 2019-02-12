import React, { Component } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Gallery = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(26vh, 190px);
  max-width: 1200px;
  margin: 0 auto;
`;
class Images extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { galleryImgs } = this.props;

    console.log(galleryImgs);
    return (
      <section>
        <h2>Images from Luaus Past..</h2>
        <Gallery>
          {galleryImgs.map(galleryImg => (
            <Img key={galleryImg.node.childImageSharp.src} sizes={galleryImg.node.childImageSharp.sizes} />
          ))}
        </Gallery>
      </section>
    );
  }
}

export default Images;

// {projectList.map(project => {

//   const image = projectImgs.find(n => {
//     return n.node.relativePath ===
//            `projects/${project.img}`;
//   });
//   const imageSizes = image.node.childImageSharp.sizes;
//   return (

//         <Img
//           title={project.name}
//           alt="Screenshot of Project"
//           sizes={imageSizes}
//           className="card-img_src center-block"
//         />)
// })}
