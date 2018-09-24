import React from 'react'
import styled from 'styled-components'
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone'
import StyledFontAwesomeIcon from '../StyledFontAwesomeIcon'

const StyledA = styled.a`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
`

const WorkWithUs = () => (
  <section>
    <StyledFontAwesomeIcon icon={faPhone} />
    111 11 11 11
    <br />
    <StyledA href="http://www.google.com">Google.com</StyledA>
  </section>
)

export default WorkWithUs
