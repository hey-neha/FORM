import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { getTOtalCartAmount } = useContext(StoreContext);

  return (
    <div>
      <form className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-field">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Street" />
          <div className="multi-field">
            <input type="text" placeholder="City Name" />
            <input type="text" placeholder="State Name" />
          </div>
          <div className="Zip code">
            <input type="text" placeholder="Country" />
          </div>
          <input type="text" placeholder="Phone" />
        </div>
        <div className="place-order-rigth">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTOtalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>{getTOtalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>
                  ${getTOtalCartAmount() === 0 ? 0 : getTOtalCartAmount() + 2}
                </b>
              </div>
            </div>

            <button>PROCEED TO Plyament</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
