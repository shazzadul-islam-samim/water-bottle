import './cart.css'
const Cart = ({cart}) => {
    return (
        <div>
            <h3>Your added in your cart {cart.length} items</h3>

            <div className="cart-container">
                {
                cart.map(bottle => <img src={bottle.img}></img>)
                }
            </div>
        </div>
    );
};

export default Cart;