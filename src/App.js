import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery-no-icon.scss";

class App extends Component {
  state = {
    autoPlay: false, 
    images: [
      {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
        description: 'example text'
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
        description: 'example text 2'
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
        description: 'example text 3'
      },
    ]
  }

  onMouseOver = () => {
    this._imageGallery.play();
  }

  

  onMouseOut = () => {
    this._imageGallery.pause();
    this._imageGallery.slideToIndex(0);
  }

  render() {
  return (
    <div className="App" >
    <div 
    onMouseEnter={this.onMouseOver}
                    onMouseLeave={this.onMouseOut}
    >
      <ImageGallery autoPlay={this.state.autoPlay} items={this.state.images} 
        showPlayButton={true}
        ref={i => this._imageGallery = i}
        showIndex={true}
        slideDuration={300}
        slideInterval={2000}
      />
      </div>
    </div>
  );
  }
}

export default App;
