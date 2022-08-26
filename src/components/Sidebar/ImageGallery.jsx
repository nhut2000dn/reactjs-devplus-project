import React from "react";
import Gallery from "react-grid-gallery";
import LazyLoad from "react-lazyload";
import { useState, useEffect } from "react";

const ImageGallery = (props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const arrayImgs = props.urlImages.map((url) => {
      return {
        src: url,
        thumbnail: url,
        thumbnailWidth: 140,
        thumbnailHeight: 140,
      };
    });
    setImages(arrayImgs);
  }, [props]);

  return (
    <LazyLoad>
      {images && <Gallery rowHeight={140} margin={4} images={images} />}
    </LazyLoad>
  );
};

export default ImageGallery;
