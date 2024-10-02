import React, { useState } from "react";
import "./App.css";
import tShirt1 from "../src/img/tShirt1.jpg";
import tShirt2 from "../src/img/tShirt2.png";
import tShirt3 from "../src/img/tShirt3.jpg";

const products = [
    { id: 1, name: "White T-Shirt", price: 450, image: tShirt1 },
    { id: 2, name: "Blue T-Shirt", price: 500, image: tShirt2 },
    { id: 3, name: "Black T-Shirt", price: 450, image: tShirt3 },
];

function App() {
    const [cart, setCart] = useState([]);
    // const [purchased, setPurchased] = useState(false); // state for Purchased message display logic

    const addToCart = (productId) => {
        // console.log(productId);
        const selectedProduct = products.find(
            (product) => product.id === productId
        );
        if (selectedProduct) {
            setCart([...cart, selectedProduct]);
        }
    };

    const checkout = () => {
        alert("Thank You for your purchase!");
        setCart([]);
        // setPurchased(true); //setting for purchased logic true to display message
    };
    return (
        <div className="App">
            <header className="App-header">
                <h1>E-Commerce Store</h1>
            </header>
            <section className="App-products">
                {products.map((product) => {
                    //if we are using curly braces in the map function, then need to add return for the jsx
                    return (
                        <div key={product.id} className="App-product">
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>₹ {product.price}</p>
                            <button onClick={() => addToCart(product.id)}>
                                Add to Cart
                            </button>
                        </div>
                    );
                })}
            </section>

            {/* LOGIC TO DISPLAY CONFIRMATION MESSAGE */}
            {/* {purchased && (
                <section className="App-thank-you">
                    <h2>Thank you for your purchase!</h2>
                    <p>Your order will be processed shortly.</p>
                </section>
            )} */}

            <section className="App-cart">
                <h2>Shopping Cart</h2>
                <ul>
                    {cart.map((item) => (
                        //if we are not using curly braces in the map function, then NO need to add return for the jsx instead just use parentheses
                        <li key={item.id}>
                            {item.name} - ₹ {item.price}
                        </li>
                    ))}
                </ul>
                <button onClick={checkout}>Checkout</button>
            </section>
        </div>
    );
}

export default App;
