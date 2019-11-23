import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import ProductItem from "../components/productitem"

const Products = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

`

const IndexPage = ({ data: {allContentfulProducts} }) => (
  <Layout>
  <Products>
  {allContentfulProducts.edges.map( ({node}) => (
    <ProductItem key={node.id} node={node} />
  ) )}
  </Products>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allContentfulProducts {
      edges {
        node {
          id
          title
          slug
          price
          thumb {
            file {
              url
            }
          }
        }
      }
    }
  }
`
