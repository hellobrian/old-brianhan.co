import React from 'react';
import SEO from 'src/components/SEO';
import CircleSvg from 'src/components/CircleSvg';
import BackToTopButton from 'src/components/BackToTopButton';

import './index.css';

export default ({ children }) => (
  <>
    <SEO />
    <div>
      <span
        css={`
          position: absolute;
          top: -1rem;
          left: -1rem;
        `}>
        <CircleSvg />
      </span>
      <div
        css={`
          position: relative;
          z-index: 1;
          padding-bottom: 3rem;
          padding-top: 3rem;
        `}>
        {children}
      </div>
      <BackToTopButton />
    </div>
  </>
);
