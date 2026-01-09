import Breadcrumbs from "@/components/Breadcrumbs";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giới thiệu - Công ty Cầu Trục Hoà An",
  description: "Danh sách các sản phẩm PA LĂNG XÍCH ĐIỆN...",
};

function GioiThieu() {
  return (
    <>
      <div id="ja-khungchinh">
        <div className="main">
          <Header />
          <Breadcrumbs
            items={[{ label: "Giới thiệu", url: "/gioi-thieu" }]}
            backgroundImage="/images/background-footer-top.jpg"
          />
          <div id="ja-noidunggiua" className="noleft ">
            <div className="main2">
              <div id="" className="px-4 md:px-0">
                <div className="errorclass" style={{ display: "none" }}>
                  <div id="system-message-container"></div>
                </div>
                <div className="noidungtren1"></div>
                <div className="noidungtren2"></div>
                <div className="ja-workshome trangctbv">
                  <div
                    className="workshome-title"
                    style={{ fontSize: "26px", color: "#0080ff" }}
                  >
                    <h1>
                      <span>Giới thiệu</span>
                    </h1>
                  </div>
                  <div className="workshome-content">
                    <div
                      id="k2Container"
                      className="itemView lienhe temp_lienhe trangcon"
                    >
                      <div className="itemBody">
                        <div className="itemImageBlock">
                          <span className="itemImage">
                            <a
                              className="modal"
                              rel="{handler: 'image'}"
                              href="media/k2/items/cache/938a195f8810cb9b31c6503221891897_XL.jpg"
                              title="Click vào để xem hình ảnh"
                            >
                              <img
                                src="media/k2/items/cache/938a195f8810cb9b31c6503221891897_S.jpg"
                                alt="Giới thiệu"
                                style={{ width: 200, height: "auto" }}
                              />
                            </a>
                          </span>
                        </div>
                        <div className="itemFullText">
                          <h1
                            className="title-head"
                            style={{
                              boxSizing: "border-box",
                              paddingBottom: 15,
                              fontSize: 24,
                              fontFamily: "Arial, Helvetica, sans-serif",
                              lineHeight: "1.1",
                              color: "#209dee",
                              marginBlockStart: "0.67em",
                            }}
                          >
                            <span
                              style={{
                                boxSizing: "border-box",
                                color: "#000000",
                              }}
                            >
                              <span
                                style={{
                                  boxSizing: "border-box",
                                  fontSize: 16,
                                  fontFamily: "arial, helvetica, sans-serif",
                                  lineHeight: "24px",
                                }}
                              >
                                <span style={{ boxSizing: "border-box" }}>
                                  CÔNG TY Cầu Trục Thang Máy Hoa Long&nbsp;
                                </span>
                              </span>
                              <span
                                style={{
                                  boxSizing: "border-box",
                                  fontSize: 16,
                                  fontFamily: "arial, helvetica, sans-serif",
                                  lineHeight: "24px",
                                }}
                              >
                                nhận thức sâu sắc rằng “Khách hàng tạo nên công
                                ty”, vì thế sự tín nhiệm của khách hàng và của
                                các đối tác trong thời gian qua là những gì lớn
                                nhất mà chúng tôi đã có! Cùng với năng lực và uy
                                tín của mình, chúng tôi đã và sẽ luôn nỗ lực
                                không ngừng để cung cấp cho Qúy khách hàng những
                                sản phẩm và dịch vụ tốt nhất với chi phí hợp lý
                                nhất.
                              </span>
                            </span>
                          </h1>
                          <div
                            className="nd"
                            style={{
                              boxSizing: "border-box",
                              color: "#333333",
                              fontFamily: "Arial, Helvetica, sans-serif",
                              fontSize: 14,
                            }}
                          >
                            <div
                              className="title"
                              style={{
                                boxSizing: "border-box",
                                marginBottom: 5,
                                fontFamily: "Arial",
                                outline: 0,
                                verticalAlign: "baseline",
                              }}
                            >
                              <p
                                style={{
                                  boxSizing: "border-box",
                                  margin: "0px 0px 10px",
                                  padding: 0,
                                  color: "#333333",
                                  fontSize: 11,
                                  fontFamily: "Arial, Helvetica, sans-serif",
                                }}
                              >
                                <span
                                  style={{
                                    boxSizing: "border-box",
                                    color: "#000000",
                                  }}
                                >
                                  <span
                                    style={{
                                      boxSizing: "border-box",
                                      fontFamily:
                                        "arial, helvetica, sans-serif",
                                    }}
                                  >
                                    <span
                                      style={{
                                        boxSizing: "border-box",
                                        fontSize: 16,
                                      }}
                                    >
                                      Hãy liên hệ với chúng tôi hoặc gửi cho
                                      chúng tôi nhu cầu của bạn, đó là những cơ
                                      hội và niềm vinh dự mà chúng tôi trân
                                      trọng hàng ngày!
                                    </span>
                                  </span>
                                </span>
                              </p>
                              <h4 style={{ fontSize: 14, textAlign: "center" }}>
                                CẦU TRỤC THANG MÁY HOA LONG
                              </h4>
                              <div style={{ textAlign: "center" }}>
                                <span style={{ fontSize: "110%" }}>
                                  <strong>Địa chỉ :</strong>&nbsp;78/18/8 Bùi
                                  Thị Cội, KP Đông An, P. Tân Đông Hiệp, TP Dĩ
                                  An, Bình Dương
                                </span>
                              </div>
                              <div style={{ textAlign: "center" }}>
                                <span style={{ fontSize: "110%" }}>
                                  <strong>Hotline :&nbsp;</strong>
                                  <a href="tel:0907558123">090 7558123</a>
                                </span>
                              </div>
                              <div style={{ textAlign: "center" }}>
                                <span style={{ fontSize: "110%" }}>
                                  <strong>Email :&nbsp;</strong>
                                  <a href="mailto:hoalongcrane@gmail.com">
                                    hoalongcrane@gmail.com
                                  </a>
                                </span>
                              </div>
                              <p
                                style={{
                                  boxSizing: "border-box",
                                  margin: "0px 0px 10px",
                                  padding: 0,
                                  fontSize: 11,
                                  fontFamily: "Arial, Helvetica, sans-serif",
                                  textAlign: "center",
                                }}
                              >
                                <span style={{ fontSize: "140%" }}>
                                  <strong
                                    style={{
                                      fontFamily: "Arial",
                                      fontSize: 14,
                                    }}
                                  >
                                    Website :&nbsp;
                                  </strong>
                                  <a
                                    href="www.cautructhangmayhoalong.html"
                                    style={{
                                      fontFamily: "Arial",
                                      fontSize: 14,
                                    }}
                                  >
                                    www.cautructhangmayhoalong.com
                                  </a>
                                </span>
                              </p>
                              <p
                                style={{
                                  boxSizing: "border-box",
                                  margin: "0px 0px 10px",
                                  padding: 0,
                                  color: "#333333",
                                  fontSize: 11,
                                  fontFamily: "Arial, Helvetica, sans-serif",
                                  textAlign: "center",
                                }}
                              >
                                <span
                                  style={{
                                    boxSizing: "border-box",
                                    color: "#000000",
                                    fontSize: "120%",
                                  }}
                                >
                                  <span
                                    style={{
                                      boxSizing: "border-box",
                                      fontFamily:
                                        "arial, helvetica, sans-serif",
                                    }}
                                  >
                                    <span style={{ boxSizing: "border-box" }}>
                                      <span
                                        style={{
                                          boxSizing: "border-box",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        <em style={{ boxSizing: "border-box" }}>
                                          &nbsp;
                                        </em>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </p>
                              <p>
                                <span
                                  style={{
                                    boxSizing: "border-box",
                                    color: "#000000",
                                  }}
                                >
                                  <span
                                    style={{
                                      boxSizing: "border-box",
                                      fontFamily:
                                        "arial, helvetica, sans-serif",
                                    }}
                                  >
                                    <span
                                      style={{
                                        boxSizing: "border-box",
                                        fontSize: 16,
                                      }}
                                    >
                                      <span
                                        style={{
                                          boxSizing: "border-box",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        <em style={{ boxSizing: "border-box" }}>
                                          &nbsp;
                                        </em>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </p>
                            </div>
                          </div>{" "}
                        </div>
                        <div className="facecomment"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bvcungmuc"></div>{" "}
                <div className="noidungduoi1"></div>
                <div className="noidungduoi2"></div>
              </div>
              <div id="ja-cotphai">
                <div className="ja-workshome" id="Mod410">
                  <div className="workshome-title">
                    <h2>
                      <span>Danh mục sản phẩm</span>
                    </h2>
                  </div>
                  <div className="workshome-content">
                    <ul className="menu">
                      <li className="">
                        <a href="san-nang-thuy-luc/index.html">
                          Sàn nâng thủy lực
                        </a>
                      </li>
                      <li className="">
                        <a href="nha-container.html">Nhà Thép</a>
                      </li>
                      <li className="deeper parent">
                        <a href="cau-truc.html">Cầu trục</a>
                        <ul>
                          <li className="">
                            <a href="cau-truc-treo/index.html">Cầu trục treo</a>
                          </li>
                          <li className="">
                            <a href="cau-truc-quay/index.html">Cầu trục quay</a>
                          </li>
                          <li className="">
                            <a href="cau-truc-monorail/index.html">
                              Cầu trục Monorail
                            </a>
                          </li>
                          <li className="">
                            <a href="cau-truc-dam-doi/index.html">
                              Cầu trục dầm đôi
                            </a>
                          </li>
                          <li className="">
                            <a href="cau-truc-dam-don/index.html">
                              Cầu trục dầm đơn
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="deeper parent">
                        <a href="cong-truc.html">Cổng trục</a>
                        <ul>
                          <li className="">
                            <a href="ban-cong-truc-dam-doi/index.html">
                              Bán cổng trục dầm đôi
                            </a>
                          </li>
                          <li className="">
                            <a href="ban-cong-truc-dam-don/index.html">
                              Bán cổng trục dầm đơn
                            </a>
                          </li>
                          <li className="">
                            <a href="cong-truc-dam-doi/index.html">
                              Cổng trục dầm đôi
                            </a>
                          </li>
                          <li className="">
                            <a href="cong-truc-dam-don/index.html">
                              Cổng trục dầm đơn
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="deeper parent">
                        <a href="toi-dien-pa-lang/index.html">
                          Tời điện Pa Lang
                        </a>
                        <ul>
                          <li className="">
                            <a href="palang-xich-lac-tay/index.html">
                              Palang xích lắc tay
                            </a>
                          </li>
                          <li className="">
                            <a href="toi-dien-mini/index.html">Tời điện mini</a>
                          </li>
                          <li className="">
                            <a href="toi-keo-mat-dat/index.html">
                              Tời kéo mặt đất
                            </a>
                          </li>
                          <li className="">
                            <a href="palang-xich-keo-tay/index.html">
                              Palang xích kéo tay
                            </a>
                          </li>
                          <li className="">
                            <a href="palang-xich-dien/index.html">
                              Palang xích điện
                            </a>
                          </li>
                          <li className="">
                            <a href="palang-cap-dien-dam-doi/index.html">
                              Palang cáp điện dầm đôi
                            </a>
                          </li>
                          <li className="">
                            <a href="palang-cap-dien-dam-don/index.html">
                              Palang cáp điện dầm đơn
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="deeper parent">
                        <a href="phu-kien-cau-truc/index.html">
                          Phụ kiện cầu trục
                        </a>
                        <ul>
                          <li className="">
                            <a href="rulo-cuon-cap/index.html">Rulo cuốn cáp</a>
                          </li>
                          <li className="">
                            <a href="ray-dien-an-toan/index.html">
                              Ray điện an toàn
                            </a>
                          </li>
                          <li className="">
                            <a href="he-dien-mang-c/index.html">
                              Hệ điện máng C
                            </a>
                          </li>
                          <li className="">
                            <a href="tu-dien-dieu-khien/index.html">
                              Tủ điện điều khiển
                            </a>
                          </li>
                          <li className="">
                            <a href="dam-bien-di-chuyen/index.html">
                              Dầm biên di chuyển
                            </a>
                          </li>
                          <li className="">
                            <a href="dong-co-di-chuyen/index.html">
                              Động cơ di chuyển
                            </a>
                          </li>
                          <li className="">
                            <a href="tay-dieu-khien/index.html">
                              Tay điều khiển
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>{" "}
                  </div>
                </div>
                <div className="ja-workshome" id="Mod422">
                  <div className="workshome-title">
                    <h2>
                      <span>Sản phẩm</span>
                    </h2>
                  </div>
                  <div className="workshome-content">
                    <div className="browse-view">
                      <div className="row">
                        {" "}
                        <div className="blocksp">
                          <div className="spacer">
                            <div className="product-anh">
                              <a href="cau-truc-dam-doi-10-tan-1513-18381419.html">
                                <img
                                  className="browseProductImage"
                                  alt="Cầu trục dầm đơn 1 tấn"
                                  src="images/stories/virtuemart/product/resized/cau-truc-dam-don-1-tan-1_400x400.jpg"
                                />
                              </a>{" "}
                            </div>
                            <div className="product-thongtin">
                              <h3 className="product-thongtin-ten">
                                <a href="cau-truc-dam-doi-10-tan-1513-18381419.html">
                                  Cầu trục dầm đơn 1 tấn
                                </a>
                              </h3>
                              <div
                                className="product-thongtin-salesPrice"
                                data-price={0}
                                data-currency="đ"
                                data-currency-id={147}
                              >
                                Liên hệ
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        {" "}
                        <div className="blocksp">
                          <div className="spacer">
                            <div className="product-anh">
                              <a href="cau-truc-dam-doi-10-tan-1513-1514-19459124.html">
                                <img
                                  className="browseProductImage"
                                  alt="Cầu trục dầm đôi 5 tấn"
                                  src="images/stories/virtuemart/product/resized/bao-gia-cau-truc-5-tan-dan-doi_400x400.jpg"
                                />
                              </a>{" "}
                            </div>
                            <div className="product-thongtin">
                              <h3 className="product-thongtin-ten">
                                <a href="cau-truc-dam-doi-10-tan-1513-1514-19459124.html">
                                  Cầu trục dầm đôi 5 tấn
                                </a>
                              </h3>
                              <div
                                className="product-thongtin-salesPrice"
                                data-price={0}
                                data-currency="đ"
                                data-currency-id={147}
                              >
                                Liên hệ
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        {" "}
                        <div className="blocksp">
                          <div className="spacer">
                            <div className="product-anh">
                              <a href="cau-truc-dam-doi-10-tan-1513-38876517-1516.html">
                                <img
                                  className="browseProductImage"
                                  alt="Pa lăng xích điện"
                                  src="images/stories/virtuemart/product/resized/cau-tao-pa-lang-dien-co-nhung-bo-phan-nao-nguyen-ly-hoat-dong-ra-sao-1-min_400x400.jpg"
                                />
                              </a>{" "}
                            </div>
                            <div className="product-thongtin">
                              <h3 className="product-thongtin-ten">
                                <a href="cau-truc-dam-doi-10-tan-1513-38876517-1516.html">
                                  Pa lăng xích điện
                                </a>
                              </h3>
                              <div
                                className="product-thongtin-salesPrice"
                                data-price={0}
                                data-currency="đ"
                                data-currency-id={147}
                              >
                                Liên hệ
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        {" "}
                        <div className="blocksp">
                          <div className="spacer">
                            <div className="product-anh">
                              <a href="cau-truc-dam-doi-10-tan-1513-1514-1515.html">
                                <img
                                  className="browseProductImage"
                                  alt="Cổng trục quay 3 tấn, 3m"
                                  src="images/stories/virtuemart/product/resized/cau-quay-2.8-tan-3-met_400x400.jpg"
                                />
                              </a>{" "}
                            </div>
                            <div className="product-thongtin">
                              <h3 className="product-thongtin-ten">
                                <a href="cau-truc-dam-doi-10-tan-1513-1514-1515.html">
                                  Cổng trục quay 3 tấn, 3m
                                </a>
                              </h3>
                              <div
                                className="product-thongtin-salesPrice"
                                data-price={0}
                                data-currency="đ"
                                data-currency-id={147}
                              >
                                Liên hệ
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        {" "}
                        <div className="blocksp">
                          <div className="spacer">
                            <div className="product-anh">
                              <a href="cau-truc-dam-doi-10-tan-1513-38876517.html">
                                <img
                                  className="browseProductImage"
                                  alt="Cổng trục dầm đôi 10 tấn"
                                  src="images/stories/virtuemart/product/resized/cong-truc_400x400.jpg"
                                />
                              </a>{" "}
                            </div>
                            <div className="product-thongtin">
                              <h3 className="product-thongtin-ten">
                                <a href="cau-truc-dam-doi-10-tan-1513-38876517.html">
                                  Cổng trục dầm đôi 10 tấn
                                </a>
                              </h3>
                              <div
                                className="product-thongtin-salesPrice"
                                data-price={0}
                                data-currency="đ"
                                data-currency-id={147}
                              >
                                Liên hệ
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        {" "}
                        <div className="blocksp">
                          <div className="spacer">
                            <div className="product-anh">
                              <a href="cau-truc-dam-doi-10-tan-1513-1514.html">
                                <img
                                  className="browseProductImage"
                                  alt="Nhà thép nâng hạ"
                                  src="images/stories/virtuemart/product/resized/z3797108793023_60ce87714cdfecb9ecf9dd337cb0db75_400x400.jpg"
                                />
                              </a>{" "}
                            </div>
                            <div className="product-thongtin">
                              <h3 className="product-thongtin-ten">
                                <a href="cau-truc-dam-doi-10-tan-1513-1514.html">
                                  Nhà thép nâng hạ
                                </a>
                              </h3>
                              <div
                                className="product-thongtin-salesPrice"
                                data-price={0}
                                data-currency="đ"
                                data-currency-id={147}
                              >
                                Liên hệ
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="ja-chantrang">
            <div className="footer1">
              <div className="main2">
                <div className="ja-workshome" id="Mod420">
                  <div className="workshome-title">
                    <h2>
                      <span>CẦU TRỤC THANG MÁY HOA LONG</span>
                    </h2>
                  </div>
                  <div className="workshome-content">
                    <div className="custom">
                      <div
                        className="row align-center krow_footer1"
                        id="row-475677515"
                      >
                        <div className="col kcol_footer_4 kcol_footer_4_first_child padding_bot0_mobile medium-12 small-12 large-4">
                          <div className="col-inner">
                            <div className="box has-hover kimg_box_location  has-hover box-text-bottom">
                              <div className="box-image">
                                <div>
                                  <img
                                    width={27}
                                    height={37}
                                    src="images/location-1.png"
                                    className="attachment- size- lazyloading"
                                    alt="location 1"
                                    loading="lazy"
                                    data-was-processed="true"
                                  />
                                </div>
                              </div>
                              <div className="box-text text-center">
                                <div className="box-text-inner">
                                  <h3 style={{ textAlign: "center" }}>
                                    Địa chỉ
                                  </h3>
                                  <p style={{ textAlign: "center" }}>
                                    VPGD: 78/18/8 Bùi Thị Cội, KP Đông An, P.
                                    Tân Đông Hiệp, TP Dĩ An, Bình Dương
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col kcol_footer_4 padding_bot0_mobile medium-6 small-12 large-4">
                          <div className="col-inner">
                            <div className="box has-hover kimg_box_phone  has-hover box-text-bottom">
                              <div className="box-image">
                                <div>
                                  <img
                                    width={35}
                                    height={34}
                                    src="images/phone.png"
                                    className="attachment- size- lazyloading"
                                    alt="phone"
                                    loading="lazy"
                                    data-was-processed="true"
                                  />
                                </div>
                              </div>
                              <div className="box-text text-center">
                                <div className="box-text-inner">
                                  <h3 style={{ textAlign: "center" }}>
                                    Điện thoại hỗ trợ
                                  </h3>
                                  <p style={{ textAlign: "center" }}>
                                    <a href="tel:0907558123">
                                      090 7558123 - 0357 803 760 (Mr. Trương Chí
                                      Linh)
                                    </a>
                                  </p>
                                  <p style={{ textAlign: "center" }}>
                                    <a href="index.html">
                                      www.cautructhangmayhoalong.com
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col kcol_footer_4 padding_bot0_mobile medium-6 small-12 large-4">
                          <div className="col-inner">
                            <div className="box has-hover kimg_box_mail  has-hover box-text-bottom">
                              <div className="box-image">
                                <div>
                                  <img
                                    width={37}
                                    height={26}
                                    src="images/mail.png"
                                    className="attachment- size- lazyloading"
                                    alt="mail"
                                    loading="lazy"
                                    data-was-processed="true"
                                  />
                                </div>
                              </div>
                              <div className="box-text text-center">
                                <div className="box-text-inner">
                                  <h3 style={{ textAlign: "center" }}>
                                    E-mail
                                  </h3>
                                  <p style={{ textAlign: "center" }}>
                                    hoalongcrane@gmail.com
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer2">
              <div className="main2">
                <div className="footer2_1">
                  <div className="ja-workshome" id="Mod372">
                    <div className="workshome-title">
                      <h2>
                        <span>Bản đồ</span>
                      </h2>
                    </div>
                    <div className="workshome-content">
                      <div className="custom">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.6426031191795!2d106.7773103098399!3d10.914742756583893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d9b81f8307f5%3A0xa757b10dd87f68c!2zNzgvMTgvMjggQsO5aSBUaOG7iyBD4buZaSwgVMOibiDEkMO0bmcgSGnhu4dwLCBExKkgQW4sIELDrG5oIETGsMahbmcsIFZpZXRuYW0!5e0!3m2!1sen!2sus!4v1713775873265!5m2!1sen!2sus"
                          width="100%"
                          height={250}
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer2_2">
                  <div className="ja-workshome" id="Mod421">
                    <div className="workshome-title">
                      <h2>
                        <span>Hình ảnh</span>
                      </h2>
                    </div>
                    <div className="workshome-content">
                      <div className="nivo-gallery">
                        <div
                          className="nivo-gallery-wrapper"
                          id="nivo-gallery421"
                        >
                          <div className="nivo-gallery-row">
                            {" "}
                            <div className="nivo-gallery-block">
                              <a
                                className="nivo-gallery-spacer"
                                href="images/slideshow/cach-su-dubg-cau-truc-an-toan-3-1.jpg"
                                data-fancybox="nivo-gallery-421"
                                data-thumb="images/slideshow/cach-su-dubg-cau-truc-an-toan-3-1.jpg"
                              >
                                <img
                                  className="nivo-gallery-img"
                                  data-parent="nivo-gallery421"
                                  src="images/slideshow/cach-su-dubg-cau-truc-an-toan-3-1.jpg"
                                  alt="cach-su-dubg-cau-truc-an-toan-3-1"
                                />
                              </a>
                            </div>
                            <div className="nivo-gallery-block">
                              <a
                                className="nivo-gallery-spacer"
                                href="images/slideshow/cau-truc-dam-doi-kieu-au-1.jpg"
                                data-fancybox="nivo-gallery-421"
                                data-thumb="images/slideshow/cau-truc-dam-doi-kieu-au-1.jpg"
                              >
                                <img
                                  className="nivo-gallery-img"
                                  data-parent="nivo-gallery421"
                                  src="images/slideshow/cau-truc-dam-doi-kieu-au-1.jpg"
                                  alt="cau-truc-dam-doi-kieu-au-1"
                                />
                              </a>
                            </div>
                            <div className="nivo-gallery-block">
                              <a
                                className="nivo-gallery-spacer"
                                href="images/slideshow/cau-truc-treo-10-tan.gif"
                                data-fancybox="nivo-gallery-421"
                                data-thumb="images/slideshow/cau-truc-treo-10-tan.gif"
                              >
                                <img
                                  className="nivo-gallery-img"
                                  data-parent="nivo-gallery421"
                                  src="images/slideshow/cau-truc-treo-10-tan.gif"
                                  alt="cau-truc-treo-10-tan"
                                />
                              </a>
                            </div>
                            <div className="nivo-gallery-block">
                              <a
                                className="nivo-gallery-spacer"
                                href="images/slideshow/cong-truc-cmi1.jpg"
                                data-fancybox="nivo-gallery-421"
                                data-thumb="images/slideshow/cong-truc-cmi1.jpg"
                              >
                                <img
                                  className="nivo-gallery-img"
                                  data-parent="nivo-gallery421"
                                  src="images/slideshow/cong-truc-cmi1.jpg"
                                  alt="cong-truc-cmi1"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="row">
                            {" "}
                            <div className="nivo-gallery-block">
                              <a
                                className="nivo-gallery-spacer"
                                href="images/slideshow/dac-diem-cau-ato-chuc-nang-cua-cau-truc-quay-1-tan-uu-diem-cua-thiet-bi-nay-1.jpg"
                                data-fancybox="nivo-gallery-421"
                                data-thumb="images/slideshow/dac-diem-cau-ato-chuc-nang-cua-cau-truc-quay-1-tan-uu-diem-cua-thiet-bi-nay-1.jpg"
                              >
                                <img
                                  className="nivo-gallery-img"
                                  data-parent="nivo-gallery421"
                                  src="images/slideshow/dac-diem-cau-ato-chuc-nang-cua-cau-truc-quay-1-tan-uu-diem-cua-thiet-bi-nay-1.jpg"
                                  alt="dac-diem-cau-ato-chuc-nang-cua-cau-truc-quay-1-tan-uu-diem-cua-thiet-bi-nay-1"
                                />
                              </a>
                            </div>
                            <div className="nivo-gallery-block">
                              <a
                                className="nivo-gallery-spacer"
                                href="images/slideshow/cau-truc-dam-doi-kieu-au-1.jpg"
                                data-fancybox="nivo-gallery-421"
                                data-thumb="images/slideshow/cau-truc-dam-doi-kieu-au-1.jpg"
                              >
                                <img
                                  className="nivo-gallery-img"
                                  data-parent="nivo-gallery421"
                                  src="images/slideshow/cau-truc-dam-doi-kieu-au-1.jpg"
                                  alt="cau-truc-dam-doi-kieu-au-1"
                                />
                              </a>
                            </div>
                            <div className="nivo-gallery-block">
                              <a
                                className="nivo-gallery-spacer"
                                href="images/slideshow/monorail-2-tan-2.jpg"
                                data-fancybox="nivo-gallery-421"
                                data-thumb="images/slideshow/monorail-2-tan-2.jpg"
                              >
                                <img
                                  className="nivo-gallery-img"
                                  data-parent="nivo-gallery421"
                                  src="images/slideshow/monorail-2-tan-2.jpg"
                                  alt="monorail-2-tan-2"
                                />
                              </a>
                            </div>
                            <div className="nivo-gallery-block">
                              <a
                                className="nivo-gallery-spacer"
                                href="images/slideshow/01dd16db3537f269ab26.jpg"
                                data-fancybox="nivo-gallery-421"
                                data-thumb="images/slideshow/01dd16db3537f269ab26.jpg"
                              >
                                <img
                                  className="nivo-gallery-img"
                                  data-parent="nivo-gallery421"
                                  src="images/slideshow/01dd16db3537f269ab26.jpg"
                                  alt="01dd16db3537f269ab26"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="row" />{" "}
                        </div>
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n\t\t#nivo-gallery421 .nivo-gallery-block{\n\t\t\tpadding:1%;\n\t\t\twidth:25%;\n\t\t}\n\t",
                          }}
                        />
                      </div>{" "}
                    </div>
                  </div>
                </div>
                <div className="footer2_3"></div>
              </div>
            </div>
            <div className="footer3">
              <div className="main2">
                <p
                  style={{
                    fontFamily:
                      '"Roboto Condensed", Helvetica,Arial,sans-serif',
                    fontSize: "120%",
                  }}
                >
                  <a href="https://webminhthuan.com/thiet-ke-web.html">
                    Thiết kế web{" "}
                  </a>
                  bởi{" "}
                  <a href="https://webminhthuan.com/thiet-ke-web.html">
                    WebMinhThuan.Com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="debug">
        <div className="ja-workshome" id="Mod448">
          <div className="workshome-content">
            <div className="custom">
              <div className="scrollTop" style={{ display: "none" }}>
                <a href="javascript:void(0)" id="btn-top">
                  {" "}
                </a>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n.scrollTop a {\n    display: inline-block;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    background: #C71137 url(images/gotop-arr.png) center top 13px no-repeat;\n}\n#btn-top {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    border: 0px;\n    position: fixed;\n    right: 22px;\n    bottom: 50px;\n    z-index: 1!important;\n}\n",
                }}
              />
            </div>
          </div>
        </div>
        <div className="ja-workshome" id="Mod447">
          <div className="workshome-content">
            <div className="custom">
              <div className="float-icon-hotline">
                <ul>
                  <li className="hotline_float_icon_1">
                    <a
                      id="messengerButton"
                      href="tel:0357803760"
                      rel="nofollow"
                    >
                      <i className="fa icon-phone animated infinite tada" />
                    </a>
                  </li>
                  <li className="hotline_float_icon">
                    <a
                      id="messengerButton"
                      href="tel:0907558123"
                      rel="nofollow"
                    >
                      <i className="fa icon-phone animated infinite tada" />
                    </a>
                  </li>
                  <li className="hotline_float_icon">
                    <a
                      id="messengerButton"
                      href="http://zalo.me/0907558123"
                      rel="nofollow"
                    >
                      <i className="fa fa-zalo animated infinite tada" />
                    </a>
                  </li>
                  <li className="hotline_float_icon">
                    <a id="messengerButton" href="#" rel="nofollow">
                      <i className="fa fa-fb animated infinite tada" />
                    </a>
                  </li>
                </ul>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '.float-icon-hotline {\n    display: block;\n    width: 40px;\n    position: fixed;\n    bottom: 150px;\n    right: 45px;\n    z-index: 999999;\n}\n.float-icon-hotline ul {\n    display: block;\n    width: 100%;\n    padding-left: 0;\n    margin-bottom: 0;\n    list-style: none;\n}\n.float-icon-hotline ul li {\n    display: block;\n    width: 100%;\n    position: relative;\n    margin-bottom: 10px;\n    cursor: pointer;\n}\n.float-icon-hotline a[href^="tel"] {\n    text-decoration: none;\n    color: #ffe54a;\n}\n.float-icon-hotline ul li .fa {\n    background-color: #ed1c24;\n    display: block;\n    width: 40px;\n    height: 40px;\n    text-align: center;\n    line-height: 36px;\n    -moz-box-shadow: 0 0 5px #888;\n    -webkit-box-shadow: 0 0 5px#888;\n    box-shadow: 0 0 5px #888;\n    color: #fff;\n    font-weight: 700;\n    border-radius: 50%;\n    position: relative;\n    z-index: 2;\n    border: 2px solid #fff;\n}\n.animated.infinite {\n    animation-iteration-count: infinite;\n}\n.animated {\n    animation-duration: 1s;\n    animation-fill-mode: both;\n}\n.tada {\n    animation-name: tada;\n}\n.fa {\n    display: inline-block;\n    font: normal normal normal 14px/1 FontAwesome;\n    font-size: inherit;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.float-icon-hotline ul li .fa-phone {\n    background-color: #ed1c24;\n}\n.float-icon-hotline ul li span {\n    display: inline-block;\n    padding: 0;\n    background-color: #ff6a00;\n    color: #fff;\n    border: 2px solid #fff;\n    border-radius: 20px;\n    height: 40px;\n    line-height: 36px;\n    position: absolute;\n    top: 0;\n    right: 15px;\n    z-index: 0;\n    width: 0;\n    overflow: hidden;\n    -webkit-transition: all 1s;\n    transition: all 1s;\n    background-color: #ff6a00;\n    -moz-box-shadow: 0 0 5px #888;\n    -webkit-box-shadow: 0 0 5px#888;\n    box-shadow: 0 0 5px #888;\n    font-weight: 400;\n    white-space: nowrap;\n    opacity: 0;\n}\n.float-icon-hotline ul li .fa-zalo {\n    background: #ef0303 url(images/zalo-icon.png) center center no-repeat;\n}\n.float-icon-hotline ul li .fa-fb {\n    background:  url(images/fb-chat.png) center center no-repeat;\n}\n@keyframes tada {\n    0% {\n        transform: scale3d(1, 1, 1);\n    }\n\n    10%,\n    20% {\n        transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n    }\n\n    30%,\n    50%,\n    70%,\n    90% {\n        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    }\n\n    40%,\n    60%,\n    80% {\n        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    }\n\n    100% {\n        transform: scale3d(1, 1, 1);\n    }\n\n    body.has-mobile-menu.wpex-mobile-toggle-menu-fixed_top {\n        padding-top: 36px;\n    }\n}\n.float-icon-hotline ul li span {\n    display: inline-block;\n    padding: 0;\n    background-color: #ff6a00;\n    color: #fff;\n    border: 2px solid #fff;\n    border-radius: 20px;\n    height: 40px;\n    line-height: 36px;\n    position: absolute;\n    top: 0;\n    right: 15px;\n    z-index: 0;\n    width: 0;\n    overflow: hidden;\n    -webkit-transition: all 1s;\n    transition: all 1s;\n    background-color: #ff6a00;\n    -moz-box-shadow: 0 0 5px #888;\n    -webkit-box-shadow: 0 0 5px#888;\n    box-shadow: 0 0 5px #888;\n    font-weight: 400;\n    white-space: nowrap;\n    opacity: 0;\n}\n.float-icon-hotline ul li:hover span {\n    width: 180px;\n    padding-left: 30px;\n    padding-right: 10px;\n    opacity: 1;\n}\n\n',
                }}
              />
            </div>
          </div>
        </div>
        <div className="ja-workshome" id="Mod449">
          <div className="workshome-content">
            <div className="custom">
              <div className="fonefix">
                <a href="tel:0907558123">
                  <i className="fa fa-phone-square" aria-hidden="true" />
                  Click gọi ngay - Cam kết giá rẻ nhất!
                </a>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n.fonefix{display: none;}\n@media screen and (max-width: 767px){\n.fonefix{display: block;\n    background: #FFB33A;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    text-align: center;\n    padding: 5px;\n    box-sizing: border-box;\n    animation-name: fl;\n    animation-duration: 2s;\nanimation-iteration-count: infinite;\nz-index:99999999;\n}\n.fonefix i{margin-right: 5px;}\n.fonefix a{\n    font-size: 110%;\n    font-weight: 600;\n}\n.footer3{padding-bottom: 38px;}\n@keyframes fl {\n  0%   {background-color: #FFF59D;}\n  50%  {background-color: #F9A825;}\n100%  {background-color: #FFF59D;}\n}\n}\n\n",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div id="extra_js"></div>
    </>
  );
}

export default GioiThieu;
