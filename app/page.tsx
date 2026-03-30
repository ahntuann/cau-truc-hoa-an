import HomeSlider from "@/components/HomeSlider";
import ProductList from "@/components/ProductList";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lienhe from "@/components/Lienhe";
import { Metadata } from "next";
import IntroductionWidget from "@/components/IntroductionWidget";
import NewsWidget from "@/components/NewsWidget";

export const metadata: Metadata = {
  title: "Trang chủ - Công ty Cầu Trục Hoà An",
  description: "Danh sách các sản phẩm PA LĂNG XÍCH ĐIỆN...",
};

export default function Home() {
  return (
    <>
      <div id="ja-khungchinh">
        <div className="main">
          <Header />

          <div id="ja-slideshow">
            <div className="slideshow1">
              <div className="main2">
                <div className="ja-workshome" id="Mod300">
                  <div className="workshome-content">
                    <HomeSlider />
                  </div>
                </div>
              </div>
            </div>

            <div className="slideshow2">
              <div className="main2"></div>
            </div>
          </div>

          <div id="ja-dinhhuong">
            <div className="dinhhuong1">
              <div className="main2">
                <div className="ja-workshome" id="Mod380">
                  <div className="workshome-content">
                    <span className="breadcrumbs pathway">
                      <strong>Trang chủ</strong>
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="ja-extra">
            <div className="extra1">
              <div className="main2">
                <div className="ja-workshome" id="Mod416">
                  <div className="workshome-title">
                    <h2>
                      <span>Tại sao chọn chúng tôi?</span>
                    </h2>
                  </div>
                  <div className="workshome-content">
                    <div className="custom">
                      <div
                        className="row row-small align-middle align-center krow_why4"
                        id="row-2026679856"
                      >
                        <div className="col kcol_row_why medium-6 small-6 large-3">
                          <div className="col-inner text-center">
                            <div className="box has-hover kimg_box_why  has-hover box-text-bottom">
                              <div className="box-image">
                                <a href="#" target="_self">
                                  <div>
                                    <img
                                      width={71}
                                      height={80}
                                      src="/images/dich-vu-so-1.png"
                                      className="attachment- size- lazyloaded"
                                      alt="dich vu so 1"
                                      loading="lazy"
                                      data-was-processed="true"
                                    />
                                  </div>
                                </a>
                              </div>
                              <div className="box-text text-left">
                                <div className="box-text-inner">
                                  <p>Dịch vụ số 1 cầu trục</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col kcol_row_why child_2 medium-6 small-6 large-3">
                          <div className="col-inner text-center">
                            <div className="box has-hover kimg_box_why  has-hover box-text-bottom">
                              <div className="box-image">
                                <a href="#" target="_self">
                                  <div>
                                    <img
                                      width={82}
                                      height={69}
                                      src="/images/chat-luong.png"
                                      className="attachment- size- lazyloaded"
                                      alt="chat luong"
                                      loading="lazy"
                                      data-was-processed="true"
                                    />
                                  </div>
                                </a>
                              </div>
                              <div className="box-text text-left">
                                <div className="box-text-inner">
                                  <p>Chi phí hợp lý nhất</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col kcol_row_why medium-6 small-6 large-3">
                          <div className="col-inner text-center">
                            <div className="box has-hover kimg_box_why  has-hover box-text-bottom">
                              <div className="box-image">
                                <a href="#" target="_self">
                                  <div>
                                    <img
                                      width={81}
                                      height={55}
                                      src="/images/thoi-gian-nhanh-nhat.png"
                                      className="attachment- size- lazyloaded"
                                      alt="thoi gian nhanh nhat"
                                      loading="lazy"
                                      data-was-processed="true"
                                    />
                                  </div>
                                </a>
                              </div>
                              <div className="box-text text-left">
                                <div className="box-text-inner">
                                  <p>Thời gian lắp đặt nhanh</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col kcol_row_why medium-6 small-6 large-3">
                          <div className="col-inner text-center">
                            <div className="box has-hover kimg_box_why  has-hover box-text-bottom">
                              <div className="box-image">
                                <a href="#" target="_self">
                                  <div>
                                    <img
                                      width={73}
                                      height={64}
                                      src="/images/tu-van.png"
                                      className="attachment- size- lazyloaded"
                                      alt="tu van"
                                      loading="lazy"
                                      data-was-processed="true"
                                    />
                                  </div>
                                </a>
                              </div>
                              <div className="box-text text-left">
                                <div className="box-text-inner">
                                  <p>Tư vấn kỹ thuật miễn phí</p>
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
            <div className="mt-15">
              <ProductList />
            </div>
            <div className="extra4">
              <div className="main2">
                <div className="extra4_1">
                  <div className="ja-workshome" id="Mod418">
                    <div className="workshome-title">
                      <h2>
                        <span>Hỗ trợ khách hàng</span>
                      </h2>
                    </div>
                    <div className="workshome-content">
                      <div className="custom">
                        <table style={{ width: 316, height: 80 }}>
                          <tbody>
                            <tr style={{ height: 18 }}>
                              <td
                                style={{
                                  width: "87.8409px",
                                  height: 18,
                                  textAlign: "left",
                                }}
                              >
                                Ms. Thư:
                              </td>
                              <td style={{ width: "212.386px", height: 18 }}>
                                <ul>
                                  <li>
                                    <a href="http://zalo.me/0908504207">
                                      0908504207
                                    </a>
                                  </li>
                                </ul>
                              </td>
                            </tr>

                            <tr style={{ height: 18 }}>
                              <td
                                style={{
                                  width: "87.8409px",
                                  height: 18,
                                  textAlign: "left",
                                }}
                              >
                                Mr. Linh:
                              </td>
                              <td style={{ width: "212.386px", height: 18 }}>
                                <ul>
                                  <li>
                                    <a href="http://zalo.me/0903152530">
                                      0903152530
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mailto:hoaancty@yahoo.com.vn">
                                      hoaancty@yahoo.com.vn
                                    </a>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="extra4_2">
                  <div className="ja-workshome" id="Mod355">
                    <div className="workshome-title">
                      <h2>
                        <span>Khách hàng</span>
                      </h2>
                    </div>
                    <div className="workshome-content">
                      <div className="nivo-gallery">
                        <div
                          className="nivo-gallery-wrapper"
                          id="nivo-gallery355"
                        >
                          <div className="nivo-gallery-row">
                            {" "}
                            <div className="nivo-gallery-block">
                              <a
                                className="nivo-gallery-spacer"
                                href="images/dt/78.jpeg"
                                data-fancybox="nivo-gallery-355"
                                data-thumb="images/dt/78.jpeg"
                              >
                                <img
                                  className="nivo-gallery-img"
                                  data-parent="nivo-gallery355"
                                  src="images/dt/78.jpeg"
                                  // alt={78}
                                />
                              </a>
                            </div>
                            <div className="nivo-gallery-block">
                              <a
                                className="nivo-gallery-spacer"
                                href="images/dt/79.jpeg"
                                data-fancybox="nivo-gallery-355"
                                data-thumb="ima/79.jpeg"
                              >
                                <img
                                  className="nivo-gallery-img"
                                  data-parent="nivo-gallery355"
                                  src="images/dt//79.jpeg"
                                  alt="logo-toyota-inkythuatso-3-01-11-15-03-22"
                                />
                              </a>
                            </div>
                            <div className="nivo-gallery-block">
                              <a
                                className="nivo-gallery-spacer"
                                href="images/dt/80.jpeg"
                                data-fancybox="nivo-gallery-355"
                                data-thumb="images/dt/80.jpeg"
                              >
                                <img
                                  className="nivo-gallery-img"
                                  data-parent="nivo-gallery355"
                                  src="images/dt/80.jpeg"
                                  alt="demag-logo-for-terex-cranes"
                                />
                              </a>
                            </div>
                            <div className="nivo-gallery-block">
                              <a
                                className="nivo-gallery-spacer"
                                href="images/dt/81.jpeg"
                                data-fancybox="nivo-gallery-355"
                                data-thumb="images/dt/81.jpeg"
                              >
                                <img
                                  className="nivo-gallery-img"
                                  data-parent="nivo-gallery355"
                                  src="images/dt/81.jpeg"
                                  alt="hitachi"
                                />
                              </a>
                            </div>
                            <div className="nivo-gallery-block">
                              <a
                                className="nivo-gallery-spacer"
                                href="images/dt/82.jpeg"
                                data-fancybox="nivo-gallery-355"
                                data-thumb="images/dt/82.jpeg"
                              >
                                <img
                                  className="nivo-gallery-img"
                                  data-parent="nivo-gallery355"
                                  src="images/dt/82.jpeg"
                                  alt="kg"
                                />
                              </a>
                            </div>
                          </div>{" "}
                        </div>
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n\t\t#nivo-gallery355 .nivo-gallery-block{\n\t\t\tpadding:1%;\n\t\t\twidth:20%;\n\t\t}\n\t",
                          }}
                        />
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="extra5">
              <div className="main2">
                <IntroductionWidget />
                <NewsWidget />
              </div>
            </div>
          </div>
          <div id="ja-noidunggiua" className="noleft ">
            <div className="main2">
              <div id="ja-cotgiua">
                <div className="errorclass" style={{ display: "none" }}>
                  <div id="system-message-container"></div>
                </div>
                <div className="noidungtren1"></div>
                <div className="noidungtren2"></div>
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
          <Footer />
        </div>
      </div>
      <Lienhe />
    </>
  );
}
