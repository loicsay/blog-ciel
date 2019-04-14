import React from "react";
import Gallery from "react-photo-gallery";

import PostListItem from "./components/PostListItem";
import "./styles.scss";

const PostList = ({ formattedThumbnails }) => (
  <Gallery
    photos={formattedThumbnails}
    ImageComponent={PostListItem}
    margin={4}
  />
);

export default PostList;
