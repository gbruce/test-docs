import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { css } from '@emotion/core'
import { Header } from './Header'

const Content = css`
  margin-left: 160px; /* Same as the width of the sidebar */
  padding: 0px 10px;
`
export const SideBar = css`
  font-family: 'sans serif';
  font-size: 20px;
  height: 100%;
  width: 160px;
  position: fixed;
  left: 0;
  overflow-x: hidden;
  padding-left: 10px;
`
interface LayoutProps {
  readonly children?: React.ReactNode | readonly React.ReactNode[]
}

interface RenderData {
  readonly site: {
    readonly siteMetadata: {
      readonly title: string
    }
  }
}

export const Layout = ({ children }: LayoutProps) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data: RenderData) => (
      <>
        <Helmet
          titleTemplate={`%s - ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Demo site for a Gatsby Starter in TypeScript'
            },
            {
              name: 'keywords',
              content: 'gatsby, gatsbyjs, sample, demo, typescript'
            }
          ]}
        />
        <Header title={data.site.siteMetadata.title} />
        <div css={SideBar}>
          <p>
            <Link to={`/single-page/`} activeClassName="active">
              Home
            </Link>
          </p>
          <p>
            <Link to={`/single-page/`} activeClassName="active">
              Vocabulary
            </Link>
          </p>
          <p>
            <Link to={`/single-page/`} activeClassName="active">
              Concepts
            </Link>
          </p>
          <p>
            <Link to={`/single-page/`} activeClassName="active">
              Installation
            </Link>
          </p>
          <p>
            <Link to={`/single-page/`} activeClassName="active">
              Reference
            </Link>
          </p>
          <p>
            <Link to={`/single-page/`} activeClassName="active">
              Examples
            </Link>
          </p>
          <p>
            <Link to={`/single-page/`} activeClassName="active">
              Questions
            </Link>
          </p>
          <p>
            <Link to={`/single-page/`} activeClassName="active">
              Request an API Key
            </Link>
          </p>
          <p>
            <Link to={`/single-page/`} activeClassName="active">
              Legal
            </Link>
          </p>
        </div>
        <div css={Content}>{children}</div>
      </>
    )}
  />
)
