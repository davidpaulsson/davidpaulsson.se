import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Header from './header';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}</footer>
    </>
  );
};

export default Layout;
