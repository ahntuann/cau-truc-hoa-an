import { Metadata } from "next";
import Link from "next/link";
import { client, urlFor } from "../../../sanity/client"; // Check lại đường dẫn import
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Lienhe from "@/components/Lienhe";
import { PortableText, PortableTextComponents } from "next-sanity";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

// 1. Fetch Data
async function getData(slug: string) {
  const query = `*[_type == "news" && slug.current == $slug][0]{
    title,
    description,
    image,
    content
  }`;
  return await client.fetch(query, { slug }, { next: { revalidate: 60 } });
}

// 2. SEO Dynamic
export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const data = await getData(params.slug);
  if (!data) return { title: "Bài viết không tồn tại" };

  return {
    title: data.title,
    description: data.description,
  };
}

// 3. CẤU HÌNH STYLE CHO NỘI DUNG (Để giống hệt web cũ)
const myPortableTextComponents: PortableTextComponents = {
  block: {
    // Thẻ P (Văn bản thường)
    normal: ({ children }) => (
      <p
        style={{
          fontSize: 15,
          fontFamily: "Arial, Helvetica, sans-serif",
          lineHeight: "25px",
          margin: "0px 0px 15px",
        }}
      >
        <span style={{ lineHeight: "20px" }}>{children}</span>
      </p>
    ),
    // Thẻ H2
    h2: ({ children }) => (
      <h2
        style={{
          fontSize: 15,
          fontFamily: "Arial, Helvetica, sans-serif",
          lineHeight: "20px",
          marginBottom: 15,
          fontWeight: "bold",
        }}
      >
        <span style={{ fontSize: "12pt", lineHeight: "20px" }}>{children}</span>
      </h2>
    ),
    // Thẻ H3
    h3: ({ children }) => (
      <h3
        style={{
          fontSize: 15,
          fontFamily: "Arial, Helvetica, sans-serif",
          lineHeight: "20px",
          marginBottom: 15,
          fontWeight: "bold",
        }}
      >
        <span style={{ fontSize: "12pt", lineHeight: "20px" }}>{children}</span>
      </h3>
    ),
    h4: ({ children }) => (
      <h4 style={{ fontSize: 15, marginBottom: 15, fontWeight: "bold" }}>
        {children}
      </h4>
    ),
  },
  list: {
    // Danh sách có chấm tròn (ul)
    bullet: ({ children }) => (
      <ul
        style={{
          fontSize: 15,
          fontFamily: "Arial, Helvetica, sans-serif",
          lineHeight: "20px",
          marginBottom: 15,
          listStyle: "disc", // Hiện chấm tròn
          paddingLeft: "40px", // Thụt đầu dòng
        }}
      >
        {children}
      </ul>
    ),
    // Danh sách số (ol)
    number: ({ children }) => (
      <ol
        style={{
          fontSize: 15,
          fontFamily: "Arial, Helvetica, sans-serif",
          lineHeight: "20px",
          marginBottom: 15,
          listStyle: "decimal",
          paddingLeft: "40px",
        }}
      >
        {children}
      </ol>
    ),
  },
  listItem: {
    // Từng dòng li
    bullet: ({ children }) => (
      <li
        style={{
          lineHeight: "20px",
          paddingTop: 3,
          paddingBottom: 3,
        }}
      >
        <span style={{ lineHeight: "20px" }}>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li
        style={{
          lineHeight: "20px",
          paddingTop: 3,
          paddingBottom: 3,
        }}
      >
        <span style={{ lineHeight: "20px" }}>{children}</span>
      </li>
    ),
  },
  marks: {
    // Chữ đậm (Strong)
    strong: ({ children }) => (
      <strong style={{ lineHeight: "20px", fontWeight: "bold" }}>
        {children}
      </strong>
    ),
    // Chữ link
    link: ({ value, children }) => {
      return (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0080ff", textDecoration: "underline" }}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    // Hiển thị ảnh trong bài viết
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div style={{ textAlign: "center", marginBottom: 15 }}>
          <img
            src={urlFor(value).url()}
            alt={value.alt || "Ảnh bài viết"}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      );
    },
  },
};

export default async function BaiViet(props: Props) {
  const params = await props.params;
  const data = await getData(params.slug);

  if (!data) return notFound();

  return (
    <>
      <div id="ja-khungchinh">
        <div className="main">
          <Header />
          <Breadcrumbs
            items={[
              { label: "Bài viết", url: "/bai-viet" },
              { label: data.title }, // Breadcrumb động theo tên bài
            ]}
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
                {/* --- KHU VỰC NỘI DUNG CHÍNH --- */}
                <div className="ja-workshome trangctbv">
                  <div className="workshome-title">
                    <h1>
                      <span>{data.title}</span>
                    </h1>
                  </div>
                  <div className="workshome-content">
                    <div id="k2Container" className="itemView temp_ trangcon">
                      <div className="itemBody">
                        <div className="itemFullText">
                          {/* RENDER NỘI DUNG TỪ SANITY */}
                          {data.content ? (
                            <PortableText
                              value={data.content}
                              components={myPortableTextComponents}
                            />
                          ) : (
                            <p>Đang cập nhật nội dung...</p>
                          )}
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

      {/* --- CÁC NÚT CHỨC NĂNG (GỌI ĐIỆN, TOP) GIỮ NGUYÊN --- */}
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
      </div>
      <div id="extra_js"></div>
      <Lienhe />
    </>
  );
}
