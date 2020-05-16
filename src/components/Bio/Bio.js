/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { rhythm } from '../../utils/typography';
import './Bio.css';

export const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 57, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <div
      data-testid="Bio"
      className="Bio"
      style={{
        marginBottom: rhythm(1),
      }}>
      <Image
        className="Bio__Image"
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        <strong>{author}</strong> is a UX developer living and working in
        Austin, Texas. He's quite bad at{' '}
        <a
          className="normal-link"
          href={`https://twitter.com/${social.twitter}`}>
          Twitter.
        </a>
        , but you should follow him anyways.
      </p>
    </div>
  );
};

export default Bio;
