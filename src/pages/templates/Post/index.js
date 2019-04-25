import React from "react";
import { graphql } from "gatsby";

import "./styles.scss";
import Layout from "../../../components/Layout";

const Post = props => {
  const post = props.data.markdownRemark;
  const {
    title,
    description,
    date,
    location,
    locationEmoji,
  } = post.frontmatter;

  return (
    <Layout>
      <div className="post">
        <h1>{title}</h1>
        <time>{`${date} | ${location} ${locationEmoji}`} </time>
        <p>{description}</p>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  );
};

export default Post;

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM Do YYYY")
        description
        location
        locationEmoji
      }
    }
  }
`;
