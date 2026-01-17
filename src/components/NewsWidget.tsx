import { client, urlFor } from "../../sanity/client";
import Link from "next/link";

async function getData() {
  // Lấy 2 tin tức mới nhất
  const query = `*[_type == "news"] | order(_createdAt desc)[0...2]{
    _id,
    title,
    slug,
    image,
    description
  }`;
  return await client.fetch(query, {}, { next: { revalidate: 60 } });
}

export default async function NewsWidget() {
  const news = await getData();

  return (
    <div className="extra5_2">
      <div className="ja-workshome" id="Mod329">
        <div className="workshome-title">
          <h2>
            <span>Tin tức &amp; sự kiện</span>
          </h2>
        </div>
        <div className="workshome-content">
          <div id="k2Container k2ModuleBox329" className="itemListView">
            <div className="itemList">
              <div id="itemListLeading">
                {news && news.length > 0 ? (
                  news.map((item: any) => (
                    <div className="itemRow" key={item._id}>
                      <div className="itemContainer">
                        <div className="catItemView groupLeading">
                          {/* ẢNH ĐẠI DIỆN */}
                          <div className="catItemImageBlock">
                            <Link href={`/bai-viet/${item.slug.current}`}>
                              {item.image ? (
                                <img
                                  src={urlFor(item.image)
                                    .width(400)
                                    .height(300)
                                    .url()}
                                  alt={item.title}
                                  style={{ maxWidth: "100%", height: "auto" }}
                                />
                              ) : (
                                <div
                                  style={{
                                    width: "100%",
                                    height: 150,
                                    background: "#eee",
                                  }}
                                >
                                  No Img
                                </div>
                              )}
                            </Link>
                          </div>

                          {/* THÔNG TIN */}
                          <div className="catItemThongTin">
                            <h3 className="catItemTitle">
                              <Link href={`/bai-viet/${item.slug.current}`}>
                                {item.title}
                              </Link>
                            </h3>
                            <div className="catItemExtraFields">
                              <li
                                className="typeTextarea group1 id1"
                                style={{ listStyle: "none" }}
                              >
                                <span className="catItemExtraFieldsLabel">
                                  Mô tả
                                </span>
                                <span className="catItemExtraFieldsValue">
                                  {/* Tiêu đề phụ (mô phỏng theo code cũ) */}
                                  {/* <h2
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
                                        fontSize: "12pt",
                                        lineHeight: "20px",
                                      }}
                                    >
                                      {item.title}
                                    </span>
                                  </h2> */}
                                  {/* Mô tả ngắn */}
                                  <p
                                    style={{
                                      fontSize: 15,
                                      fontFamily:
                                        "Arial, Helvetica, sans-serif",
                                      lineHeight: "25px",
                                      margin: "0px 0px 15px",
                                    }}
                                  >
                                    <span style={{ lineHeight: "20px" }}>
                                      {item.description}
                                    </span>
                                  </p>
                                </span>
                              </li>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="p-4">Chưa có tin tức nào.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
