import "./style.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, Expo } from "gsap";
import { Container, Row, Col } from "react-bootstrap";
// import { Row, Col } from "react-bootstrap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import CSSPlugin from "gsap/CSSPlugin";
import SplitType from "split-type";

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Fancybox from "../Fancybox.jsx";
import gallaryImgOne from "./images/image1.jpeg";
import gallaryImgTwo from "./images/image2.jpeg";
import gallaryImgThree from "./images/image3.jpeg";
import gallaryImgThirteen from "./images/image13.jpeg";
import gallaryImgTwelve from "./images/image12.jpeg";
import gallaryImgFour from "./images/image4.jpeg";
import gallaryImgFive from "./images/image5.jpeg";
import gallaryImgSix from "./images/image6.jpeg";
import gallaryImgSeven from "./images/image7.jpeg";

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin, CSSPlugin);

const Gallery = () => {
  const meet = useRef(null);
  const owner = useRef(null);
  const about = useRef(null);
  const gal = useRef(null);
  const imgGal = useRef(null);
  const slider = useRef(null);
  const sliderWrapper = useRef(null);

  let imageReveal = CSSRulePlugin.getRule(".imageContainer:after");

  // useGSAP(() => {
  //   SplitType.create(meet.current);

  //   const tl = gsap.timeline();

  //   tl.to(imageReveal, {
  //     duration: 1.4,
  //     top: "100%",
  //     ease: Expo.easeInOut,
  //     delay: 1.5,
  //   }).from(".gal-img", {
  //     scale: 1.6,
  //     ease: Expo.easeInOut,
  //     delay: -1.4,
  //     duration: 1.4,
  //   });

  //   const tlT = gsap.timeline();

  //   tlT.set(".char", {
  //     yPercent: 100,
  //     rotate: 0.001,
  //   });

  //   tlT.set(gal.current, {
  //     yPercent: 100,
  //     rotate: 0.001,
  //     opacity: 0,
  //   });

  //   tlT.set(imgGal.current, {
  //     yPercent: 100,
  //     rotate: 0.001,
  //     opacity: 0,
  //   });

  //   tlT.set(meet.current.children, {
  //     overflow: "hidden",
  //   });

  //   tlT.to(
  //     ".char",
  //     {
  //       yPercent: 0,
  //       rotate: 0.001,
  //       stagger: 0.05,
  //       ease: Expo.easeOut,
  //       duration: 1.5,
  //     },
  //     "cool kids"
  //   );

  //   tlT.to(
  //     gal.current,
  //     {
  //       yPercent: 0,
  //       opacity: 1,
  //       rotate: 0.001,
  //       duration: 1.5,
  //       ease: Expo.easeOut,
  //       delay: 0.45,
  //     },
  //     "cool kids"
  //   );

  //   tlT.to(
  //     imgGal.current,
  //     {
  //       yPercent: 0,
  //       opacity: 1,
  //       rotate: 0.001,
  //       duration: 1.5,
  //       ease: Expo.easeOut,
  //       delay: 0.7,
  //     },
  //     "cool kids"
  //   );
  // }, []);

  useGSAP(() => {

    SplitType.create(meet.current);
    SplitType.create(owner.current);

    gsap.set(".char", {
      yPercent: 100,
    });

    gsap.set("p .word", {
      yPercent: 100,
    });

    gsap.set(".lines", {
      yPercent: 100,
    });

    function getScrollAmount() {
      let sliderWidth = sliderWrapper.current.scrollWidth;
      return -(sliderWidth - window.innerWidth);
    }

    const tween = gsap.to(sliderWrapper.current, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: slider.current,
      start: "top 90px",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
    });

    gsap.to("h3 .char", {
      yPercent: 0,
      rotate: 0.001,
      stagger: 0.05,
      ease: Expo.easeOut,
      duration: 1.5,
      delay: .5
    },);

    gsap.to("h2 .char", {
      yPercent: 0,
      rotate: 0.001,
      stagger: 0.05,
      ease: Expo.easeOut,
      duration: 1.5,
      delay: .5
    },);

    gsap.to(".lines", {
      yPercent: 0,
      rotate: 0.001,
      stagger: 0.05,
      ease: Expo.easeOut,
      duration: 1.5,
      delay: .5
    },);
  }, [])

  return (
    // <main id="gallery">
    //   <h2 className="text-center pt-5" ref={meet}>
    //     Meet SHADERAH Dey-Al
    //   </h2>
    //   <p className="text-center pb-5" ref={gal}>
    //     Gallery
    //   </p>

    //   <div class="mosaic-gallery">
    //     <Fancybox
    //       options={{
    //         Carousel: {
    //           infinite: false,
    //         },
    //       }}>

    //       <Row ref={imgGal}>
    //         <Col xs="12" sm="12" md="6" lg="4" className="img-column">
    //           <div className="imageContainer">
    //             <a href={gallaryImgOne} data-fancybox="gallery">
    //               <img src={gallaryImgOne} alt="image" className="gal-img" />
    //             </a>
    //           </div>
    //         </Col>
    //         <Col xs="12" sm="12" md="6" lg="4" className="img-column">
    //           <div className="imageContainer">
    //             <a href={gallaryImgSeven} data-fancybox="gallery">
    //               <img src={gallaryImgSeven} alt="image" className="gal-img" />
    //             </a>
    //           </div>
    //         </Col>
    //         <Col xs="12" sm="12" md="6" lg="4" className="img-column">
    //           <div className="imageContainer">
    //             <a href={gallaryImgFive} data-fancybox="gallery">
    //               <img src={gallaryImgFive} alt="image" className="gal-img" />
    //             </a>
    //           </div>
    //         </Col>
    //         <Col xs="12" sm="12" md="6" lg="4" className="img-column" id="img">
    //           <div className="imageContainer">
    //             <a href={gallaryImgSix} data-fancybox="gallery">
    //               <img src={gallaryImgSix} alt="image" className="gal-img" />
    //             </a>
    //           </div>
    //         </Col>
    //         <Col xs="12" sm="12" md="6" lg="4" className="img-column">
    //           <div className="imageContainer">
    //             <a href={gallaryImgFour} data-fancybox="gallery">
    //               <img src={gallaryImgFour} alt="image" className="gal-img" />
    //             </a>
    //           </div>
    //         </Col>
    //         <Col xs="12" sm="12" md="6" lg="4" className="img-column">
    //           <div className="imageContainer">
    //             <a href={gallaryImgTwelve} data-fancybox="gallery">
    //               <img src={gallaryImgTwelve} alt="image" className="gal-img" />
    //             </a>
    //           </div>
    //         </Col>
    //         <Col xs="12" sm="12" md="6" lg="4" className="img-column">
    //           <div className="imageContainer">
    //             <a href={gallaryImgTwo} data-fancybox="gallery">
    //               <img src={gallaryImgTwo} alt="image" className="gal-img" />
    //             </a>
    //           </div>
    //         </Col>
    //         <Col xs="12" sm="12" md="6" lg="4" className="img-column">
    //           <div className="imageContainer">
    //             <a href={gallaryImgThree} data-fancybox="gallery">
    //               <img src={gallaryImgThree} alt="image" className="gal-img" />
    //             </a>
    //           </div>
    //         </Col>
    //         <Col xs="12" sm="12" md="6" lg="4" className="img-column">
    //           <div className="imageContainer">
    //             <a href={gallaryImgThirteen} data-fancybox="gallery">
    //               <img
    //                 src={gallaryImgThirteen}
    //                 alt="image"
    //                 className="gal-img"
    //               />
    //             </a>
    //           </div>
    //         </Col>
    //       </Row>
    //     </Fancybox>
    //   </div>
    // </main>

    // <main id="gallery">
    //   <h2 className="text-center pt-5" ref={meet}>
    //     Meet SHADERAH Dey-Al
    //   </h2>
    //   <p className="text-center pb-5" ref={gal}>
    //     Gallery
    //   </p>

    //   <section className="section">
    //     <div class="line"></div>
    //     <div class="line"></div>
    //     <div class="line"></div>
    //   </section>

    //   <section className="section" ref={imgGal}>
    //     <div class="img"></div>
    //     <div class="img"></div>
    //     <div class="img"></div>
    //     <div class="img"></div>
    //     <div class="img"></div>
    //     <div class="img"></div>
    //     <div class="img"></div>
    //     <div class="img"></div>
    //     <div class="img"></div>
    //   </section>
    // </main>

    <main id="gallery">
      <Container fluid>

        <div className="slider" ref={slider}>
          <div className="slider-wrapper" ref={sliderWrapper}>

            <div className="slide">
              <img src={gallaryImgOne} alt="image" />
            </div>

            <div className="slide meet-txt">
              <h3 ref={meet}>Meet</h3>
              <h2 ref={owner}>
                SHADERAH Dey-Al
              </h2>
              <p ref={about}>
                <div className="line-wrapper">
                  <div className="lines">
                    A pop and r&b artist with a fresh and creative approach to making music with a deeper meaning.
                  </div>
                </div>

                <div className="line-wrapper">
                  <div className="lines">
                    Surface level artistry is a thing of the past when this artists masterpieces enter the conversation. As
                  </div>
                </div>

                <div className="line-wrapper">
                  <div className="lines">
                    the founder of Third Dim9nsion, Shadera is also well versed in both the artistic and creative side of
                  </div>
                </div>

                <div className="line-wrapper">
                  <div className="lines"> music business, which fuels her passion to help as many other artist as possible.</div>
                </div>
              </p>
            </div>

            <div className="slide">
              <img src={gallaryImgTwo} alt="image" />
            </div>

            <div className="slide">
              <img src={gallaryImgThree} alt="image" />
            </div>

            <div className="slide">
              <img src={gallaryImgThirteen} alt="image" />
            </div>

            <div className="slide">
              <img src={gallaryImgTwelve} alt="image" />
            </div>

            <div className="slide">
              <img src={gallaryImgFour} alt="image" />
            </div>

            <div className="slide">
              <img src={gallaryImgFive} alt="image" />
            </div>

            <div className="slide">
              <img src={gallaryImgSix} alt="image" />
            </div>

            <div className="slide">
              <img src={gallaryImgSeven} alt="image" />
            </div>

          </div>
        </div>

      </Container>
    </main>
  );
};

export default Gallery;
