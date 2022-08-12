import React from "react";
import Gallery from "react-grid-gallery";
import LazyLoad from "react-lazyload";
import person1 from "../../assets/images/gallery1.webp";
import person2 from "../../assets/images/gallery2.webp";
import person3 from "../../assets/images/gallery3.webp";
import person4 from "../../assets/images/gallery4.webp";
import person5 from "../../assets/images/gallery5.webp";
import person6 from "../../assets/images/gallery6.webp";

const ImageGallery = () => {
  const IMAGES = [
    {
      src: person1,
      thumbnail: person1,
      thumbnailWidth: 140,
      thumbnailHeight: 140,
    },
    {
      src: person2,
      thumbnail: person2,
      thumbnailWidth: 140,
      thumbnailHeight: 140,
    },
    {
      src: person3,
      thumbnail: person3,
      thumbnailWidth: 140,
      thumbnailHeight: 140,
    },
    {
      src: person4,
      thumbnail: person4,
      thumbnailWidth: 140,
      thumbnailHeight: 140,
    },
    {
      src: person5,
      thumbnail: person5,
      thumbnailWidth: 140,
      thumbnailHeight: 140,
    },
    {
      src: person6,
      thumbnail: person6,
      thumbnailWidth: 140,
      thumbnailHeight: 140,
    },
  ];

  return (
    <LazyLoad>
      <Gallery rowHeight={140} margin={4} images={IMAGES} />
    </LazyLoad>
  );
};

export default ImageGallery;
