import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

const Footer = () => {

  const {pathname} = useLocation();

  return (
    <>
      <footer className={`${pathname == "/room" ? "d-none" : "d-block"}`}>
        <Container className="pb-5 footer-container" fluid>
          <Row>
            <Col md="12">
              <h2 className="text-center py-3">Tertius AhmaNuph</h2>
            </Col>
            <Col>
              <p className="text-base">Subscribe</p>
              <p className="text-xs">
                Receive email updates about launches, new product info,
                exclusive access, and more.
              </p>
              <form className="d-flex w-full text-center">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  className="outline-none text-xs email border-black border"
                />
                <button className="bg-white text-black btn-submit h-10 ms-2">
                  Submit
                </button>
              </form>
            </Col>

            <Col>
              <ul className="text-end sites">
                <li>
                  <NavLink to={"/terms-of-service"}>Terms & Conditions</NavLink>
                </li>
                <li>
                  <NavLink to={"/privacy-policy"}>Privacy Policy</NavLink>
                </li>
                <li>
                  <NavLink to={"/faqs"}>FAQs</NavLink>
                </li>
              </ul>
            </Col>

            <Col>
              <ul className="text-end social">
                <li>
                  <a
                    href={"https://www.instagram.com/shaderahdeyal?igsh=MW91OG5ndmJiaTlxZA%3D%3D&utm_source=qr"}
                    target="_blank">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href={"https://www.facebook.com/share/VhvQaeAjtwL1W9o2/?mibextid=LQQJ4d"}
                    target="_blank">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href={"https://www.tiktok.com/@shaderahdeyal?_t=8mgHauBCkuM&_r=1"} target="_blank">
                    TikTok
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
