import React from 'react';
import SEO from 'src/components/SEO';
import CircleSvg from 'src/components/CircleSvg';
import styled, { keyframes } from 'styled-components';
import { Spring } from 'react-spring';
import './index.css';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  position: sticky;
  left: 100vw;
  margin-right: 1rem;
  bottom: 0;
  z-index: 1;
  appearance: none;
  border: none;
  background: none;
  padding: 0;
`;

class BackToTopButton extends React.Component {
  state = {
    windowPosition: null,
    downScrollTriggered: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    let windowPosition = window.pageYOffset;
    this.setState({ windowPosition });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    let previousPosition = this.state.windowPosition;
    let currentPosition = window.pageYOffset;

    if (previousPosition > currentPosition) {
      this.setState({ downScrollTriggered: false });
    } else {
      this.setState({ downScrollTriggered: true });
    }

    this.setState({ windowPosition: currentPosition });
  };

  scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  render() {
    return (
      <Spring
        from={{ transform: 'translateY(100px)' }}
        to={{
          transform: this.state.downScrollTriggered
            ? 'translateY(0px)'
            : 'translateY(100px)',
        }}>
        {(props) => (
          <StyledButton style={props} onClick={this.scrollToTop}>
            <span
              css={`
                font-size: 200%;
              `}
              role="img"
              aria-label="scroll to top">
              ☝️
            </span>
          </StyledButton>
        )}
      </Spring>
    );
  }
}

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
