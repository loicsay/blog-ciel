import React from "react";
import Gallery from "react-photo-gallery";

import PostListItem from "./PostListItem";

const PostList = ({ formattedThumbnails }) => (
  <Gallery
    photos={formattedThumbnails}
    ImageComponent={PostListItem}
    margin={4}
  />
);

export default PostList;
