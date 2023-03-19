import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../../styles/footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="topfooter">
          <Container>
            <div className="top_footer">
              <Row className="d-flex justify-content-end ">
                <Col lg="2" md='2' >
                  <h4>
                    <span>Follow Us</span>
                  </h4>
                  <div className="social">
                    <a href="#">
                      <i class="ri-facebook-fill"></i>
                    </a>
                    <a href="#">
                      <i class="ri-instagram-line"></i>
                    </a>
                  </div>
                </Col>
                <Col lg="2" md='3' sm='3' xs='12'>
                  <h4>
                    <span>Hướng dẫn</span>
                  </h4>
                  <ul className="toggle-mn">
                    <li>
                      <a href="#">Điều khoản</a>
                    </li>
                    <li>
                      <a href="#">Hướng dẫn mua hàng</a>
                    </li>
                    <li>
                      <a href="#"> Chính sách đổi trả</a>
                    </li>
                    <li>
                      <a href="#">bảo mật thông tin KH</a>
                    </li>
                    <li>
                      <a href="#">Chính sách thanh toán</a>
                    </li>
                  </ul>
                </Col>
                <Col lg="4">
                  <h4>
                    <span>Contact Us</span>
                  </h4>
                  <div className="fot_contact">
                    <div className="fot_contact_item">
                      <span>
                        <i class="ri-map-pin-line"></i>
                      </span>
                      <p>Store I: 445 Sư Vạn Hạnh, P.12, Q.10.</p>
                    </div>
                    <div className="fot_contact_item">
                      <span>
                        <i class="ri-map-pin-line"></i>
                      </span>
                      <p>Store II: 48 Trần Quang Diệu, P.14, Q.3, TP.HCM</p>
                    </div>
                    <div className="fot_contact_item">
                      <span>
                        <i class="ri-map-pin-line"></i>
                      </span>
                      <p>Store III: 463 Quang Trung, P.10, Q.Gò Vấp, TP.HCM</p>
                    </div>
                    <div className="fot_contact_item">
                      <span>
                        <i class="ri-map-pin-line"></i>
                      </span>
                      <p>Store IV: G-Town 1, 350 Điện Biên Phủ, P.17, Q.Bình Thạnh, TP.HCM</p>
                    </div>
                    <div className="fot_contact_item">
                      <span>
                        <i class="ri-map-pin-line"></i>
                      </span>
                      <p>Store V: G-Town 2, 136 Nguyễn Hồng Đào, P.14, Q.Tân Bình, TP.HCM</p>
                    </div>
                    <div className="fot_contact_item">
                      <span>
                        <i class="ri-map-pin-line"></i>
                      </span>
                      <p>Store VI: TNP 26LTT - 26 Lý Tự Trọng, P.Bến Nghé, Q.1, TP.HCM</p>
                    </div>
                    <div className="fot_contact_item">
                      <span>
                        <i class="ri-map-pin-line"></i>
                      </span>
                      <p>Store VII: TNP - Sense Market, Đối diện số 90 Lê Lai, P.Bến Nghé, Q.1, TP.HCM.</p>
                    </div>
                    <div className="fot_contact_item">
                      <span>
                        <i class="ri-map-pin-line"></i>
                      </span>
                      <p>Biên Hoà: Vincom Biên Hoà - Shop House, PG2-06, 1096 Phạm Văn Thuận, Tân Mai, Biên Hoà.</p>
                    </div>
                    <div className="fot_contact_item">
                      <span>
                        <i class="ri-map-pin-line"></i>
                      </span>
                      <p>Cần Thơ: Vincom Xuân Khánh - Shop House, PG2-08, Đường 30 tháng 4, Xuân Khánh, Cần Thơ.</p>
                    </div>
                    
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="bottom_footer">
          <Container>
            <Row>
              <Col lg='12'>
                <p className="wsp d-flex justify-content-center">
                  <span>Needs Of Wisdom® All Rights Reserved.</span>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
