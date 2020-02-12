import React from 'react';
import { Link } from 'gatsby';
import { rhythm, scale } from '../utils/typography';
import './layout.css';
import './prism-theme.css';
import 'typeface-karla';
import 'typeface-merriweather';

const Layout = ({ location, title, children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}>
      <Layout.Header pathname={location.pathname}>
        <Link to={`/`}>{title}</Link>
      </Layout.Header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

const Header = ({ pathname, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;

  return (
    <header>
      {pathname === rootPath ? (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
          }}>
          {children}
        </h1>
      ) : (
        <h3>{children}</h3>
      )}
    </header>
  );
};

Layout.Header = Header;

export default Layout;
