import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { client, urlFor } from "../../sanity/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Lienhe from "@/components/Lienhe";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Danh sách các sản phẩm PA LĂNG XÍCH ĐIỆN...",
};

export default async function BaiViet() {
  return (
    <>
      <div id="ja-khungchinh">
        <div className="main">
          <Header />
          <Breadcrumbs
            items={[{ label: "Bài viết", url: "/bai-viet" }]}
            backgroundImage="/images/background-footer-top.jpg"
          />
          <div id="ja-noidunggiua" className="noleft ">
            <div className="main2">
              <div id="ja-cotgiua">
                <div className="errorclass" style={{ display: "none" }}>
                  <div id="system-message-container"></div>
                </div>
                <div className="noidungtren1"></div>
                <div className="noidungtren2"></div>
                <div className="ja-workshome trangctbv">
                  <div className="workshome-title">
                    <h1>
                      <span>Vì sao nên lắp biến tần cho cầu trục?</span>
                    </h1>
                  </div>
                  <div className="workshome-content">
                    <div id="k2Container" className="itemView temp_ trangcon">
                      <div className="itemBody">
                        <div className="itemFullText">
                          <h2
                            style={{
                              fontSize: 15,
                              fontFamily: "Arial, Helvetica, sans-serif",
                              lineHeight: "20px",
                              marginBottom: 15,
                            }}
                          >
                            <span
                              style={{ fontSize: "12pt", lineHeight: "20px" }}
                            >
                              Lắp biến tần cho cầu trục
                            </span>
                          </h2>
                          <p
                            style={{
                              fontSize: 15,
                              fontFamily: "Arial, Helvetica, sans-serif",
                              lineHeight: "25px",
                              margin: "0px 0px 15px",
                            }}
                          >
                            <span style={{ lineHeight: "20px" }}>
                              &nbsp;Cầu trục là thiết bị chuyên dùng để nâng hạ
                              máy móc, hàng hóa có tải trọng lớn. Bởi vậy, yêu
                              cầu về độ ổn định khi làm việc đòi hỏi rất cao.
                            </span>
                          </p>
                          <p
                            style={{
                              fontSize: 15,
                              fontFamily: "Arial, Helvetica, sans-serif",
                              lineHeight: "25px",
                              margin: "0px 0px 15px",
                            }}
                          >
                            <span style={{ lineHeight: "20px" }}>
                              Vì thế, các loại cầu trục và cổng trục hiện nay
                              thường được tích hợp thêm biến tần để giúp thiết
                              bị hoạt động êm ái và an toàn hơn.
                            </span>
                          </p>
                          <h2
                            style={{
                              fontSize: 15,
                              fontFamily: "Arial, Helvetica, sans-serif",
                              lineHeight: "20px",
                              marginBottom: 15,
                            }}
                          >
                            <span
                              style={{ fontSize: "12pt", lineHeight: "20px" }}
                            >
                              Cầu trục có mấy loại biến tần?
                            </span>
                          </h2>
                          <p
                            style={{
                              fontSize: 15,
                              fontFamily: "Arial, Helvetica, sans-serif",
                              lineHeight: "25px",
                              margin: "0px 0px 15px",
                            }}
                          >
                            <span style={{ lineHeight: "20px" }}>
                              Với cầu trục và cổng trục, thường có 3 loại biến
                              tần:
                            </span>
                          </p>
                          <ol
                            style={{
                              fontSize: 15,
                              fontFamily: "Arial, Helvetica, sans-serif",
                              lineHeight: "20px",
                              marginBottom: 15,
                            }}
                          >
                            <li
                              style={{
                                lineHeight: "20px",
                                listStyle: "inherit",
                                paddingTop: 3,
                                paddingBottom: 3,
                              }}
                            >
                              <h3
                                style={{
                                  fontSize: 15,
                                  lineHeight: "20px",
                                  marginBottom: 15,
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "12pt",
                                    lineHeight: "20px",
                                  }}
                                >
                                  Biến tần di chuyển cầu trục ( Nên có)
                                </span>
                              </h3>
                            </li>
                            <li
                              style={{
                                lineHeight: "20px",
                                listStyle: "inherit",
                                paddingTop: 3,
                                paddingBottom: 3,
                              }}
                            >
                              <h3
                                style={{
                                  fontSize: 15,
                                  lineHeight: "20px",
                                  marginBottom: 15,
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "12pt",
                                    lineHeight: "20px",
                                  }}
                                >
                                  Biến tần nâng hạ palang
                                </span>
                              </h3>
                            </li>
                            <li
                              style={{
                                lineHeight: "20px",
                                listStyle: "inherit",
                                paddingTop: 3,
                                paddingBottom: 3,
                              }}
                            >
                              <h3
                                style={{
                                  fontSize: 15,
                                  lineHeight: "20px",
                                  marginBottom: 15,
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "12pt",
                                    lineHeight: "20px",
                                  }}
                                >
                                  Biến tần di chuyển palang
                                </span>
                              </h3>
                            </li>
                          </ol>
                          <h3
                            style={{
                              fontSize: 15,
                              fontFamily: "Arial, Helvetica, sans-serif",
                              lineHeight: "20px",
                              marginBottom: 15,
                            }}
                          >
                            <span
                              style={{ fontSize: "12pt", lineHeight: "20px" }}
                            >
                              Lý do nên lắp biến tần cho cầu trục.?
                            </span>
                          </h3>
                          <ul
                            style={{
                              fontSize: 15,
                              fontFamily: "Arial, Helvetica, sans-serif",
                              lineHeight: "20px",
                              marginBottom: 15,
                            }}
                          >
                            <li
                              style={{
                                lineHeight: "20px",
                                listStyle: "inherit",
                                paddingTop: 3,
                                paddingBottom: 3,
                              }}
                            >
                              <span style={{ lineHeight: "20px" }}>
                                Biến tần với tác dụng như một khởi động mềm, khi
                                khởi động động cơ, dòng điện khởi động của động
                                cơ giảm xuống và bằng với dòng điện làm việc
                                định mức, nên hạn chế ảnh hưởng đến các thiết bị
                                xung quanh.
                              </span>
                            </li>
                            <li
                              style={{
                                lineHeight: "20px",
                                listStyle: "inherit",
                                paddingTop: 3,
                                paddingBottom: 3,
                              }}
                            >
                              <span style={{ lineHeight: "20px" }}>
                                Chất lượng truyền điện ổn định
                              </span>
                            </li>
                            <li
                              style={{
                                lineHeight: "20px",
                                listStyle: "inherit",
                                paddingTop: 3,
                                paddingBottom: 3,
                              }}
                            >
                              <span style={{ lineHeight: "20px" }}>
                                Giảm hao mòn, tổn hao nhiệt trên dây dẫn
                              </span>
                            </li>
                            <li
                              style={{
                                lineHeight: "20px",
                                listStyle: "inherit",
                                paddingTop: 3,
                                paddingBottom: 3,
                              }}
                            >
                              <span style={{ lineHeight: "20px" }}>
                                Giải quyết triệt để hiện tượng sụt áp trên lưới
                                điện.
                              </span>
                            </li>
                            <li
                              style={{
                                lineHeight: "20px",
                                listStyle: "inherit",
                                paddingTop: 3,
                                paddingBottom: 3,
                              }}
                            >
                              <span style={{ lineHeight: "20px" }}>
                                Quá trình nâng tải và hạ tải êm, giảm tiếng ồn,
                                tăng tuổi thọ của động cơ
                              </span>
                            </li>
                            <li
                              style={{
                                lineHeight: "20px",
                                listStyle: "inherit",
                                paddingTop: 3,
                                paddingBottom: 3,
                              }}
                            >
                              <span style={{ lineHeight: "20px" }}>
                                Tăng tuổi thọ các mối hàn trên dầm cẩu và các
                                phụ kiện cơ khí như bánh răng, bạc đạn…
                              </span>
                            </li>
                            <li
                              style={{
                                lineHeight: "20px",
                                listStyle: "inherit",
                                paddingTop: 3,
                                paddingBottom: 3,
                              }}
                            >
                              <span style={{ lineHeight: "20px" }}>
                                An toàn hơn cho công nhân vận hành cẩu khi dầm
                                cẩu không còn bị rung.
                              </span>
                            </li>
                            <li
                              style={{
                                lineHeight: "20px",
                                listStyle: "inherit",
                                paddingTop: 3,
                                paddingBottom: 3,
                              }}
                            >
                              <span style={{ lineHeight: "20px" }}>
                                Nâng cao năng suất làm việc, đặc biệt là nâng hạ
                                đòi hỏi sự chính xác cao.
                              </span>
                            </li>
                            <li
                              style={{
                                lineHeight: "20px",
                                listStyle: "inherit",
                                paddingTop: 3,
                                paddingBottom: 3,
                              }}
                            >
                              <span style={{ lineHeight: "20px" }}>
                                Biến tần sẽ báo lỗi và ngắt nguồn 2 motor khi
                                một trong hai motor bị sự cố. Tăng tính an toàn
                                hơn cho hệ thống.
                              </span>
                            </li>
                            <li
                              style={{
                                lineHeight: "20px",
                                listStyle: "inherit",
                                paddingTop: 3,
                                paddingBottom: 3,
                              }}
                            >
                              <span style={{ lineHeight: "20px" }}>
                                Điều chỉnh được cơ cấu nâng hạ của Cầu trục: Tốc
                                độ nhanh hoặc Tốc độ chậm
                              </span>
                            </li>
                            <li
                              style={{
                                lineHeight: "20px",
                                listStyle: "inherit",
                                paddingTop: 3,
                                paddingBottom: 3,
                              }}
                            >
                              <span style={{ lineHeight: "20px" }}>
                                Lợi ích về mặt kinh tế của giải pháp biến tần
                                cho cẩu trục, cổng trục: Năng lượng điện được
                                tiết kiệm, Giảm chi phí bảo trì bảo dưỡng
                              </span>
                            </li>
                          </ul>
                          <h2
                            style={{
                              fontSize: 15,
                              fontFamily: "Arial, Helvetica, sans-serif",
                              lineHeight: "20px",
                              marginBottom: 15,
                            }}
                          >
                            <span
                              style={{ fontSize: "12pt", lineHeight: "20px" }}
                            >
                              Khi nào thì nên lắp biến tần cho cầu trục
                            </span>
                          </h2>
                          <p
                            style={{
                              fontSize: 15,
                              fontFamily: "Arial, Helvetica, sans-serif",
                              lineHeight: "25px",
                              margin: "0px 0px 15px",
                            }}
                          >
                            <span style={{ lineHeight: "20px" }}>
                              Mặc dù&nbsp;
                              <span
                                style={{
                                  lineHeight: "20px",
                                  textDecorationLine: "underline",
                                }}
                              >
                                <strong style={{ lineHeight: "20px" }}>
                                  lắp biến tần cho&nbsp;
                                </strong>
                              </span>
                              Cầu trục&nbsp;đem lại nhiều hiệu quả, tuy nhiên,
                              việc lắp thêm biến tần cho cầu trục sẽ tốn kém
                              nhiều chi phí. Đặc biệt là với các bộ cầu trục có
                              mức tải nâng lớn.
                            </span>
                          </p>
                          <h3
                            style={{
                              fontSize: 15,
                              fontFamily: "Arial, Helvetica, sans-serif",
                              lineHeight: "20px",
                              marginBottom: 15,
                            }}
                          >
                            <span
                              style={{ fontSize: "12pt", lineHeight: "20px" }}
                            >
                              Vậy khi nào thì nên lắp biến tần cho cầu trục và
                              cổng trục:
                            </span>
                          </h3>
                          <ol
                            style={{
                              fontSize: 15,
                              fontFamily: "Arial, Helvetica, sans-serif",
                              lineHeight: "20px",
                              marginBottom: 15,
                            }}
                          >
                            <li
                              style={{
                                lineHeight: "20px",
                                listStyle: "inherit",
                                paddingTop: 3,
                                paddingBottom: 3,
                              }}
                            >
                              <span style={{ lineHeight: "20px" }}>
                                Khi cầu trục làm việc cần độ chính xác cao, VD:
                                Lắp ráp chi tiết, lắp khuôn, lắp tua bin,..
                              </span>
                            </li>
                            <li
                              style={{
                                lineHeight: "20px",
                                listStyle: "inherit",
                                paddingTop: 3,
                                paddingBottom: 3,
                              }}
                            >
                              <span style={{ lineHeight: "20px" }}>
                                Trong môi trường có điều kiện làm việc khắc
                                nhiệt.
                              </span>
                            </li>
                            <li
                              style={{
                                lineHeight: "20px",
                                listStyle: "inherit",
                                paddingTop: 3,
                                paddingBottom: 3,
                              }}
                            >
                              <span style={{ lineHeight: "20px" }}>
                                Tốc độ di chuyển, nầng hạ của cầu trục lớn
                              </span>
                            </li>
                            <li
                              style={{
                                lineHeight: "20px",
                                listStyle: "inherit",
                                paddingTop: 3,
                                paddingBottom: 3,
                              }}
                            >
                              <span style={{ lineHeight: "20px" }} />
                              <span
                                style={{ fontSize: "12pt", lineHeight: "20px" }}
                              >
                                Nên lắp loại biến tần nào cho cầu trục
                              </span>
                            </li>
                          </ol>
                          <p
                            style={{
                              fontSize: 15,
                              fontFamily: "Arial, Helvetica, sans-serif",
                              lineHeight: "25px",
                              margin: "0px 0px 15px",
                            }}
                          >
                            <span style={{ lineHeight: "20px" }}>
                              Hiện nay có nhiều hãng biến tần để bạn lực chọn,
                              với đặc thù là đơn vị chuyên cung cấp cầu trục,
                              cổng trục,&nbsp;thường xuyên lựa chọn các hãng
                              biến tần có uy tín như: Fuji; Schnaider, Yakawa
                            </span>
                          </p>
                          <p
                            style={{
                              fontSize: 15,
                              fontFamily: "Arial, Helvetica, sans-serif",
                              lineHeight: "25px",
                              margin: "0px 0px 15px",
                            }}
                          >
                            <span style={{ lineHeight: "20px" }}>
                              Đây là các hãng mà các bạn có thể tham khảo
                            </span>
                          </p>
                          <h4
                            style={{
                              fontSize: 15,
                              fontFamily: "Arial, Helvetica, sans-serif",
                              lineHeight: "20px",
                              marginBottom: 15,
                            }}
                          >
                            <span
                              style={{ fontSize: "12pt", lineHeight: "20px" }}
                            >
                              Liên hệ để được tư vấn và báo giá cầu trục.
                            </span>
                          </h4>{" "}
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
              <div id="ja-cotphai"></div>
            </div>
          </div>
        </div>
        <Footer />
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
                    '.float-icon-hotline {\n    display: block;\n    width: 40px;\n    position: fixed;\n    bottom: 150px;\n    right: 45px;\n    z-index: 999999;\n}\n.float-icon-hotline ul {\n    display: block;\n    width: 100%;\n    padding-left: 0;\n    margin-bottom: 0;\n    list-style: none;\n}\n.float-icon-hotline ul li {\n    display: block;\n    width: 100%;\n    position: relative;\n    margin-bottom: 10px;\n    cursor: pointer;\n}\n.float-icon-hotline a[href^="tel"] {\n    text-decoration: none;\n    color: #ffe54a;\n}\n.float-icon-hotline ul li .fa {\n    background-color: #ed1c24;\n    display: block;\n    width: 40px;\n    height: 40px;\n    text-align: center;\n    line-height: "36px";\n    -moz-box-shadow: 0 0 5px #888;\n    -webkit-box-shadow: 0 0 5px#888;\n    box-shadow: 0 0 5px #888;\n    color: #fff;\n    font-weight: 700;\n    border-radius: 50%;\n    position: relative;\n    z-index: 2;\n    border: 2px solid #fff;\n}\n.animated.infinite {\n    animation-iteration-count: infinite;\n}\n.animated {\n    animation-duration: 1s;\n    animation-fill-mode: both;\n}\n.tada {\n    animation-name: tada;\n}\n.fa {\n    display: inline-block;\n    font: normal normal normal 14px/1 FontAwesome;\n    font-size: inherit;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.float-icon-hotline ul li .fa-phone {\n    background-color: #ed1c24;\n}\n.float-icon-hotline ul li span {\n    display: inline-block;\n    padding: 0;\n    background-color: #ff6a00;\n    color: #fff;\n    border: 2px solid #fff;\n    border-radius: 20px;\n    height: 40px;\n    line-height: 36px;\n    position: absolute;\n    top: 0;\n    right: 15px;\n    z-index: 0;\n    width: 0;\n    overflow: hidden;\n    -webkit-transition: all 1s;\n    transition: all 1s;\n    background-color: #ff6a00;\n    -moz-box-shadow: 0 0 5px #888;\n    -webkit-box-shadow: 0 0 5px#888;\n    box-shadow: 0 0 5px #888;\n    font-weight: 400;\n    white-space: nowrap;\n    opacity: 0;\n}\n.float-icon-hotline ul li .fa-zalo {\n    background: #ef0303 url(images/zalo-icon.png) center center no-repeat;\n}\n.float-icon-hotline ul li .fa-fb {\n    background:  url(images/fb-chat.png) center center no-repeat;\n}\n@keyframes tada {\n    0% {\n        transform: scale3d(1, 1, 1);\n    }\n\n    10%,\n    20% {\n        transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n    }\n\n    30%,\n    50%,\n    70%,\n    90% {\n        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    }\n\n    40%,\n    60%,\n    80% {\n        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    }\n\n    100% {\n        transform: scale3d(1, 1, 1);\n    }\n\n    body.has-mobile-menu.wpex-mobile-toggle-menu-fixed_top {\n        padding-top: 36px;\n    }\n}\n.float-icon-hotline ul li span {\n    display: inline-block;\n    padding: 0;\n    background-color: #ff6a00;\n    color: #fff;\n    border: 2px solid #fff;\n    border-radius: 20px;\n    height: 40px;\n    line-height: 36px;\n    position: absolute;\n    top: 0;\n    right: 15px;\n    z-index: 0;\n    width: 0;\n    overflow: hidden;\n    -webkit-transition: all 1s;\n    transition: all 1s;\n    background-color: #ff6a00;\n    -moz-box-shadow: 0 0 5px #888;\n    -webkit-box-shadow: 0 0 5px#888;\n    box-shadow: 0 0 5px #888;\n    font-weight: 400;\n    white-space: nowrap;\n    opacity: 0;\n}\n.float-icon-hotline ul li:hover span {\n    width: 180px;\n    padding-left: 30px;\n    padding-right: 10px;\n    opacity: 1;\n}\n\n',
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
      <Lienhe />
    </>
  );
}
