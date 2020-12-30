import { css } from 'styled-components'

const typographyStyles = css`
  :root {
    --flow-spacing: 1.1rem;
  }

  .prose {
    & > * + * {
      margin-top: var(--flow-spacing);
    }

    li + li {
      margin-top: 0.75rem;
    }

    li > p + p {
      margin-top: 0.5rem;
    }

    li + li > p:first-child {
      margin-top: 1.25rem;
    }

    h1 + *,
    h2 + *,
    h3 + *,
    h4 + *,
    h5 + *,
    h6 + * {
      margin-top: 0.75em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: clamp(2rem, 1.6em, 9999rem);
      line-height: 1.2;
      font-family: var(--font-body);
    }

    h1 {
      margin-top: 0;
      font-size: calc(2rem * var(--heading-scale, 1));
    }

    h2 {
      font-size: calc(1.5rem * var(--heading-scale, 1));
    }

    h3 {
      font-size: calc(1.25rem * var(--heading-scale, 1));
    }

    h4 {
      font-size: calc(1rem * var(--heading-scale, 1));
    }

    h5 {
      font-size: calc(0.83rem * var(--heading-scale, 1));
    }

    h6 {
      font-size: calc(0.75rem * var(--heading-scale, 1));
    }

    .lead {
      font-size: 1.25rem;
      line-height: 1.3;
    }

    :is(h1, h2, h3, h4, h5, h6) + :is(h1, h2, h3, h4, h5, h6) {
      margin-top: 1.2em;
    }

    .caption,
    figure > * + figcaption {
      margin-top: 0.8em;
      font-size: 0.83em;
      line-height: 1.4;
    }

    li > ul,
    li > ol {
      margin-top: 0.5rem;
      margin-left: 0.5rem;
      padding-left: 0;
    }

    code {
      font-size: 0.75em;
    }

    table {
      width: 100%;
    }

    thead {
      text-align: left;
    }

    td,
    th {
      text-align: left;
      border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
      font-feature-settings: 'tnum';
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 0.75rem;
      padding-bottom: calc(0.75rem - 1px);
    }

    th:first-child,
    td:first-child {
      padding-left: 0;
    }

    th:last-child,
    td:last-child {
      padding-right: 0;
    }
  }
`

export default typographyStyles
