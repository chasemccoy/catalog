import { css } from 'styled-components'

const spaces = [0, 1, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48]
const spaceProperties = { m: 'margin', p: 'padding' }

const palettes = ['gray']
const colors = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900]

const spaceUtils = Object.keys(spaceProperties)
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

const colorUtils = palettes
  .map((p) => {
    return colors
      .map(
        (color) => `
          .color-${p}--${color} {
            color: var(--color-${p}--${color});
          }
        `
      )
      .join('')
  })
  .join('')

const utilities = css`
  ${spaceUtils}
  ${colorUtils}

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

  .mono {
    font-family: var(--font-code);
  }

  .hyphens {
    hyphens: auto;
  }

  .color-section {
    color: var(--section-color);
  }

  .badge {
    display: inline-block;
    font-size: 0.7rem !important;
    font-family: var(--font-body) !important;
    color: var(--body-background);
    background: var(--section-color);
    border-radius: 999px;
    padding: 4px 12px;
    line-height: 1.2;
  }

  .uppercase {
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`

export default utilities
