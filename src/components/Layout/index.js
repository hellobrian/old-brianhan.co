import React from 'react';
import PropTypes from 'prop-types';
import SEO from 'src/components/SEO';
import CircleSvg from 'src/components/CircleSvg';

import './index.css';

const Index = ({ children }) => (
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
    </div>
  </>
);

Index.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Index;
