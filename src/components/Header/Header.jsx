import "./header.css";
import logo from "../../logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = ({ toggleCart, toggleAlbums }) => {
  const [isHeader, setIsHeader] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const { pathname } = useLocation();

  const updateCartQuantity = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const total = cartItems.reduce((total, item) => total + item.quantity, 0);
    setTotalQuantity(total);
  };

  useEffect(() => {
    console.log(pathname);
    updateCartQuantity();

    const handleStorageChange = () => {
      updateCartQuantity();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [pathname]);

  return (
    <>
      <header
        id="main-menu"
        className={`d-flex align-items-center justify-content-between ${
          pathname == "/room" ? "room__header" : ""
        }`}
      >
        <nav>
          <ul className="d-flex align-items-center">
            <li>
              <NavLink to={`/`}>
                <img src={logo} id="logo" alt="logo" />
              </NavLink>
            </li>
            <li>
              <NavLink to={`/about`}>About</NavLink>
            </li>
            <li>
              <button onClick={toggleAlbums}>Albums</button>
            </li>
            <li>
              <NavLink to={`/gallery`}>Gallery</NavLink>
            </li>
            <li>
              <NavLink to={`/contact`}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={`/shop-all`}>Shop All</NavLink>
            </li>
          </ul>
        </nav>
        <button
          className={`${
            pathname === "/shop-all" || /products\/.*$/.test(pathname)
              ? "d-block"
              : "d-none"
          }`}
          onClick={toggleCart}
        >
          Cart ( {totalQuantity} )
        </button>
      </header>

      <header id="mob-menu">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <NavLink to={`/`}>
              <img src={logo} id="logo" alt="logo" width={150} />
            </NavLink>
          </div>
          <button className="hamburger" onClick={() => setIsHeader(!isHeader)}>
            |||
          </button>
        </div>
      </header>
      <nav id="mob-main" className={`${isHeader ? "left-0" : "left-full"}`}>
        <ul className="d-flex flex-column align-items-left">
          <li>
            <NavLink to={`/`}>Home</NavLink>
          </li>
          <li>
            <NavLink to={`/home#albums`}>Albums</NavLink>
          </li>
          <li>
            <NavLink to={`/about`}>About</NavLink>
          </li>
          <li>
            <NavLink to={`/gallery`}>Projects</NavLink>
          </li>
          <li>
            <NavLink to={`/contact`}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={`/shop-all`}>Shop All</NavLink>
          </li>
        </ul>
        <button
          className="d-block"
          onClick={() => {
            toggleCart();
            setIsHeader(!isHeader);
          }}
        >
          Cart ( {totalQuantity} )
        </button>
      </nav>
    </>
  );
};

export default Header;
