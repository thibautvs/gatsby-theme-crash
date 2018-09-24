import React from 'react'
import Layout from '../components/Layout'
import WorkWithUs from './index/WorkWithUs'

const IndexPage = () => (
  <Layout>
    <section>
      <p>
        This works in dev (gatsby develop), but not when building for prod
        (gatsby build)
      </p>
      <WorkWithUs />
    </section>
  </Layout>
)

export default IndexPage
