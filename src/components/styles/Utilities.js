import { css } from 'styled-components'

const spaces = [0, 1, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48]
const spaceProperties = { m: 'margin', p: 'padding' }

const marginAndPadding = Object.keys(spaceProperties)
  .map((p) => {
    const n = spaceProperties[p]

    return spaces
      .map(
        (space) => `
    .${p}-${space} {
      ${n}: ${space}px !important;
    }

    .${p}x-${space} {
      ${n}-right: ${space}px !important;
      ${n}-left: ${space}px !important;
    }

    .${p}y-${space} {
      ${n}-top: ${space}px !important;
      ${n}-bottom: ${space}px !important;
    }

    .${p}t-${space} {
      ${n}-top: ${space}px !important;
    }

    .${p}r-${space} {
      ${n}-right: ${space}px !important;
    }

    .${p}b-${space} {
      ${n}-bottom: ${space}px !important;
    }

    .${p}l-${space} {
      ${n}-left: ${space}px !important;
    }
  `
      )
      .join('')
  })
  .join('')

const utilities = css`
  ${marginAndPadding}

  .smaller {
    font-size: smaller;
  }

  .larger {
    font-size: larger;
  }

  .bold {
    font-weight: bold;
  }

  .sans {
    font-family: var(--font-body);
  }

  .serif {
    font-family: var(--font-header);
  }

  .hyphens {
    hyphens: auto;
  }
`

export default utilities
