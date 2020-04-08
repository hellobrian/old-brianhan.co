import React from 'react';
import { Link } from 'gatsby';
import { SvgCircle } from '../SvgCircle/SvgCircle';
import { rhythm, scale } from '../../utils/typography';

// css
import './_colors.css';
import './_reset.css';
import './_util-classes.css';
import './_prism-theme.css';
import './_docz-overrides.css';
import './Layout.css';

// fonts
import 'typeface-karla';
import 'typeface-merriweather';

export const Layout = ({ location, title, children }) => {
  return (
    <>
      <SvgCircle className="Layout__SvgCircle" />
      <div
        className="Layout__Wrapper"
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          height: '200vh',
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
    </>
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
