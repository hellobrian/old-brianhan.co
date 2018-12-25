import styled from 'styled-components';
import { Link } from 'gatsby';

export const styles = `
  display: inline-block;
  text-decoration: none;
  color: currentColor;
`;

export const Span = styled.span`
  background-repeat: no-repeat;
  background-image: var(--gradient--link);
  background-size: 100% 3px;
  background-position: 0 100%;
  padding-bottom: 2px;
`;

export const StyledGatsbyLink = styled(Link)`
  ${styles}
`;

export const ExternalLink = styled.a`
  ${styles}
`;
