import React from 'react';
import SEO from 'src/components/SEO';
import CircleSvg from 'src/components/CircleSvg';
import './index.css';

export default ({ children }) => (
  <>
    <SEO />
    <div>
      <CircleSvg />
      <div
        css={`
          position: relative;
          z-index: 1;
          padding-bottom: 3rem;
          padding-top: 3rem;
        `}>
        {children}
      </div>
    </div>
  </>
);
