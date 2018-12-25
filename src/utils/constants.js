export const LINKS = {
  carbon: `http://www.carbondesignsystem.com/`,
  github: `https://github.com/hellobrian`,
  linkedin: `https://www.linkedin.com/in/hellobrian`,
  blog: `https://medium.com/@brianhan`,
  email: `mailto:thisisbrianhan@gmail.com`,
  indeed: `https://www.indeed.com/`,
};

export const BREAKPOINTS = {
  minWidth600: `
    @media screen and (min-width: 600px) {
      margin-left: auto;
      margin-right: auto;
      width: 500px;
    }
  `,
  minWidth800: `
    @media screen and (min-width: 800px) {
      width: 600px;
    }
  `,
  minWidth1200: `
    @media screen and (min-width: 1200px) {
      width: 700px;
    }
  `,
};

export const COMMON_BREAKPOINTS = `
  ${BREAKPOINTS.minWidth600};
  ${BREAKPOINTS.minWidth800};
  ${BREAKPOINTS.minWidth1200};
`;
