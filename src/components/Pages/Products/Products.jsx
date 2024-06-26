import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
import ProductCard from "../../ProductCard";
import arrowRight from "../../../assets/img/arrow-right-R5M4PHG7.svg";
import arrowLeft from "../../../assets/img/arrow-left-3PGR7TIV.svg";
import hoddieOne from "../../../assets/products/5801_final_230224.jpg";
import hoddieTwo from "../../../assets/products/5802_final_230224.jpg";
import hoddieThree from "../../../assets/products/5803_final_230224.jpg";
import hatWhiteOne from "../../../assets/products/hat-white1.jpg";
import hatWhiteTwo from "../../../assets/products/hat-white2.jpg";
import hatWhiteThree from "../../../assets/products/hat-white3.jpg";
import front2Magnet from "../../../assets/products/front2_magnet.png";
import back2Magnet from "../../../assets/products/back2_magnet.png";
import sweaterBlackFront from "../../../assets/products/2601_sweater_black_front_final_211221.jpg";
import sweaterBlackDetail from "../../../assets/products/2601_sweater_black_detail_final_211221.jpg";
import sweaterBlackBack from "../../../assets/products/2601_sweater_black_back_final_211221.jpg";
import moreLifeFront from "../../../assets/products/MORELIFE_WHITETEE_FRONT.png";
import moreLifeDetail from "../../../assets/products/MORELIFE_WHITETEE_DETAIL.png";
import moreLifeBack from "../../../assets/products/MORELIFE_WHITETEE_BACK.png";
import MORELIFE_REVENGE_TEE_BACK from "../../../assets/products/MORELIFE_REVENGE_TEE_BACK.png";
import MORELIFE_REVENGE_TEE_FRONT from "../../../assets/products/MORELIFE_REVENGE_TEE_FRONT.png";
import final_front from "../../../assets/products/5601_final_230227.jpg";
import final_detail from "../../../assets/products/5603_final_230227.jpg";
import final_back from "../../../assets/products/5602_final_230227.jpg";
import sweatpant_fornt from "../../../assets/products/5701_final_230227.jpg";
import sweatpant_detail from "../../../assets/products/5703_final_230227.jpg";
import sweatpant_back from "../../../assets/products/5702_final_230227.jpg";
import albumOne from "../../../assets/img/album_1.jpg";
import albumTwo from "../../../assets/img/album_2.jpg";
import albumThree from "../../../assets/img/album_3.jpg";
import "./products.css";

const products = [
  {
    id: "scorpion-hoodie-faded-green",
    title: "SCORPION HOODIE",
    price: "$110.00",
    description: `Hooded cotton sweatshirt with kangaroo pocket. Embroidered Scorpion graphic on front chest.

    We recommend sizing down one size, please check size guide for exact product dimensions.`,
    image: [hoddieOne, hoddieTwo, hoddieThree],
  },
  {
    id: "nike-clb-hat-white",
    title: "NIKE CLB HAT WHITE",
    price: "$28.00",
    description: `6-Panel Legacy 91 Hat silhouette. Dri-Fit Bozz fabric. Embroidered swoosh on center front, "Kiss: graphic in semi- transparent ink on the bill, and "CLB" matte screen print sign-off on the back. Made in Vietnam.`,
    image: [hatWhiteOne, hatWhiteTwo, hatWhiteThree],
  },
  {
    id: "so-far-gone-magnet-set",
    title: "SO FAR GONE MAGNETIC LETTER SET",
    price: "$8.00",
    description: `43 Magnet letters/numbers made from the classic So Far Gone Font.`,
    image: [front2Magnet, back2Magnet],
  },
  {
    id: "ovo-sound-crewneck",
    title: "OVO SOUND CREWNECK - BLACK",
    price: "$94.00",
    description: `Premium black fleece crewneck sweatshirt with HD print OVO Sound logo on chest.`,
    image: [sweaterBlackFront, sweaterBlackDetail, sweaterBlackBack],
  },
  {
    id: "more-life-t-shirt-white",
    title: "MORE LIFE T-SHIRT - WHITE",
    description: `Short sleeve cotton t-shirt.
    Screen printed More Life graphic on front. 
    Screen printed 5 year graphic on upper back.`,
    price: "$45.00",
    image: [moreLifeFront, moreLifeDetail, moreLifeBack],
  },
  {
    id: "revenge-longsleeve-t-shirt",
    title: "REVENGE LONGSLEEVE T-SHIRT",
    description: `Cotton longsleeve t-shirt. Screen printed Revenge graphic on front. Screen printed Summer Sixteen graphic on back. Screen printed 5 Years graphic on left wrist.`,
    price: "$65.00",
    image: [MORELIFE_REVENGE_TEE_FRONT, MORELIFE_REVENGE_TEE_BACK],
  },
  {
    id: "views-hoodie-faded-brick",
    title: "VIEWS HOODIE",
    description: `Hooded cotton sweatshirt with kangaroo pocket. Embroidered Views graphic on front chest.

    We recommend sizing down one size, please check size guide for exact product dimensions.`,
    price: "$110.00",
    image: [final_front, final_detail, final_back],
  },
  {
    id: "views-sweatpant-faded-brick",
    title: "VIEWS SWEATPANT",
    description: `Premium faded brick fleece sweatpant with embroidered Views graphic above back right pocket.`,
    price: "$100.00",
    image: [sweatpant_fornt, sweatpant_detail, sweatpant_back],
  },
  {
    id: "3am-on-31st",
    title: "3am on 31st",
    price: "$110.00",
    description: `Album Description.`,
    image: [albumOne, albumThree],
  },
  {
    id: "get-this-way",
    title: "Get This Way",
    price: "$110.00",
    description: `Album Description..`,
    image: [albumTwo, albumThree],
  },
  {
    id: "homes",
    title: "Homes",
    price: "$110.00",
    description: `Album Description..`,
    image: [albumThree],
  },
];

const Products = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const relatedProducts = products.filter((item) => item.id !== id);

  const [cursorStyle, setCursorStyle] = useState("pointer");
  const [showSizes, setShowSizes] = useState(false);
  const [sizes, setSizes] = useState("S");
  const [isCartAdded, setisCartAdded] = useState(false);
  const [sizeGuide, setSizeGuide] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const imageRect = imageRef.current.getBoundingClientRect();
    const imageWidth = imageRect.width;
    const mouseX = e.clientX - imageRect.left;

    if (mouseX < imageWidth / 4) {
      setCursorStyle(`url(${arrowLeft}) 15 8, e-resize`);
    } else if (mouseX > (3 * imageWidth) / 4) {
      setCursorStyle(`url(${arrowRight}) 15 8, e-resize`);
    } else {
      setCursorStyle("pointer");
    }
  };

  const handleMouseLeave = () => {
    setCursorStyle("pointer");
  };

  const handleImageClick = () => {
    if (cursorStyle !== "pointer") {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % product.image.length
      );
    }
  };

  const handleAddToCart = () => {
    setisCartAdded((isCartAdded) => !isCartAdded);

    setTimeout(() => {
      setisCartAdded((isCartAdded) => !isCartAdded);
    }, 2000);

    const productData = {
      image: product.image[currentImageIndex],
      title: product.title,
      price: product.price,
      quantity: 1,
    };

    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    const existingProductIndex = existingCartItems.findIndex(
      (item) => item.title === product.title
    );

    if (existingProductIndex !== -1) {
      existingCartItems[existingProductIndex].quantity += 1;
    } else {
      existingCartItems.push(productData);
    }

    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));

    window.dispatchEvent(new Event("storage"));
  };
  return (
    <>
      <Container fluid className="product-detail">
        <Row>

          <Col xs="12" sm="12" md="6" xl="6">
            <figure>
              <img
                src={product.image[currentImageIndex]}
                ref={imageRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={handleImageClick}
                style={{ cursor: cursorStyle }}
                className="product-img"
                alt="product image"
              />
            </figure>
          </Col>

          <Col xs="12" sm="12" md="6" xl="6">
            <section className="d-flex flex-column justify-content-between h-100">
              <div class={`w-100 bg-dark d-flex align-items-center justify-content-center text-white z-50 antialiased added-to-cart ${ isCartAdded ? "translate-0" : "translate-full"}`}>
                Product added to cart
              </div>

              <div className="head">
                <h1 className="product-title">{product.title}</h1>
                <h2 className="product-price">{product.price}</h2>
              </div>

              <div className="foot">

                <p className="porduct-descripion w-50">{product.description}</p>

                <button className="size-guide"
                  onClick={() => setSizeGuide(true)}>
                  Size Guide
                </button>

                <div className={`z-50 position-relative ${
                    sizeGuide ? "d-flex" : "d-none"
                  }`}
                  onClick={() => setSizeGuide(false)}>
                  <div className="position-fixed w-100 z-50 modal-bg">
                    <div className="d-flex align-items-center justify-content-center text-center modal-inner">
                      <div className="position-relative modal-in">
                        <div className="position-absolute modal-inn"
                          onClick={() => setSizeGuide(false)}>
                          &times;
                        </div>

                        <div className="d-flex justify-content-between text-xs">
                          <h4>Size Guide</h4>
                          <div>{product.title}</div>
                        </div>

                        <div className="sizeguide-table">
                          <table className="table border border-light">
                            <tbody className="table-body">
                              <tr>
                                <th>
                                  <p>SIZE</p>
                                </th>
                                <th>
                                  <p>Width(in)</p>
                                </th>
                                <th>
                                  <p>Length(in)</p>
                                </th>
                              </tr>
                              <tr>
                                <td>
                                  <p>S</p>
                                </td>
                                <td>
                                  <p>25.5</p>
                                </td>
                                <td>
                                  <p>27.5</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>M</p>
                                </td>
                                <td>
                                  <p>27</p>
                                </td>
                                <td>
                                  <p>28</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>L</p>
                                </td>
                                <td>
                                  <p>28</p>
                                </td>
                                <td>
                                  <p>28.75</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>XL</p>
                                </td>
                                <td>
                                  <p>30.5</p>
                                </td>
                                <td>
                                  <p>29.5</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>XXL</p>
                                </td>
                                <td>
                                  <p>32.5</p>
                                </td>
                                <td>
                                  <p>30.5</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div id="Size" className="position-relative">
                  <button
                    type="button"
                    className="btn-size text-center w-100"
                    onClick={() => setShowSizes(!showSizes)}
                  >
                    Size: {sizes}
                  </button>

                  <div
                    className={`position-absolute w-100 border border-light size-wrapper ${
                      showSizes ? "d-grid" : "d-none"
                    }`}
                    id="sizes"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setSizes("S");
                        setShowSizes(false);
                      }}
                      className="w-100 position-relative border border-light border-start-0 border-top-0 all-sizes"
                    >
                      S
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSizes("M");
                        setShowSizes(false);
                      }}
                      className="w-100 position-relative border border-light border-top-0 border-start-0 border-end-0 all-sizes"
                    >
                      M
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSizes("L");
                        setShowSizes(false);
                      }}
                      className="w-100 border border-light border-top-0 border-start-0 position-relative all-sizes"
                    >
                      L
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSizes("XL");
                        setShowSizes(false);
                      }}
                      className="w-100 border border-light border-top-0 border-start-0 border-end-0 position-relative all-sizes"
                    >
                      XL
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSizes("XXL");
                        setShowSizes(false);
                      }}
                      className="w-100 border border-light border-top-0 border-start-0 border-bottom-0 position-relative all-sizes"
                    >
                      XXL
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="btn-add-to-cart text-center w-100"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </section>
          </Col>
          
          <h2 className="text-center related-products">Related Products</h2>

          {relatedProducts.map((relatedProduct) => (
            <ProductCard
              key={relatedProduct.id}
              productUrl={`/products/${relatedProduct.id}`}
              title={relatedProduct.title}
              price={relatedProduct.price}
              image={relatedProduct.image}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Products;
