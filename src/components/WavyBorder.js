import React, { useRef, useEffect } from 'react'
import Noise from 'utils/noise'
import { Box } from '@chasemccoy/kit'

const animateDivider = el => {
  const defaultDensity = 3;
  const defaultHeight = "150";
  const defaultOndulation = 50;
  const defaultSpeed = 4;
  const defaultIsStatic = false;

  let density = parseInt(
    el.getAttribute('data-rad-divider-density') || defaultDensity,
  );

  if (isNaN(density)) { density = defaultDensity; }

  let ondulation = parseInt(
    el.getAttribute('data-rad-divider-ondulation') || defaultOndulation,
  );

  if (isNaN(ondulation)) { ondulation = defaultOndulation; }

  let speed = parseInt(el.getAttribute('data-rad-divider-speed') || defaultSpeed);

  if (isNaN(speed)) { speed = defaultSpeed; }

  let isStatic = el.getAttribute('data-rad-divider-static') === "true" || defaultIsStatic;

  let width = el.clientWidth;
  let isLine = el.classList.contains('line');

  let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  
  let height = el.getAttribute('data-rad-divider-height') || defaultHeight;
  
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', height + 'px');

  svg.appendChild(path);
  el.innerHTML = '';
  el.appendChild(svg);

  let yoff = 0;

  let interval = 1000 / 60;
  let then = Date.now();
  let elapsed;

  let noise = Noise(Math.random());
  density = density / 1000;
  speed = speed / 1000;

  function animate() {
    if (width !== el.clientWidth) {
      width = el.clientWidth;
      svg.setAttribute('width', width + 'px');
    }

    const now = Date.now();
    elapsed = now - then;

    if (isStatic) {
      elapsed += interval * 2;
    }

    if (elapsed > interval) {
      let xoff = 0;
      let xs = [];

      for (var x = 0; x < width; x++) {
        let n = noise.perlin2(xoff, yoff)
        let y = ondulation - (ondulation * n) + yoff

        xs.push([x, y]);

        xoff += density;
      }

      yoff += speed;

      let prefix = 'M0,0 ' + width + ',0 ';

      if (isLine) {
        prefix = 'M';
      }

      var d = prefix + xs.reverse().map(p => {
        return p[0] + ',' + p[1];
      });

      path.setAttribute('d', d);

      then = now - (elapsed % interval);
    }

    if (!isStatic) {
      requestAnimationFrame(animate);
    }
  }

  animate();
}

const WavyBorder = ({ flipped, ...rest }) => {
  const container = useRef(null)

  useEffect(() => {
    animateDivider(container.current)
  })
  
  return (
    <Box 
      height='100px' 
      css={`
        fill: ${p => p.theme.colors.accent.pop};
        transform: rotate(${flipped ? '180deg' : '0'});
      `} 
      ref={container} 
      data-rad-divider-density="3" 
      data-rad-divider-ondulation="50" 
      data-rad-divider-speed="2" 
      data-rad-divider-height="100"
      {...rest}
    />
  )
}

export default WavyBorder