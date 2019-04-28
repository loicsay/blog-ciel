import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import "./styles.scss";
import SEO from "../SEO";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO
          title={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
        />
        <Header />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: "1366px"
          }}
        >
          <main>{children}</main>
        </div>
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
