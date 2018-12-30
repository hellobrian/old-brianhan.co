import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const Facebook = ({
  pageUrl = null,
  type = null,
  title = null,
  description = null,
  image = null,
  appID = null,
}) => (
  <Helmet>
    {pageUrl && <meta property="og:url" content={pageUrl} />}
    {type && <meta property="og:type" content={type} />}
    {title && <meta property="og:title" content={title} />}
    {description && <meta property="og:description" content={description} />}
    {image && <meta property="og:image" content={image} />}
    {appID && <meta property="fb:app_id" content={appID} />}
  </Helmet>
);

Facebook.propTypes = {
  pageUrl: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  appID: PropTypes.string,
};

export default Facebook;
