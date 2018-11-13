import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import WorkWithUs from '../components/WorkWithUs'

const ThisWorksInProd = styled.h1`
  color: ${props => props.theme.colors.gray};
`

const IndexPage = () => (
  <Layout>
    <section>
      <ThisWorksInProd>Gatsby Theme Crash</ThisWorksInProd>
      <p>
        This works in dev (gatsby develop), but not when building for prod
        (gatsby build)
      </p>
      <WorkWithUs />
    </section>
  </Layout>
)

export default IndexPage
