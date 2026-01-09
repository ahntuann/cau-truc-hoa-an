import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { client, urlFor } from "../../sanity/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Lienhe from "@/components/Lienhe";

export const metadata: Metadata = {
  title: "Dịch vụ sửa chữa",
  description: "Danh sách các sản phẩm PA LĂNG XÍCH ĐIỆN...",
};

async function getData() {
  const defaultCategoryTitle = "PA LĂNG XÍCH ĐIỆN";

  // Query này lấy 3 thứ:
  // 1. Thông tin của chính danh mục "PA LĂNG XÍCH ĐIỆN" (để lấy slug gắn vào link)
  // 2. Sản phẩm thuộc danh mục đó
  // 3. List toàn bộ danh mục cho sidebar
  const query = `{
    "products": *[_type == "product" && references(*[_type == "category" && title == "${defaultCategoryTitle}"]._id)] | order(_createdAt desc)[0...6] {
      _id, title, slug, image, price
    }
  }`;

  return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export default async function SanPhamPage() {
  const { products } = await getData();

  return (
    <div id="bd" className="bd fs3 com_k2 AddMore_OptionBaiviet_ViewItemlist">
      <div id="ja-khungchinh">
        <div className="main">
          <Header />
          <Breadcrumbs
            items={[{ label: "Dịch vụ sửa chữa", url: "/dich-vu-sua-chua" }]}
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
                <div className="ja-workshome trangdmbv">
                  <div className="workshome-title">
                    <h1>
                      <span>Bảo trì bảo dưỡng định kỳ </span>
                    </h1>
                  </div>
                  <div className="workshome-content">
                    <div id="k2Container" className="itemListView temp_">
                      <div className="itemListCategoriesBlock">
                        <div className="itemListCategory"></div>
                      </div>
                      <div className="itemList">
                        <div id="itemListLeading">
                          <div className="itemRow">
                            {" "}
                            <div className="itemContainer">
                              <div className="catItemView groupLeading">
                                <div className="catItemImageBlock">
                                  <a href="2022-10-13-02-48-24.html">
                                    <img
                                      src="media/k2/items/cache/73608782f50eb6af17bb69bdcd662692_S.jpg"
                                      alt="Sửa chữa và bảo dưỡng cho cầu trục - cổng trục"
                                    />
                                  </a>
                                </div>
                                <div className="catItemThongTin">
                                  <h3 className="catItemTitle">
                                    <a href="2022-10-13-02-48-24.html">
                                      Sửa chữa và bảo dưỡng cho cầu trục - cổng
                                      trục{" "}
                                    </a>
                                  </h3>
                                  <div className="catItemDateCreated">
                                    <i className="far fa-clock" />
                                    19/09/2021 - 11:17
                                  </div>
                                  <div className="catItemExtraFields">
                                    <li className="even typeTextarea group1 idfield1">
                                      <span className="catItemExtraFieldsLabel">
                                        Mô tả
                                      </span>
                                      <span className="catItemExtraFieldsValue">
                                        <p>
                                          <span
                                            style={{
                                              fontFamily:
                                                "arial, helvetica, sans-serif",
                                            }}
                                          >
                                            <span style={{ fontSize: 16 }}>
                                              <b>&nbsp;</b>
                                            </span>
                                          </span>
                                        </p>
                                        <h2
                                          style={{
                                            fontSize: 15,
                                            fontFamily:
                                              "Arial, Helvetica, sans-serif",
                                            lineHeight: "20px",
                                            marginBottom: 15,
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontFamily:
                                                "arial, helvetica, sans-serif",
                                              fontSize: 16,
                                            }}
                                          >
                                            Thiết bị cầu trục
                                          </span>
                                          <span
                                            style={{
                                              fontFamily:
                                                "arial, helvetica, sans-serif",
                                              fontSize: 16,
                                            }}
                                          >
                                            &nbsp;là loại máy móc&nbsp;
                                            <span
                                              id="_mce_caret"
                                              data-mce-bogus="true"
                                            >
                                              <span style={{ fontSize: "90%" }}>
                                                <strong />
                                              </span>
                                            </span>
                                            chuyên dùng cho nhà xưởng, nhà máy,…
                                            nó đóng vai trò quan trọng trong
                                            hoạt động sản xuất của các doanh
                                            nghiệp.
                                          </span>
                                        </h2>
                                        <p
                                          style={{
                                            fontSize: 15,
                                            fontFamily:
                                              "Arial, Helvetica, sans-serif",
                                            lineHeight: "25px",
                                            margin: "0px 0px 15px",
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 16,
                                              fontFamily:
                                                "arial, helvetica, sans-serif",
                                              lineHeight: "20px",
                                            }}
                                          >
                                            Vì thường xuyên hoạt động trong
                                            nhiều môi trường khác nhau, đặc biệt
                                            là môi trường làm việc khắc nhiệt
                                            nên cầu trục – Cổng trục thường xảy
                                            ra các sự cố ( có thể tiên đoán
                                            được). Chính vì vậy chúng tôi mở ra
                                            bộ phận chuyên kiểm tra, sửa chữa và
                                            bảo dưỡng cho cầu trục&nbsp;trên
                                            toàn quốc.
                                          </span>
                                        </p>
                                        <div
                                          id="attachment_4466"
                                          className="wp-caption aligncenter"
                                          style={{
                                            fontSize: 15,
                                            fontFamily:
                                              "Arial, Helvetica, sans-serif",
                                            lineHeight: "20px",
                                            margin: "3px auto",
                                            textAlign: "center",
                                            maxWidth: "100%",
                                            width: 660,
                                          }}
                                        >
                                          <img
                                            src="images/dt/nhan-vien-bao-tri-nha-hang-khach-san.jpg"
                                            width={700}
                                            height={471}
                                            alt="nhan-vien-bao-tri-nha-hang-khach-san"
                                          />
                                          &nbsp;
                                        </div>
                                        <ul
                                          style={{
                                            fontSize: 15,
                                            fontFamily:
                                              "Arial, Helvetica, sans-serif",
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
                                                  fontSize: 16,
                                                  fontFamily:
                                                    "arial, helvetica, sans-serif",
                                                  lineHeight: "20px",
                                                }}
                                              >
                                                Sửa chữa các loại cầu trục –
                                                cổng trục.
                                              </span>
                                            </h3>
                                          </li>
                                        </ul>
                                        <p
                                          style={{
                                            fontSize: 15,
                                            fontFamily:
                                              "Arial, Helvetica, sans-serif",
                                            lineHeight: "25px",
                                            margin: "0px 0px 15px",
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 16,
                                              fontFamily:
                                                "arial, helvetica, sans-serif",
                                              lineHeight: "20px",
                                            }}
                                          >
                                            Đây là bộ phận chuyên tiếp nhận các
                                            sự cố về cầu trục, khách hàng có thể
                                            trao đổi trực tiếp để nhân viên kỹ
                                            thuật nắm được tình hình thực tế của
                                            bộ cầu trục&nbsp;
                                            <span
                                              style={{
                                                fontSize: 15,
                                                fontFamily:
                                                  "Arial, Helvetica, sans-serif",
                                                lineHeight: "20px",
                                                textDecorationLine: "underline",
                                              }}
                                            >
                                              <strong
                                                style={{ lineHeight: "20px" }}
                                              >
                                                <br />
                                              </strong>
                                            </span>
                                          </span>
                                        </p>
                                        <p
                                          style={{
                                            fontSize: 15,
                                            fontFamily:
                                              "Arial, Helvetica, sans-serif",
                                            lineHeight: "25px",
                                            margin: "0px 0px 15px",
                                            textAlign: "center",
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: "110%",
                                              fontFamily:
                                                "arial, helvetica, sans-serif",
                                              lineHeight: "20px",
                                            }}
                                          >
                                            <span
                                              style={{ fontFamily: "Arial" }}
                                            >
                                              <span
                                                style={{
                                                  fontFamily:
                                                    "arial, helvetica, sans-serif",
                                                  lineHeight: "20px",
                                                }}
                                              >
                                                Hotline:&nbsp;
                                                <a
                                                  href="tel:0907558123"
                                                  style={{
                                                    fontFamily: "Arial",
                                                    fontSize: 14,
                                                    textAlign: "start",
                                                  }}
                                                >
                                                  090 7558123
                                                </a>
                                                , Email:&nbsp;
                                              </span>
                                              <a href="mailto:hoalongcrane@gmail.com">
                                                hoalongcrane@gmail.com
                                              </a>
                                              &nbsp;
                                            </span>
                                          </span>
                                        </p>
                                        <p
                                          style={{
                                            fontSize: 15,
                                            fontFamily:
                                              "Arial, Helvetica, sans-serif",
                                            lineHeight: "25px",
                                            margin: "0px 0px 15px",
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: 16,
                                              fontFamily:
                                                "arial, helvetica, sans-serif",
                                              lineHeight: "20px",
                                            }}
                                          >
                                            &nbsp;
                                          </span>
                                        </p>
                                      </span>
                                    </li>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="noidungduoi1"></div>
                <div className="noidungduoi2"></div>
              </div>
              <div id="ja-cotphai">
                <div className="ja-workshome" id="Mod422">
                  <div className="workshome-title">
                    <h2>
                      <span>Sản phẩm</span>
                    </h2>
                  </div>
                  <div className="workshome-content">
                    <div className="browse-view">
                      {products && products.length > 0 ? (
                        products.map((product: any) => (
                          <div className="row" key={product._id}>
                            <div className="blocksp">
                              <div className="spacer">
                                {/* --- Phần Ảnh --- */}
                                <div className="product-anh">
                                  <Link
                                    href={`/san-pham/${product.slug.current}`}
                                  >
                                    {product.image ? (
                                      <img
                                        className="browseProductImage"
                                        alt={product.title}
                                        src={urlFor(product.image)
                                          .width(400)
                                          .height(400)
                                          .url()}
                                        style={{
                                          objectFit: "contain",
                                          width: "100%",
                                          height: "auto",
                                        }}
                                      />
                                    ) : (
                                      // Ảnh placeholder nếu không có ảnh
                                      <div
                                        style={{
                                          width: 400,
                                          height: 400,
                                          background: "#eee",
                                        }}
                                      >
                                        No Image
                                      </div>
                                    )}
                                  </Link>
                                </div>

                                {/* --- Phần Thông tin --- */}
                                <div className="product-thongtin">
                                  <h3 className="product-thongtin-ten">
                                    <Link
                                      href={`/san-pham/${product.slug.current}`}
                                    >
                                      {product.title}
                                    </Link>
                                  </h3>

                                  <div
                                    className="product-thongtin-salesPrice"
                                    data-currency="đ"
                                    data-currency-id={147}
                                  >
                                    {product.price
                                      ? new Intl.NumberFormat("vi-VN", {
                                          style: "currency",
                                          currency: "VND",
                                        }).format(product.price)
                                      : "Liên hệ"}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p style={{ padding: 20 }}>Đang cập nhật sản phẩm...</p>
                      )}
                    </div>
                  </div>
                </div>
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
