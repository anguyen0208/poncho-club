import React from 'react'
import { StaticQuery, graphql} from 'gatsby'
import Layout from '../components/layout'
import AboutContent from "../components/AboutPage/AboutContent"

const aboutQuery = graphql`
  query AboutQuery {
      staffs: allStaffsJson {
          edges {
            staff: node {
              name,
              position,
              description,
              current,
              image {
                src
              }
            }
          }
      }
     
  }
      
`


export default ({location}) =>
    <StaticQuery
        query= {aboutQuery}
        render= {data =>
            <Layout location={location}>
                <AboutContent data={data} />
            </Layout>
        }
    />

