import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from './theme'

const Page = styled.div`
  color: ${props => props.theme.colors.green};
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Page>{children}</Page>
  </ThemeProvider>
)

export default Layout
