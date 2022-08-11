import React from "react";
import Gallery from "react-grid-gallery";
import person1 from "../../assets/images/gallery1.png";
import person2 from "../../assets/images/gallery2.png";
import person3 from "../../assets/images/gallery3.png";
import person4 from "../../assets/images/gallery4.png";
import person5 from "../../assets/images/gallery5.png";
import person6 from "../../assets/images/gallery6.png";

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

  return <Gallery rowHeight={140} margin={4} images={IMAGES} />;
};

export default ImageGallery;
