import React from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring';
import debounce from 'lodash.debounce';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  position: fixed;
  right: 2rem;
  bottom: 1rem;
  z-index: 1;
  appearance: none;
  border: none;
  background: none;
  padding: 0;
`;

class BackToTopButton extends React.PureComponent {
  state = {
    windowPosition: null,
    downScrollTriggered: false,
    isBottom: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    let windowPosition = window.pageYOffset;
    this.setState({ windowPosition });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = debounce(() => {
    let previousPosition = this.state.windowPosition;
    let currentPosition = window.pageYOffset;
    let isBottomNow =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;

    if (previousPosition > currentPosition && !isBottomNow) {
      this.setState({ downScrollTriggered: false });
    } else {
      this.setState({ downScrollTriggered: true });
    }
    this.setState({ windowPosition: currentPosition, isBottom: isBottomNow });
  }, 120);

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

export default BackToTopButton;
