import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import PostList from "../components/PostList";

const IndexPage = props => {
  const postList = props.data.allMarkdownRemark;
  const formattedThumbnails = postList.edges.map(({ node }, index) => ({
    src: node.frontmatter.image.childImageSharp.fluid.src,
    width: node.frontmatter.image.childImageSharp.fluid.aspectRatio,
    height: 1,
    date: node.frontmatter.date,
    title: node.frontmatter.title,
    description: node.frontmatter.description,
    location: node.frontmatter.location,
    locationEmoji: node.frontmatter.locationEmoji,
    key: index,
    slug: node.fields.slug
  }));

  return (
    <Layout>
      <PostList formattedThumbnails={formattedThumbnails} />
    </Layout>
  );
};

export default IndexPage;

export const listQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date(formatString: "MMMM Do YYYY")
            description
            location
            locationEmoji
            image {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
