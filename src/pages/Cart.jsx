import React from "react";
import { Col, Container, NavItem, Row, NavLink, Table } from "reactstrap";
import "../styles/cart.css";
const Cart = () => {
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
            <Col lg="12">
              <h1 className="title_head">
                <span className="padding">Giỏ hàng của bạn</span>
              </h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="main_card_page">
        <Container className="main">
          <div className="cart_page">
            <div className="cart">
              <div className="app_cart"></div>
              <Table bordered>
                <thead className="cart_thead">
                  <tr>
                    <th style={{ width: 210 }}>Ảnh sản phẩm</th>
                    <th style={{ width: 375 }}>Tên sản phẩm</th>
                    <th style={{ width: 200 }}>Đơn giá</th>
                    <th style={{ width: 165 }}>Số lượng</th>
                    <th style={{ width: 165 }}>Thành tiền</th>
                    <th style={{ width: 60 }}>Xoá</th>
                  </tr>
                </thead>
                <tbody className="cart_tbody">
                  <tr>
                    <td className="image">
                      <NavLink href="#" className="product_img">
                        <img
                          src="https://bizweb.dktcdn.net/thumb/grande/100/318/614/products/polo-1-compressed.jpg?v=1677223413000"
                          alt=""
                        />
                      </NavLink>
                    </td>
                    <td className="flex-column align-items-center ">
                      <h3 className="product_name">
                        <NavLink href="#" className="product_image">
                          DOUBLE NECK WAFFLE POLO SHIRTS - BLACK
                        </NavLink>
                      </h3>
                      <span className="variant_title">S</span>
                    </td>
                    <td>
                      <span className="price">399.000₫</span>
                    </td>
                    <td>
                      <div className="cart__item__info__quantity">
                        <div className="product__info__item__quantity d-flex ">
                          <div className="product__info__item__quantity__btn">
                            -
                          </div>
                          <div className="product__info__item__quantity__input">
                            1
                          </div>
                          <div className="product__info__item__quantity__btn">
                            +
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="price">399.000₫</span>
                    </td>
                    <td>
                      <NavLink href="#" className="remove_itemx">
                        <span>
                          <i class="ri-delete-bin-line"></i>
                        </span>
                      </NavLink>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Row>
                <Col lg="7">
                  <div className="form-cart-button">
                    <NavLink href="#" className="form-cart-continue">
                      Tiếp tục mua hàng
                    </NavLink>
                  </div>
                </Col>
                <Col lg="5">
                  <div className="table_total">
                    <Table bordered className="table">
                      <tbody>
                        <tr>
                          <td>Tạm tính</td>
                          <td className="a-right">399.000₫</td>
                        </tr>
                        <tr>
                          <td>Tổng tiền thanh toán</td>
                          <td className="a-right price_end">399.000₫</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                  <NavLink href="#" className="btn-checkout-cart">
                    Tiến hành thanh toán
                  </NavLink>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Cart;
