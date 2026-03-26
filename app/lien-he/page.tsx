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

export default async function LienHe() {
  return (
    <div
      id="bd"
      className="bd fs3 com_k2  bodylienhe AddMore_OptionBaiviet_ViewItem"
    >
      <div id="ja-khungchinh">
        <div className="main">
          <Header />
          <Breadcrumbs
            items={[{ url: "/lien-he", label: "Liên hệ" }]}
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
                      <span>Liên hệ</span>
                    </h1>
                  </div>
                  <div className="workshome-content">
                    <div
                      id="k2Container"
                      className="itemView lienhe temp_lienhe trangcon"
                    >
                      <div className="itemBody">
                        <div className="itemFullText">
                          <div className="ttlh">
                            <h4>CẦU TRỤC THANG MÁY HOÀ AN</h4>
                            <div>
                              <strong>Địa chỉ :</strong> Thửa đất 1271, Đường
                              Khánh Bình 02, Khu phố Khánh Tân, Phường Tân Hiệp,
                              TP Hồ Chí Minh
                            </div>
                            <div></div>
                            <div>
                              <strong>Hotline :&nbsp;</strong>
                              <a href="tel:0907558123">0903152530</a>
                            </div>
                            <div>
                              <strong>Email :&nbsp;</strong>
                              <a href="mailto:hoaancty@yahoo.com.vn">
                                hoaancty@yahoo.com.vn
                              </a>
                            </div>
                            <p style={{ marginBottom: 10 }}>
                              <strong>Website :&nbsp;</strong>
                              <a href="www.cautructhangmayhoalong.html">
                                www.cautructhangmayhoalong.com
                              </a>
                            </p>
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.192547476838!2d106.74946917529053!3d11.024175689140048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174daeca7277473%3A0x975b04343b281fee!2zxJAuIEtow6FuaCBCw6xuaCAwMiwgS2jDoW5oIELDrG5oLCBUw6JuIEhp4buHcCwgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2sus!4v1774535707856!5m2!1sen!2sus"
                              width={600}
                              height={450}
                              style={{ border: 0 }}
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                          </div>
                          <div className="formlh">
                            <p> </p>
                            <div className="module">
                              <div>
                                <div>
                                  <div>
                                    <div className="rsform">
                                      <form
                                        method="post"
                                        id="userForm"
                                        className="MinhThuanForm1"
                                        encType="multipart/form-data"
                                        action="https://cautructhangmayhoalong.com/lien-he.html"
                                      >
                                        <h2>Liên hệ</h2>
                                        {/* Do not remove this ID, it is used to identify the page so that the pagination script can work correctly */}
                                        <fieldset
                                          className="formHorizontal formContainer"
                                          id="rsform_1_page_0"
                                        >
                                          <div className="rsform-block rsform-block-hoten">
                                            <div className="formControlLabel">
                                              Họ tên
                                              <strong className="formRequired">
                                                (*)
                                              </strong>
                                            </div>
                                            <div className="formControls">
                                              <div className="formBody">
                                                <input
                                                  data-required="YES"
                                                  type="text"
                                                  defaultValue=""
                                                  size={70}
                                                  name="form[hoten]"
                                                  id="hoten"
                                                  className="rsform-input-box"
                                                />
                                                <span className="formValidation">
                                                  <span
                                                    id="component1"
                                                    className="formNoError"
                                                  >
                                                    Trường bắt buộc
                                                  </span>
                                                </span>
                                              </div>
                                              <p className="formDescription" />
                                            </div>
                                          </div>
                                          <div className="rsform-block rsform-block-congty">
                                            <div className="formControlLabel">
                                              Công ty
                                              <strong className="formRequired">
                                                (*)
                                              </strong>
                                            </div>
                                            <div className="formControls">
                                              <div className="formBody">
                                                <input
                                                  data-required="YES"
                                                  type="text"
                                                  defaultValue=""
                                                  size={70}
                                                  name="form[congty]"
                                                  id="congty"
                                                  className="rsform-input-box"
                                                />
                                                <span className="formValidation">
                                                  <span
                                                    id="component28"
                                                    className="formNoError"
                                                  >
                                                    Trường bắt buộc
                                                  </span>
                                                </span>
                                              </div>
                                              <p className="formDescription" />
                                            </div>
                                          </div>
                                          <div className="rsform-block rsform-block-diachi">
                                            <div className="formControlLabel">
                                              Địa chỉ
                                            </div>
                                            <div className="formControls">
                                              <div className="formBody">
                                                <input
                                                  data-required="NO"
                                                  type="text"
                                                  defaultValue=""
                                                  size={70}
                                                  name="form[diachi]"
                                                  id="diachi"
                                                  className="rsform-input-box"
                                                />
                                                <span className="formValidation">
                                                  <span
                                                    id="component23"
                                                    className="formNoError"
                                                  >
                                                    Invalid Input
                                                  </span>
                                                </span>
                                              </div>
                                              <p className="formDescription" />
                                            </div>
                                          </div>
                                          <div className="rsform-block rsform-block-dienthoai">
                                            <div className="formControlLabel">
                                              Điện thoại
                                            </div>
                                            <div className="formControls">
                                              <div className="formBody">
                                                <input
                                                  data-required="NO"
                                                  type="text"
                                                  defaultValue=""
                                                  size={70}
                                                  name="form[dienthoai]"
                                                  id="dienthoai"
                                                  className="rsform-input-box"
                                                />
                                                <span className="formValidation">
                                                  <span
                                                    id="component24"
                                                    className="formNoError"
                                                  >
                                                    Invalid Input
                                                  </span>
                                                </span>
                                              </div>
                                              <p className="formDescription" />
                                            </div>
                                          </div>
                                          <div className="rsform-block rsform-block-email">
                                            <div className="formControlLabel">
                                              Email
                                              <strong className="formRequired">
                                                (*)
                                              </strong>
                                            </div>
                                            <div className="formControls">
                                              <div className="formBody">
                                                <input
                                                  data-required="YES"
                                                  type="text"
                                                  defaultValue=""
                                                  size={70}
                                                  name="form[email]"
                                                  id="email"
                                                  className="rsform-input-box"
                                                />
                                                <span className="formValidation">
                                                  <span
                                                    id="component3"
                                                    className="formNoError"
                                                  >
                                                    Trường bắt buộc
                                                  </span>
                                                </span>
                                              </div>
                                              <p className="formDescription" />
                                            </div>
                                          </div>
                                          <div className="rsform-block rsform-block-noidung">
                                            <div className="formControlLabel">
                                              Nội dung
                                              <strong className="formRequired">
                                                (*)
                                              </strong>
                                            </div>
                                            <div className="formControls">
                                              <div className="formBody">
                                                <textarea
                                                  data-required="YES"
                                                  cols={52}
                                                  rows={6}
                                                  name="form[noidung]"
                                                  id="noidung"
                                                  className="rsform-text-box"
                                                  defaultValue={""}
                                                />
                                                <span className="formValidation">
                                                  <span
                                                    id="component25"
                                                    className="formNoError"
                                                  >
                                                    Trường bắt buộc
                                                  </span>
                                                </span>
                                              </div>
                                              <p className="formDescription" />
                                            </div>
                                          </div>
                                          <div className="rsform-block rsform-block-guingay">
                                            <div className="formControlLabel">
                                              Gửi ngay
                                            </div>
                                            <div className="formControls">
                                              <div className="formBody">
                                                <input
                                                  type="button"
                                                  defaultValue="Gửi ngay"
                                                  name="form[guingay]"
                                                  id="guingay"
                                                  className="rsform-button"
                                                  data-form="MinhThuanForm1"
                                                />
                                                <span className="formValidation" />
                                              </div>
                                              <p className="formDescription" />
                                            </div>
                                          </div>
                                        </fieldset>
                                        <input
                                          type="hidden"
                                          name="form[formId]"
                                          defaultValue={1}
                                        />
                                      </form>
                                    </div>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p />
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
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <Lienhe />
      <div id="extra_js"></div>
    </div>
  );
}
