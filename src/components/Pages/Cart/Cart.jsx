import "./cart.css";
import { useState, useEffect } from "react";

const Cart = ({ showCart, closeCart }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedCartItems =
        JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartItems(updatedCartItems);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price.replace("$", ""));
    if (!isNaN(itemPrice)) {
      total += itemPrice * item.quantity;
    }
    return total;
  }, 0);

  const updateCart = (index, action) => {
    const updatedCartItems = [...cartItems];

    if (action === "decrease") {
      if (updatedCartItems[index].quantity > 1) {
        updatedCartItems[index].quantity -= 1;
      } else {
        updatedCartItems.splice(index, 1);
      }
    } else if (action === "increase") {
      updatedCartItems[index].quantity += 1;
    }

    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    // Dispatch a custom event to update other components
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <>
      <div className={`cart-container ${showCart ? "right-0" : "right-full"}`}>
        <div className="grid">
          <div className="vh-100 d-flex flex-column">
            <div className="border-bottom h-18 border-light d-flex align-items-center justify-content-between">
              <button className="antialiased" onClick={closeCart}>
                Close
              </button>
              <button className="antialiased">Cart ({totalQuantity})</button>
              <button className="antialiased d-none">Cart (0)</button>
              <button className="antialiased d-none text-neutral-300">
                Close
              </button>
            </div>
            <section className="overflow-y-scroll scrollbar-hidden antialiased">
              <ul className="d-flex flex-column">
                {cartItems.map((carts, index) => (
                  <li
                    key={index}
                    className="d-flex justify-content-between antialiased border-bottom border-light"
                  >
                    <div className="w-50" style={{ marginRight: "1.5rem" }}>
                      <img
                        src={carts.image}
                        alt="cart image"
                        className="cart-img"
                      />
                    </div>
                    <div className="d-flex justify-content-between w-50">
                      <div className="grid gap-2">
                        <h3 className="whitespace-pre-wrap w-100">
                          <span className="whitespace-pre-wra">
                            {carts.title}
                          </span>
                          <div>{carts.price}</div>
                        </h3>
                        <div
                          className="d-flex align-items-center"
                          style={{ marginTop: "-30px" }}
                        >
                          <label className="sr-only">Quantity, 1</label>
                          <div
                            className="w-100 h-25 d-flex align-items-center border border-light"
                            style={{ borderRadius: "9999px" }}
                          >
                            <form
                              style={{ width: "33.3333%", paddingLeft: "1rem" }}
                            >
                              <input
                                type="hidden"
                                name="cartAction"
                                value="Update_Cart"
                              />
                              <button
                                type="button"
                                name="decrease-quantity"
                                className="btn-decrease antialiased d-flex align-items-center justify-content-center"
                                onClick={() => updateCart(index, "decrease")}
                                value={0}
                              >
                                <span>-</span>
                              </button>
                            </form>
                            <div className="h-100 antialiased d-flex align-items-center justify-content-center cart-value">
                              {carts.quantity}
                            </div>
                            <form
                              className="d-flex align-items-center justify-content-end"
                              style={{
                                width: "33.3333%",
                                paddingRight: "1rem",
                              }}
                            >
                              <input
                                type="hidden"
                                name="cartAction"
                                value="Update_Cart"
                              />
                              <button
                                type="button"
                                name="increase-quantity"
                                className="btn-increase antialiased d-flex align-items-center justify-content-center"
                                onClick={() => updateCart(index, "increase")}
                                value={0}
                              >
                                <span>+</span>
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            {totalQuantity > 0 && (
              <section>
                <div
                  className="d-flex align-items-center justify-content-between"
                  style={{ padding: "1.5rem" }}
                >
                  <dt className="whitespace-pre-wrap antialiased">Subtotal</dt>
                  <dd
                    data-test="subtotal"
                    className="whitespace-pre-wrap antialiased"
                  >
                    <div>${totalPrice.toFixed(2)}</div>
                  </dd>
                </div>
                <div className="d-flex flex-column">
                  <a
                    width="full"
                    href="#"
                    className="w-100 position-relative border-top border-light text-start d-flex align-items-center justify-content-between antialiased btn-checkout"
                  >
                    Checkout
                  </a>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
