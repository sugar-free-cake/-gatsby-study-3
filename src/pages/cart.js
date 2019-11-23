import React, {useState, useEffect} from "react"
import Layout from "../components/layout"
import styled from "styled-components"


const Textarea = styled.textarea`
    width: 500px;
    min-height: 200px; 
    margin-left:20px;
    border:none;
    display:block;
    
    &:focus{
        outline: none;
    }

`

const Cart = () => {

    const [cartData, setCartData ] = useState(''); 
  
    useEffect(() => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const products = cart.reduce( (
        (acc, cur, i) => {
                return acc+`${cur.title} -  £ ${cur.price} \n`;
       } ),'' )


      setCartData(products);
    },[]); 
      

    return(
        <Layout>
            <h2>CART</h2>

            <form name="Order Form" method="post" data-netlify="true">
                    <input type="hidden" name="form-name" value="Order Form" />
                
                    <div>
                        <label>Products</label>
                        <Textarea name="products" readOnly value={cartData} required/>
                    </div>
                    <p>
                        <label>Your Name: <input type="text" name="name" required/></label>   
                    </p>
                    <button type="submit">주문</button>
            
            </form>
        </Layout>
    )
  
}


export default Cart

