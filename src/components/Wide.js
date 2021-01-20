// import styled, { css } from 'styled-components'
import { Box } from '@chasemccoy/kit'
// import media from 'utils/media'

// const Wide = styled(Box)(
//   ({ left, right, theme }) => css`
//     --right-offset: calc((100% / 3) * 0.8);
//     --left-offset: calc(var(--sidebarWidth) + var(--gap));

//     width: calc(
//       100% + ${left ? `var(--left-offset)` : 0} +
//         ${right ? `var(--right-offset)` : 0}
//     );
//     margin-right: ${right ? `calc(var(--right-offset) * -1)` : 0};
//     margin-left: ${left ? `calc(var(--left-offset) * -1)` : 0};

//     ${media.large`
//       width: ${left ? `calc(100% + var(--left-offset) * 1)` : '100%;'};
//       margin-left: ${left ? `calc(var(--left-offset) * -1)` : 0};
//       margin-right: 0;
//     `}

//     ${media.medium`
//       width: 100%;
//       margin-left: 0;
//       margin-right: 0;
//     `}
//   `
// )

const Wide = Box

Wide.defaultProps = {
  left: true,
  right: true
}

export default Wide
