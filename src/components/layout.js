import React from 'react';
import { Link } from 'gatsby';
import { rhythm, scale } from '../utils/typography';
import './layout.css';
import './prism-theme.css';
import 'typeface-karla';
import 'typeface-merriweather';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
        }}>
        <Link to={`/`}>{title}</Link>
      </h1>
    );
  } else {
    header = (
      <h3>
        <Link to={`/`}>{title}</Link>
      </h3>
    );
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
