import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import "./styles.scss";
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
        <Header siteTitle={data.site.siteMetadata.title} />
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
