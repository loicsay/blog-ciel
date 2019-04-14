import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

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
    image
  } = post.frontmatter;

  console.log("image", image);

  return (
    <Layout>
      <div className="post">
        <h1>{title}</h1>
        <time>{`${date} in ${location} ${locationEmoji}`} </time>
        <p>{description}</p>
        <Img fluid={image.childImageSharp.fluid} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
        date(formatString: "MMMM Do, YYYY")
        description
        location
        locationEmoji
        image {
          childImageSharp {
            fluid(maxWidth: 956, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
