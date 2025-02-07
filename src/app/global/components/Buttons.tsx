import styled, { css } from 'styled-components'
import { buttonColors} from '../styles/colors'
import sizes from '../styles/sizes'

const { dark } = buttonColors
const { tiny, small, normal, medium, big, extra} = sizes

const commonStyle = css`
  background: ${dark[0]};
  border: 1px solid ${dark[0]};
  color: ${dark[1]};
  width: 100%;
  height: 35px;
  border-radius: 2px;
`

export const TinyButton = styled.button`
  ${commonStyle}
  height: 20px;
  font-size: ${tiny};
`

export const SmallButton = styled.button`
  ${commonStyle}
  height: 30px;
  font-size: ${small};
`

export const Button = styled.button`
  ${commonStyle}
`

export const MediumButton = styled.button`
  ${commonStyle}
`

export const BigButton = styled.button`
  ${commonStyle}
`

export const ExtraButton = styled.button`
  ${commonStyle}
`

export const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}

  button {
    width: 0;
    flex-grow: 1;

    & + & {
      margin-left: 3px;
    }
  }
`