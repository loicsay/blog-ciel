import React, { useState } from "react";
import { Link } from "gatsby";

const soloItemWidth = 500;
// minimum window width before having a single item per row on the gallery

const GalleryItem = ({ margin, photo }) => {
  const [hover, setHover] = useState(false);

  const galleryItemStyle =
    window.innerWidth >= soloItemWidth
      ? {
          margin: margin
        }
      : {
          marginLeft: margin,
          marginRight: margin,
          marginBottom: margin
        };

  const handleOnMouseEnter = () => {
    setHover(true);
  };

  const handleOnMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      className="post-list-item"
      style={galleryItemStyle}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <Link to={photo.slug} draggable="false">
        <img
          className={`thumbnail${hover ? " hover" : ""}`}
          src={photo.src}
          alt="thumbnail"
          width={photo.width}
          height={photo.height}
        />
        <div className={`preview-container${hover ? " hover" : ""}`}>
          <div className="title">{photo.title}</div>
          <div className="date">{photo.date}</div>
          <div className="description">{photo.description}</div>
        </div>
        <div className="location-container">
          <span>{photo.locationEmoji}</span>
          <span className={`location${hover ? " hover" : ""}`}>
            {photo.location}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default GalleryItem;
