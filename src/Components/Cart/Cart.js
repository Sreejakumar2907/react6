import React from 'react';
import '../Cart/Cart.css';

const Cart = ({ cart, setCart }) => {

    const onRemoveItem = (id) => {
        const remaining = cart.filter((product) => product.id !== id);
        console.log(remaining);
        setCart(remaining);
    };

    const addQuantity = (id) => {
        const cartProducts = cart.map((product) => {
            if (product.id === id) {
                const quantity = parseInt(product.quantity) || 0;
                console.log(quantity + 1); // Check the value here
                return { ...product, quantity: quantity + 1 };
            } else {
                return product;
            }
        });
        setCart(cartProducts);
    };

    const minusQuantity = (id) => {
        const cartProducts = cart.map((product) => {
            if (product.id === id && parseInt(product.quantity) > 1) {
                const quantity = parseInt(product.quantity) || 0;
                return { ...product, quantity: quantity - 1 };
            } else {
                return product;
            }
        });
        setCart(cartProducts);
    };

    const calculateTotal = (cart) => {
        return cart
            .reduce((total, item) => {
                const itemPrice = parseFloat(item.price) || 0; // Ensure item price is initialized properly
                const itemQuantity = parseInt(item.quantity) || 1; // Ensure item quantity is initialized properly
                return total + itemPrice * itemQuantity;
            }, 0)
            .toFixed(2);
    };

    return (
        <div className="cart-items">
            <div className="cart-products">
                {cart.map((item) => {
                    console.log(item)
                    return (
                        <div
                            key={item.id}
                            className=""
                        >
                            <span>
                                <img src={item.Image} alt={item.name} className="cart-image" />
                            </span>
                            <span className="add-remove">
                                <button onClick={() => { addQuantity(item.id) }} className="add-image">+</button>
                                <span className='count'>{item.quantity}</span>
                                <button onClick={() => { minusQuantity(item.id) }} className="remove-image">-</button>
                                <span className="cart-price">${(parseFloat(item.price) || 0) * (parseInt(item.quantity) || 1)}</span>
                            </span>
                            <span className="remove">
                                <button
                                    className="cart-remove"
                                    onClick={() => onRemoveItem(item.id)}
                                >
                                    Remove
                                </button>
                            </span>
                        </div>
                    );
                })}
            </div>
            <div className="total">
                <h1 className="total-count">Total: ${calculateTotal(cart)}</h1>
            </div>
        </div>
    );
}

export default Cart;