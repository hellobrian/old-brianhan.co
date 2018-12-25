import typography, { rem } from './typography';
import { LINKS, BREAKPOINTS } from './constants';

/**
 * Reuse with defaultProps event handlers
 *
 * defaultProps = {
 *   onClick: noop
 * }
 */
const noop = () => {};

export { noop, rem, typography, LINKS, BREAKPOINTS };
