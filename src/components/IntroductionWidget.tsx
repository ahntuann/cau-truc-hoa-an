import { client, urlFor } from "../../sanity/client";
import Link from "next/link";

async function getData() {
  const query = `*[_type == "introduction"][0]{
    title,
    description,
    image
  }`;
  return await client.fetch(query, {}, { next: { revalidate: 60 } });
}

export default async function IntroductionWidget() {
  const data = await getData();

  if (!data) return null;

  return (
    <div className="extra5_1">
      <div className="ja-workshome" id="Mod419">
        <div className="workshome-title">
          <h2>
            <span>{data.title}</span>
          </h2>
        </div>
        <div className="workshome-content">
          <div id="k2Container k2ModuleBox419" className="itemListView">
            <div className="itemList">
              <div id="itemListLeading">
                <div className="itemRow">
                  <div className="itemContainer">
                    <div className="catItemView groupLeading">
                      {/* ẢNH ĐẠI DIỆN */}
                      <div className="catItemImageBlock">
                        <Link href="/gioi-thieu">
                          {data.image ? (
                            <img
                              src={urlFor(data.image).width(300).url()}
                              alt={data.title}
                              style={{ maxWidth: "100%", height: "auto" }}
                            />
                          ) : (
                            <span>No Image</span>
                          )}
                        </Link>
                      </div>

                      {/* THÔNG TIN MÔ TẢ */}
                      <div className="catItemThongTin">
                        <div className="catItemExtraFields">
                          <li
                            className="typeTextarea group1 id1"
                            style={{ listStyle: "none" }}
                          >
                            <span className="catItemExtraFieldsLabel">
                              Mô tả
                            </span>
                            <span className="catItemExtraFieldsValue">
                              {/* Thay thế đống span lồng nhau bằng description lấy từ Sanity */}
                              <div
                                style={{
                                  boxSizing: "border-box",
                                  marginTop: 10,
                                  marginBottom: 10,
                                  fontFamily: "Arial",
                                  lineHeight: "1.4", // Chỉnh lại line-height cho dễ đọc
                                  fontSize: 13,
                                  textAlign: "justify",
                                  color: "#333333",
                                }}
                              >
                                {data.description}
                              </div>
                            </span>
                          </li>
                        </div>

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
                                fontFamily: "arial, helvetica, sans-serif",
                              }}
                            >
                              <span
                                style={{
                                  boxSizing: "border-box",
                                  fontSize: 16,
                                }}
                              >
                                &nbsp;
                              </span>
                            </span>
                          </span>
                        </p>
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px 0px 10px",
                            padding: 0,
                            fontFamily: "Arial",
                            textAlign: "justify",
                          }}
                        >
                          &nbsp;
                        </p>
                        <p
                          style={{
                            boxSizing: "border-box",
                            margin: "0px 0px 10px",
                            padding: 0,
                            color: "#333333",
                            fontSize: 11,
                            fontFamily: "Arial, Helvetica, sans-serif",
                            textAlign: "right",
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
                                  <em
                                    style={{
                                      boxSizing: "border-box",
                                    }}
                                  >
                                    Trân trọng!
                                  </em>
                                </span>
                              </span>
                            </span>
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
                            textAlign: "right",
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
                                  <em
                                    style={{
                                      boxSizing: "border-box",
                                    }}
                                  >
                                    &nbsp;
                                  </em>
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                        <div className="k2ReadMore catItemReadMore">
                          <Link href="/gioi-thieu">
                            <i className="fa fa-pencil-square-o" />
                            Xem thêm...{" "}
                          </Link>
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
  );
}
