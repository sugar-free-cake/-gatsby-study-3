import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
  width: 32%;
  margin-bottom:1rem;
`

const Img = styled.img`
  width: 100%;
`


const ProductItem = ({node}) => {
  
  return (<Container>
    <Link to={`/products/${node.slug}`}>
    <Img src={node.thumb[0].file.url} />
    {/* <Img fluid={node.thumb[0].file.url} /> */}
    
    <p>{node.title}</p> 
    <p>{node.price}</p>
    </Link>
  </Container>)
}

export default ProductItem
