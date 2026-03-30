import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lienhe from "@/components/Lienhe";
import { client, urlFor } from "../../sanity/client";
import { PortableText } from "next-sanity";
import { Metadata } from "next";

// Fetch dữ liệu
async function getData() {
  const query = `*[_type == "introduction"][0]{
    title,
    description,
    image,
    content
  }`;
  return await client.fetch(query, {}, { next: { revalidate: 60 } });
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  return {
    title: data?.title || "Giới thiệu",
    description: data?.description || "Giới thiệu công ty...",
  };
}

export default async function GioiThieu() {
  const data = await getData();

  if (!data) return <div>Đang cập nhật nội dung...</div>;

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
              <div id="" className="">
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
                      <span>{data.title}</span>
                    </h1>
                  </div>
                  <div className="workshome-content">
                    <div
                      id="k2Container"
                      className="itemView lienhe temp_lienhe trangcon"
                    >
                      <div className="itemBody">
                        {/* --- PHẦN ẢNH --- */}
                        <div className="itemImageBlock">
                          <span className="itemImage">
                            {data.image && (
                              <a
                                className="modal"
                                rel="{handler: 'image'}"
                                href="#"
                                title="Click vào để xem hình ảnh"
                              >
                                <img
                                  src={urlFor(data.image).width(600).url()}
                                  alt={data.title}
                                  style={{
                                    width: "100%", // Sửa lại chút để ảnh ko bị vỡ layout
                                    maxWidth: 600,
                                    height: "auto",
                                  }}
                                />
                              </a>
                            )}
                          </span>
                        </div>

                        {/* --- PHẦN NỘI DUNG CHÍNH --- */}
                        <div className="itemFullText">
                          {/* Tiêu đề bài viết */}
                          {/* <h1
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
                            {data.title}
                          </h1> */}

                          {/* Nội dung Portable Text */}
                          <div
                            className="nd"
                            style={{
                              boxSizing: "border-box",
                              color: "#333333",
                              fontFamily: "Arial, Helvetica, sans-serif",
                              fontSize: 14,
                              textAlign: "justify", // Giữ style justify cũ
                            }}
                          >
                            <PortableText
                              value={data.content}
                              components={{
                                block: {
                                  // Giữ style cũ cho thẻ P
                                  normal: ({ children }) => (
                                    <p
                                      style={{
                                        marginBottom: "10px",
                                        lineHeight: "24px",
                                      }}
                                    >
                                      {children}
                                    </p>
                                  ),
                                  h2: ({ children }) => (
                                    <h2
                                      style={{
                                        color: "#209dee",
                                        fontSize: "18px",
                                        marginTop: "15px",
                                      }}
                                    >
                                      {children}
                                    </h2>
                                  ),
                                },
                              }}
                            />

                            {/* Chữ ký cuối bài (Giữ nguyên HTML cứng nếu muốn, hoặc xóa đi nhập trong Sanity) */}
                            <h4 style={{ fontSize: 14, textAlign: "center" }}>
                              CẦU TRỤC THANG MÁY HOÀ AN
                            </h4>
                            <div style={{ textAlign: "center" }}>
                              <span style={{ fontSize: "110%" }}>
                                <strong>Địa chỉ :</strong>&nbsp;Thửa đất 1271,
                                Đường Khánh Bình 02, Khu phố Khánh Tân, Phường
                                Tân Hiệp, TP Hồ Chí Minh (Bình Dương cũ)
                              </span>
                            </div>
                            <div style={{ textAlign: "center" }}>
                              <span style={{ fontSize: "110%" }}>
                                <strong>Hotline :&nbsp;</strong>
                                <a href="tel:0903152530">0903152530</a>
                              </span>
                            </div>
                            <div style={{ textAlign: "center" }}>
                              <span style={{ fontSize: "110%" }}>
                                <strong>Email :&nbsp;</strong>
                                <a href="mailto:hoaancty@yahoo.com.vn">
                                  hoaancty@yahoo.com.vn
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
                                    fontFamily: "arial, helvetica, sans-serif",
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
                                    fontFamily: "arial, helvetica, sans-serif",
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
      <Lienhe />
      <div id="extra_js"></div>
    </>
  );
}
