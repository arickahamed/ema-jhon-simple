import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  //   const total = cart.reduce((total, prd) => total + prd.price, 0);
  let total = 0;
  for (let index = 0; index < cart.length; index++) {
    const product = cart[index];
    total = total + product.price;
  }

  let shipping = 0.0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 5.5;
  } else if (total > 0) {
    shipping = 10.99;
  }

  const tax = (total / 8).toFixed(2);
  const grandTotal = (total + shipping + Number(tax)).toFixed(2);

  return (
    <div>
      <h4>Order Summary</h4>
      <p>Items Ordered :{cart.length} </p>
      <p>Product Price :{total} </p>
      <p>
        <small>Shipping Cost :{shipping} </small>
      </p>
      <p>
        <small>Tax + Vat :{tax} </small>
      </p>
      <p>Total Price :{grandTotal} </p>
    </div>
  );
};

export default Cart;
