import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const AppContainer = styled.div`
  width: 1140px;
  margin: 0 auto;
`

const CartBtn = styled(Link)`
  position:fixed;
  top:20px;
  right:20px;
  border:1px solid #666;
  padding: .5rem 1rem;
  text-decoration:none;
  display:block;
  cursor: pointer;
  color: #666;
  border-radius:5px;
`

const Layout = ({children}) => {
 
  return <AppContainer>
    <h1><Link to={'/'}>THEODORA WARRE</Link></h1>
    <CartBtn to={`/cart`}>
      Cart
    </CartBtn>  
    {children}
    </AppContainer>
}

export default Layout
