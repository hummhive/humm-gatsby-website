import * as React from "react"
import HiveSection from '../components/hivesection/hivesection'
import EmpowerSection from '../components/empowersection/empowersection'
import BlueSwooshSection from '../components/blueswooshsection/blueswooshsection'
import HiveTreeSection from '../components/hivetreesection/hivetreesection'
import Layout from '../components/layout/layout'

// markup
const IndexPage = () => {
  return (
    <Layout>
        <HiveSection />
        <EmpowerSection />
        <BlueSwooshSection />
        <HiveTreeSection />
    </Layout>
  )
}

export default IndexPage
