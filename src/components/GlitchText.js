// import React from 'react'
import styled from 'styled-components'
import { Text } from '@chasemccoy/kit'
import { fontSize, lineHeight } from 'styled-system'

const GlitchText = styled(Text)`
  position: relative;

  &:before,
  &:after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    overflow: hidden;
    background: white;
    white-space: nowrap;
    ${fontSize}
    ${lineHeight}
  }

  &:before {
    left: 2px;
    text-shadow: -1px 0 red;
    animation: noise-anim-2 15s infinite linear alternate-reverse;
  }

  &:after {
    left: -2px;
    text-shadow: 1px 0 blue;
    animation: noise-anim 8s infinite linear alternate-reverse;
  }

  @keyframes noise-anim {
    0% {
      clip-path: inset(35% 0 25% 0);
    }
    5% {
      clip-path: inset(22% 0 32% 0);
    }
    10% {
      clip-path: inset(9% 0 6% 0);
    }
    15% {
      clip-path: inset(59% 0 36% 0);
    }
    20% {
      clip-path: inset(14% 0 36% 0);
    }
    25% {
      clip-path: inset(31% 0 5% 0);
    }
    30% {
      clip-path: inset(25% 0 50% 0);
    }
    35% {
      clip-path: inset(87% 0 2% 0);
    }
    40% {
      clip-path: inset(51% 0 16% 0);
    }
    45% {
      clip-path: inset(16% 0 8% 0);
    }
    50% {
      clip-path: inset(30% 0 60% 0);
    }
    55% {
      clip-path: inset(22% 0 75% 0);
    }
    60% {
      clip-path: inset(30% 0 16% 0);
    }
    65% {
      clip-path: inset(63% 0 7% 0);
    }
    70% {
      clip-path: inset(81% 0 1% 0);
    }
    75% {
      clip-path: inset(87% 0 10% 0);
    }
    80% {
      clip-path: inset(94% 0 1% 0);
    }
    85% {
      clip-path: inset(57% 0 13% 0);
    }
    90% {
      clip-path: inset(9% 0 38% 0);
    }
    95% {
      clip-path: inset(34% 0 30% 0);
    }
    100% {
      clip-path: inset(73% 0 2% 0);
    }
  }

  @keyframes noise-anim-2 {
    0% {
      clip-path: inset(11% 0 48% 0);
    }
    5% {
      clip-path: inset(8% 0 30% 0);
    }
    10% {
      clip-path: inset(89% 0 9% 0);
    }
    15% {
      clip-path: inset(77% 0 14% 0);
    }
    20% {
      clip-path: inset(68% 0 9% 0);
    }
    25% {
      clip-path: inset(58% 0 40% 0);
    }
    30% {
      clip-path: inset(75% 0 23% 0);
    }
    35% {
      clip-path: inset(85% 0 15% 0);
    }
    40% {
      clip-path: inset(37% 0 35% 0);
    }
    45% {
      clip-path: inset(78% 0 12% 0);
    }
    50% {
      clip-path: inset(93% 0 5% 0);
    }
    55% {
      clip-path: inset(27% 0 13% 0);
    }
    60% {
      clip-path: inset(15% 0 64% 0);
    }
    65% {
      clip-path: inset(28% 0 26% 0);
    }
    70% {
      clip-path: inset(82% 0 18% 0);
    }
    75% {
      clip-path: inset(98% 0 3% 0);
    }
    80% {
      clip-path: inset(69% 0 1% 0);
    }
    85% {
      clip-path: inset(79% 0 5% 0);
    }
    90% {
      clip-path: inset(15% 0 34% 0);
    }
    95% {
      clip-path: inset(1% 0 33% 0);
    }
    100% {
      clip-path: inset(6% 0 74% 0);
    }
  }
`

export default GlitchText
