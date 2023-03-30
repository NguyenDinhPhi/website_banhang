import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Nav, NavItem, NavLink, Row } from "reactstrap";
import "../styles/all.css";
import { getImagePath } from "../utillis/index";
import { addProduct } from "../store/ProductSlice";

import { useSelector, useDispatch } from "react-redux";

const All = () => {
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const callApi = async () => {
      const result = await axios.get("http://localhost:3000/product");
      console.log(result.data);
      setProductList(result.data);
    };
    callApi();
  }, []);

  const onAddProduct = (product) => () => {
    dispatch(addProduct(product));
    // console.log();
  };

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
            <Col lg="3">
              <div className="list_sidebar">
                <div className="list_item">
                  <div className="title_list">
                    <h2>
                      <span>Danh mục sản phẩm</span>
                    </h2>
                  </div>
                  <div className="content_list">
                    <Nav vertical>
                      <NavItem>
                        <NavLink active href="#">
                          ALL ITEMS
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">TEE</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">BOTTOM</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">JACKET</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">HOODIE</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">SWEATER</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">CAP</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">SHIPTS</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">ACCESSORIES</NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="9">
              <h1 className="title_page">Tất cả sản phẩm</h1>

              <div className="cartegory_product">
                <div className="sortPagiBar"></div>

                <hr className="dongke" />
                <section className="products_view">
                  <Row>
                    {productList.map((e) => (
                      <Col lg="4" xs="4" sm="4" md="4">
                        <div className="item_product_main mt-4">
                          <div className="product_box">
                            <div className="product_thumbnail">
                              <div className="sale_top">-20%</div>
                              <a href="#" className="image_thumb">
                                <div className="product_image">
                                  <img
                                    src={getImagePath(e.image_1)}
                                    alt={e.name}
                                  />
                                </div>
                                <div className="second_image">
                                  <img
                                    src={getImagePath(e.image_2)}
                                    alt={e.name}
                                  />
                                </div>
                              </a>
                            </div>
                            <div className="product_info">
                              <h3 className="product_name">
                                <a href="#">{e.name}</a>
                              </h3>
                              <div className="product_item_price">
                                <span className="special_price">
                                  <span className="product_price">
                                    {e.price}.000₫
                                  </span>
                                </span>
                                <span className="special_price_sale">
                                  <span className="product_price_old">
                                    399.000₫
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div>
                              <Button onClick={onAddProduct(e)} color="primary">
                                Mua
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </section>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default All;
