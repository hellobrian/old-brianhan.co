import React from 'react';
import { Link } from 'gatsby';
import { rhythm, scale } from '../../utils/typography';

// css
import './Layout.css';
import './_prism-theme.css';
import './_docz-overrides.css';

// fonts
import 'typeface-karla';
import 'typeface-merriweather';

export const Layout = ({ location, title, children }) => {
  return (
    <div
      className="layout"
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}>
      <Layout.Header pathname={location.pathname} title={title} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a className="normal-link" href="https://www.gatsbyjs.org">
          Gatsby
        </a>
      </footer>
    </div>
  );
};

const Header = ({ pathname, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`;

  return (
    <header>
      {pathname === rootPath ? (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
          }}>
          {title}
        </h1>
      ) : (
        <h3>
          <Link to={`/`} className="current-color">
            {title}
          </Link>
        </h3>
      )}
    </header>
  );
};

Layout.Header = Header;

export default Layout;
