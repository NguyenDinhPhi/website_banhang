import React from "react";
import { Col, Container, NavItem, NavLink, Row } from "reactstrap";
import "../styles/pro_detail.css";
const ProductDetail = () => {
  return (
    <div>
      <section>
        <div className="bread_crumb">
          <Container>
            <Row>
              <Col lg="12">
                <NavItem className="breadcrumb">
                  <NavLink href="#">Trang chủ /</NavLink>
                </NavItem>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section>
        <Container>
          <Row>
            <div className="details_product">
              <Col lg="12">
                <Row>
                  <Col lg="5" className="product_detail_left">
                    <div className="large_image">
                      <NavLink href="#"></NavLink>
                    </div>
                  </Col>
                  <Col lg="7" className="details_pro">
                    <h1 className="title_product">
                      DOUBLE NECK WAFFLE POLO SHIRTS - BLACK
                    </h1>
                    <div className="group_status">
                      <span className="first_status">
                        <span className="a_name">Thương hiệu:</span>
                        <span className="status_name">NEEDS OF WISDOM®</span>
                        <span class="hidden-xs">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                      </span>
                      <span className="first_status">
                        <span className="a_name">Tình trạng:</span>
                        <span className="status_name">Còn hàng</span>
                      </span>
                    </div>
                    <div className="price_box">
                      <span className="special_price">
                        <span className="product_price_dt">399.000₫</span>
                      </span>
                      <span className="old_price">
                        <del
                          class="price product-price-old sale"
                          itemprop="priceSpecification"
                        >
                          450.000₫
                        </del>
                      </span>
                    </div>
                    <div class="product-summary product_description">
                      <div class="rte description text3line">
                        NEEDS OF WISDOM® / Streetwear / Based in Saigon / Made
                        in Vietnam
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ProductDetail;
