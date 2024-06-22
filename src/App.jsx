import {
  Room,
  Header,
  Shop,
  Footer,
  Products,
  Home,
  Cart,
  Loader,
  About,
  Gallery,
  ScrollToTop,
  TAndC,
  PrivacyPolicy,
  Contact,
  FAQ,
  Albums,
} from "./components";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Lenis from "lenis";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showAlbums, setShowAlbums] = useState(false);

  const closeCart = () => {
    setShowCart(false);
  };

  const closeAlbums = () => {
    setShowAlbums(!showAlbums);
  };

  const lenis = new Lenis({
    lerp: 0.1,
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <Loader />
      <Header toggleCart={() => setShowCart(!showCart)} toggleAlbums={() => setShowAlbums(!showAlbums)}/>
      <Cart showCart={showCart} closeCart={closeCart} />
      <Albums showAlbums={showAlbums} hideAlbums={closeAlbums}/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/room" element={<Room />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/shop-all" element={<Shop />}></Route>
        <Route path="/products/:id" element={<Products />}></Route>
        <Route path="/terms-of-service" element={<TAndC />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/faqs" element={<FAQ />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
