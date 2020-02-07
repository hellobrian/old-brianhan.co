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
      <Layout.Header location={location} title={title} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

const Header = ({ location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const homeLink = <Link to={`/`}>{title}</Link>;

  return (
    <header>
      {location.pathname === rootPath ? (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
          }}>
          {homeLink}
        </h1>
      ) : (
        <h3>{homeLink}</h3>
      )}
    </header>
  );
};

Layout.Header = Header;

export default Layout;
