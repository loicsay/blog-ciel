import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const Post = props => {
  const post = props.data.markdownRemark;
  const { title, date, image } = post.frontmatter;

  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <div>{date}</div>
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
        date(formatString: "MMMM Do YYYY")
        description
        image {
          childImageSharp {
            fluid(maxWidth: 1366) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
