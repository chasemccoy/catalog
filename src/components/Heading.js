import styled from 'styled-components'
import { space } from 'styled-system'

const Heading = styled.h2`
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${props => props.theme.fontWeights.bold};
  margin: 0 0 24px;
  padding: 0 0 8px;
  color: ${props => props.theme.colors.gray[3]};
  font-family: ${props => props.theme.fontFamily.sans};

  display: flex;
  align-items: center;

  &:after {
    content: '';
    flex: 1;
    border-bottom: 1px dashed ${props => props.theme.colors.gray[3]};
    margin-left: 16px;
  }

  ${space};
`

export default Heading
