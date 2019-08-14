import React from 'react'
import { Layout } from '../components/Layout'
import HOME from './home.mdx'

export const IndexPage = () => (
  <>
    <HOME />>
  </>
)

const LayoutIndexPage = () => (
  <Layout>
    <IndexPage />
  </Layout>
)

export default LayoutIndexPage
