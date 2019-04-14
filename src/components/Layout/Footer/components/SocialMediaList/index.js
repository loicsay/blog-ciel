import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

import {
  InstagramLogo,
  GitHubLogo,
  LinkedInLogo,
  FlickrLogo
} from "../../../../../images/logos";

const SocialMediaList = ({
  name,
  instagramLink,
  flickrLink,
  linkedinLink,
  githubLink
}) => (
  <div className="infos">
    {name}
    <div className="separator" />
    <div className="list-container">
      <div className="list-item">
        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
          <InstagramLogo className="logo" width="15px" />
          <span className="label">Instagram</span>
        </a>
      </div>
      <div className="list-item">
        <a href={flickrLink} target="_blank" rel="noopener noreferrer">
          <FlickrLogo className="logo" width="15px" />
          <span className="label">Flickr</span>
        </a>
      </div>
      <div className="list-item">
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <LinkedInLogo className="logo" width="15px" />
          <span className="label">LinkedIn</span>
        </a>
      </div>
      <div className="list-item">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <GitHubLogo className="logo" width="15px" />
          <span className="label">GitHub</span>
        </a>
      </div>
    </div>
  </div>
);

SocialMediaList.propTypes = {
  name: PropTypes.string,
  instagramLink: PropTypes.string,
  flickrLink: PropTypes.string,
  linkedinLink: PropTypes.string,
  githubLink: PropTypes.string
};

export default SocialMediaList;
