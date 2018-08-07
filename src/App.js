import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import PhotoItem from './photoItem';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.png';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7];

const StyledPhotoItem = styled(PhotoItem)`
  transform: rotateY(${props => props.deg}deg) translateZ(440px);
  transition: 1s ${props => props.delay}s;
  height: 600px;
  width: 400px;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    const photos = images.map(image => ({
      source: image,
    }));
    this.setState({ photos });
  }

  render() {
    const { photos } = this.state;
    const avgDeg = photos.length > 0 ? 360 / photos.length : 1;
    return (
      <div className="container">
        <div className="images">
          {photos.map((photo, index) => (
            <StyledPhotoItem
              deg={avgDeg * index}
              key={photo.source}
              photo={photo}
              delay={0.3 * (photos.length - 1 - index)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
