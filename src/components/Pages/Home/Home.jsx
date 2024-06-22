import "./home.css";
import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { Expo, gsap } from "gsap";
import albumOne from "../../../assets/img/album_1.jpg";
import albumTwo from "../../../assets/img/album_2.jpg";
import albumThree from "../../../assets/img/album_3.jpg";
import heroVedio from "../../../assets/img/hero-vedio.MP4";
import { Swiper, SwiperSlide } from "swiper/react";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: "3am-on-31st",
    title: "3am on 31st",
    price: "$110.00",
    description: `Album Description.`,
    image: albumOne,
  },
  {
    id: "get-this-way",
    title: "Get This Way",
    price: "$110.00",
    description: `Album Description..`,
    image: albumTwo,
  },
  {
    id: "homes",
    title: "Homes",
    price: "$110.00",
    description: `Album Description..`,
    image: albumThree,
  },
];

const Home = () => {
  let albums = useRef(null);
  let hero = useRef(null);
  let herotxt = useRef(null);
  let spanTxt = useRef(null);

  const [activeTab, setActiveTab] = useState("story");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useGSAP(() => {
    SplitType.create(herotxt.current);
    SplitType.create(spanTxt.current);
    SplitType.create(albums.current);

    gsap.to(hero.current, {
      scale: 1,
      rotate: 0.001,
      ease: Expo.easeInOut,
      duration: 1.75,
    });

    gsap.from("#hero-section .char", {
      yPercent: 100,
      delay: 1,
      duration: 0.5,
      stagger: 0.05,
    });

    gsap.from("#albums .char", {
      scrollTrigger: {
        trigger: "#albums",
        start: "top 80%",
      },
      yPercent: 100,
      delay: 1,
      duration: 0.5,
      stagger: 0.05,
    });
  }, []);

  return (
    <>
      <main id="home">
        <section ref={hero} id="hero-section" className="banner">

          <video src={heroVedio} controls autoPlay loop className="hero-video"></video>

          {/* <div className="hero-txt-container">
            <h1 ref={herotxt}>Tertius AhmaNuph</h1>
          </div>
          <div className="span-txt">
            <h2 ref={spanTxt}>New Album Out Now</h2>
          </div> */}
        </section>

        <section id="albums" className="pt-5">
          <div className="pt-5">
            <div className="album-txt-wrapper">
              <h2 className="text-center" ref={albums}>
                Albums
              </h2>
            </div>

            <p className="text-center font">
              Single and all music albums released
            </p>

            <Container fluid>
              <Row>
                <Col xs="12" sm="12" md="6" xl="6">
                  <div className="wvc-column-container wvc-column-bg-default wvc-column-bg-effect-none wvc-font-inherit wvc-column-font-inherit wvc-column-style-none wvc-border-color-none wvc-background-color-default">
                    <div className="wvc-column-inner">
                      <div className="wvc-column-wrapper wpb_wrapper">
                        <div className="wvc-album-disc wvc-album-disc-align-left wvc-album-disc-cd wvc-album-disc-worn-border-yes wvc-album-disc-rotate-hover-stop wvc-element wvc-album-disc-has-link">
                          <span className="wvc-album-disc-link-mask internal-link"></span>
                          <div className="wvc-album-disc-cover-container">
                            <div
                              className="wvc-album-disc-disc-container wow wvc-album-disc-reveal animated"
                              style={{
                                transitionDelay: "0.4s;",
                                visibility: "visible;",
                              }}
                            >
                              <div
                                className="wvc-album-disc-disc-inner"
                                style={{ animationDuration: "3.5s;" }}
                              >
                                <img
                                  decoding="async"
                                  className="wvc-album-disc-disc-img"
                                  src={albumOne}
                                  width="450"
                                  height="450"
                                  alt="image"
                                  loading="lazy"
                                />
                              </div>
                              <div className="wvc-album-disc-disc-hole"></div>
                            </div>
                          </div>
                          <div className="wvc-album-disc-cover-inner">
                            <img
                              decoding="async"
                              className="wvc-album-disc-cover-img"
                              src={albumOne}
                              width="550"
                              height="500"
                              alt="cd-cover"
                              title="cd-cover"
                              loading="lazy"
                            />
                            <div className="wvc-album-disc-cover-border"></div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="wvc-text-block wvc-clearfix wvc-element wvc-mobile-text-align- wvc-wow fadeIn"
                        style={{
                          animationDelay: "0.2s;",
                          visibility: "visible;",
                          animationName: "fadeIn",
                        }}
                      ></div>
                    </div>
                  </div>
                </Col>
                <Col xs="12" sm="12" md="6" xl="6" style={{ margin: "auto" }}>
                  <div className="head">
                    <ul className="d-flex flex-wrap align-items-center">
                      <li
                        className={`story ${
                          activeTab === "story" ? "active" : ""
                        }`}
                        onClick={() => handleTabChange("story")}
                      >
                        The Story
                      </li>
                      <li
                        className={`concept ${
                          activeTab === "concept" ? "active" : ""
                        }`}
                        onClick={() => handleTabChange("concept")}
                      >
                        The Concept
                      </li>
                      <li
                        className={`sound ${
                          activeTab === "sound" ? "active" : ""
                        }`}
                        onClick={() => handleTabChange("sound")}
                      >
                        The Sound
                      </li>
                    </ul>

                    <p className={activeTab === "story" ? "" : "d-none"}>
                      <ol>
                        <li>
                          “Get This Way” <br />
                          About wanting a lover to hear one’s cry for
                          companionship & the willingness to face all feats to
                          have & maintain it.
                        </li>
                        <br />
                        <li>
                          “3am On Jan 31st” <br />
                          About wanting to be recognized as more than just an
                          ex-lover who one talks to about loneliness & normal
                          people issues, even though one side feels wrong
                          overall.
                        </li>
                        <br />
                        <li>
                          “Lonely Homes” <br />
                          About recognizing the lack of companionship in a
                          genuine form. Feeling disconnected from the world
                          willingly & unwillingly; setting oneself apart.
                          Emptiness within a place meant to be full & lively.
                          Shaderah
                        </li>
                      </ol>
                    </p>

                    <p className={activeTab === "concept" ? "" : "d-none"}>
                      <ol>
                        <li>
                          “Get This Way” <br />
                          Written while traveling long lonely drives for work as
                          a CDL professional, the song is a representation of
                          the reality of wanting a good partner & the
                          willingness to maintain a good relationship behavior.
                          Based upon past failed relationship experiences with
                          others.
                        </li>
                        <br />
                        <li>
                          “3am On Jan 31st” <br />
                          Stemming from a late night conversation with an
                          ex-lover during what some people call “scary hours” in
                          hopes to soothe human urges through another person.
                        </li>
                        <br />
                        <li>
                          “Lonely Homes” <br />
                          Came from a larger project being written, mainly to be
                          seen as a piece of said project in regard to how
                          Shaderah was feeling throughout her to date life.
                        </li>
                      </ol>
                    </p>

                    <p className={activeTab === "sound" ? "" : "d-none"}>
                      <ol>
                        <li>
                          “Get This Way” <br />
                          consectetur iste maxime natus repellat ad recusandae laboriosam laborum nesciunt consequatur dolore quisquam dolores tenetur ab.
                        </li>
                        <br />
                        <li>
                          “3am On Jan 31st” <br />
                          consectetur iste maxime natus repellat ad recusandae laboriosam laborum nesciunt consequatur dolore quisquam dolores tenetur ab.
                        </li>
                        <br />
                        <li>
                          “Lonely Homes” <br />
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorem pariatur blanditiis? Velit molestiae,
                        </li>
                      </ol>
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>

            <div className="d-flex align-items-center justify-content-center position-relative">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                spaceBetween={100}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
              >
                {products.map((product) => (
                  <SwiperSlide>
                    <NavLink to={`/products/${product.id}`}>
                      <img src={product.image} alt="album one" />
                    </NavLink>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
