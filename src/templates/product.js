import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"


const addCart = (id, title, price ) => {

  // let cart = JSON.parse(localStorage.getItem("cart")) || [];
  // cart.includes(id) || cart.push(id);		
  // localStorage.setItem("cart", JSON.stringify(cart));
  
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = {
    id,
    title,
    price
  }

  if( cart.length > 0 && cart.find( p => p.id === id ) ) return; 

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  

}

function Product({data}) {
  return (
    <Layout>
    <p>{data.contentfulProducts.title}</p>
    <p>{data.contentfulProducts.price}</p>
    <button onClick={()=>addCart(data.contentfulProducts.id,
                                data.contentfulProducts.title,
                                data.contentfulProducts.price)}>
                                  Add Cart
    </button>   
    <p>{data.contentfulProducts.description.description}</p>
    <p>{data.contentfulProducts.gemstone}</p> 
    {documentToReactComponents(data.contentfulProducts.body.json, {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
              <img src={node.data.target.fields.file["en-US"].url} />
            ),
          },
        })}
    </Layout>
  )
}

export const query = graphql`
  query productQuery($slug: String!) {
    contentfulProducts(slug: { eq: $slug }) {
      id
      title
      price
      description{
        description
      }
      gemstone
      body {
        json
      }
    }
  }
`
export default Product