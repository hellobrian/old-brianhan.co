import React from 'react';
import { SvgCircle, FancyLink } from '../index';
import { rhythm, scale } from '../../utils/typography';

// css
import './_variables.css';
import './_util-classes.css';
import './_reset.css';
import './_prism-theme.css';
import './_docz-overrides.css';
import './Layout.css';

// fonts
import 'typeface-karla';
import 'typeface-merriweather';

export const Layout = ({ location, title, children }) => {
  return (
    <>
      <SvgCircle className="SvgCircle" />
      <div className="Layout">
        <div
          className="Layout__Wrapper"
          style={{
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}>
          <Layout.Header pathname={location.pathname} title={title} />
          <main>{children}</main>
          <footer>© {new Date().getFullYear()} Brian Han</footer>
        </div>
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
          className="Layout__Header__Title"
          style={{
            paddingTop: rhythm(1.5),
            paddingLeft: rhythm(1),
            paddingRight: rhythm(1),
            paddingBottom: rhythm(1 / 2),
          }}>
          <details>
            <summary>{title}</summary>
            <ul
              style={{
                ...scale(0.5),
                margin: 0,
                marginLeft: '24px',
                padding: rhythm(1),
                listStyleType: 'none',
                display: 'grid',
                gridGap: '8px',
              }}>
              <li>
                <span aria-label="job" role="img">
                  ⚛️
                </span>{' '}
                <span id="job-description">UX developer</span>
              </li>
              <li>
                <span aria-label="birthplace" role="img">
                  🇨🇦
                </span>{' '}
                Born in Toronto
              </li>
              <li>
                <span aria-label="residence" role="img">
                  🌮
                </span>{' '}
                Living and working in Austin
              </li>
              <li>
                <span aria-label="what is this blog for?" role="img">
                  🤔
                </span>{' '}
                This is where I write tutorials for myself and gush about stuff
                that I love
              </li>
              <li>
                <span aria-label="Brian loves you very much" role="img">
                  ♥️
                </span>{' '}
                Thanks for stopping by!
              </li>
            </ul>
          </details>
        </h1>
      ) : (
        <h3>
          <FancyLink to="/">{title}</FancyLink>
        </h3>
      )}
    </header>
  );
};

Layout.Header = Header;

export default Layout;
