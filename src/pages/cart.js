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

    const [cartData, setCartData ] = useState(0); 
  
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
                
         {  
             cartData ? (

                <form name="order" method="post" netlify data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="order" />
                    <div>
                        <label>Products</label>
                        <Textarea name="products" readOnly value={cartData} />
                    </div>
                    <p>
                        <label>Your Name: <input type="text" name="name" required/></label>   
                    </p>
                    <button type="submit">주문</button>
                </form>
                
             ) : (
                 <div>EMPTY</div>
             )
         }   
        </Layout>
    )
  
}


export default Cart

