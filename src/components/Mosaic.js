import React from 'react'
import { Grid } from 'components/Base'
import { Box } from '@chasemccoy/kit'

// eslint-disable-next-line
Array.prototype.sample = function() {
  return this[Math.floor(Math.random() * this.length)]
}

const add = (a, b) => a + b

const approximatelyEqual = (a, b) => Math.abs(a - b) < 0.00001

function getMosaicWidths(count) {
  var state = -1
  var widthsArray = Array(count).fill(1)
  var width = 0

  // eslint-disable-next-line
  const widths = widthsArray.map(() => {
    // eslint-disable-next-line
    switch (state) {
      // Start every sequence with this width
      case -1:
        width = [1 / 2, 2 / 3].sample()
        state = width
        return width
      // If starting a new row, choose any valid size and increase the row size
      // by that width
      case 0:
        width = [1 / 3, 1 / 2, 2 / 3].sample()
        state = state + width
        return width
      // If row is 33% full, choose either a 1/3 or 2/3 width item; increase
      // row size by that width
      case 1 / 3:
        width = [1 / 3, 2 / 3].sample()
        state = state + width
        return width
      // If row is 50% full, choose another 1/2 sized item; reset row size
      case 1 / 2:
        state = 0
        return 1 / 2
      // If row is 66% full, finish the row with a 1/3 sized item and reset the
      // row size
      case 2 / 3:
        state = 0
        return 1 / 3
      // If row is full, choose either a 1/2 or 1 sized piece to start the next
      // row; increase row size by that width
      case 1:
        width = [1 / 2, 1].sample()
        state = width === 1 ? 0 : width
        return width
    }
  })

  // The overflow value gives us the filled width of the last row
  const overflow = widths.reduce(add) % 1

  // If the dangling orphan is too small, make it larger
  if (approximatelyEqual(overflow, 1 / 3)) {
    widths[widths.length - 1] = [1 / 2, 2 / 3, 1].sample()
  }

  return widths
}

const Mosaic = props => {
  const widths = getMosaicWidths(props.children.length)

  return (
    <Grid gutter={12}>
      {props.children.map((item, index) => (
        <Box width={[1, 1, 1, widths[index]]} key={index}>
          {React.cloneElement(item, { width: widths[index] })}
        </Box>
      ))}
    </Grid>
  )
}

export default Mosaic
