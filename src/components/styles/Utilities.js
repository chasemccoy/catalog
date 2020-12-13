import { createGlobalStyle } from 'styled-components'

const spaces = [0, 1, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48]
const spaceProperties = { m: 'margin', p: 'padding' }

const marginAndPadding = Object.keys(spaceProperties)
  .map((p) => {
    const n = spaceProperties[p]

    return spaces
      .map(
        (space) => `
    .${p}-${space} {
      ${n}: ${space}px;
    }

    .${p}x-${space} {
      ${n}-right: ${space}px;
      ${n}-left: ${space}px;
    }

    .${p}y-${space} {
      ${n}-top: ${space}px;
      ${n}-bottom: ${space}px;
    }

    .${p}t-${space} {
      ${n}-top: ${space}px;
    }

    .${p}r-${space} {
      ${n}-right: ${space}px;
    }

    .${p}b-${space} {
      ${n}-bottom: ${space}px;
    }

    .${p}l-${space} {
      ${n}-left: ${space}px;
    }
  `
      )
      .join('')
  })
  .join('')

const Utilities = createGlobalStyle`
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
`

export default Utilities
