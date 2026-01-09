import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { client, urlFor } from "../../sanity/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Lienhe from "@/components/Lienhe";

export const metadata: Metadata = {
  title: "Sản phẩm - PA LĂNG XÍCH ĐIỆN",
  description: "Danh sách các sản phẩm PA LĂNG XÍCH ĐIỆN...",
};

async function getData() {
  const defaultCategoryTitle = "PA LĂNG XÍCH ĐIỆN";

  // Query này lấy 3 thứ:
  // 1. Thông tin của chính danh mục "PA LĂNG XÍCH ĐIỆN" (để lấy slug gắn vào link)
  // 2. Sản phẩm thuộc danh mục đó
  // 3. List toàn bộ danh mục cho sidebar
  const query = `{
    "currentCategory": *[_type == "category" && title == "${defaultCategoryTitle}"][0] {
      _id, title, slug
    },
    "products": *[_type == "product" && references(*[_type == "category" && title == "${defaultCategoryTitle}"]._id)] | order(_createdAt desc) {
      _id, title, slug, image, price
    },
    "categories": *[_type == "category"] | order(title asc) {
      _id, title, slug
    }
  }`;

  return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export default async function SanPhamPage() {
  const { products, categories, currentCategory } = await getData();

  // Slug của danh mục hiện tại (dùng để tạo link sản phẩm đúng chuẩn URL bạn yêu cầu)
  const currentCatSlug = currentCategory?.slug?.current || "pa-lang-xich-dien";

  return (
    <>
      <Script id="hover-orderlist" strategy="lazyOnload">
        {`
          if (typeof jQuery !== 'undefined') {
            jQuery(document).ready(function () {
                jQuery('.orderlistcontainer').hover(
                    function() { jQuery(this).find('.orderlist').stop().show()},
                    function() { jQuery(this).find('.orderlist').stop().hide()}
                )
            });
          }
        `}
      </Script>

      <div id="ja-khungchinh">
        <div className="main">
          <Header />

          {/* BREADCRUMB: Trang chủ » Sản phẩm » PA LĂNG XÍCH ĐIỆN */}
          <Breadcrumbs
            items={[
              { label: "Sản phẩm", url: "/san-pham" },
              { label: currentCategory?.title || "PA LĂNG XÍCH ĐIỆN" },
            ]}
            backgroundImage="/images/background-footer-top.jpg"
          />

          <div id="ja-noidunggiua" className="mt-8">
            <div className="main2 flex flex-wrap md:flex-nowrap gap-8">
              {/* --- CỘT GIỮA: DANH SÁCH SẢN PHẨM --- */}
              <div id="ja-cotgiua" className="w-full md:w-[75%]">
                <div className="ja-workshome trangdmsp">
                  <div className="workshome-title">
                    <h1>
                      <span>
                        {currentCategory?.title || "PA LĂNG XÍCH ĐIỆN"}
                      </span>
                    </h1>
                  </div>
                  <div className="workshome-content">
                    <div className="browse-view">
                      <div className="orderby-displaynumber">
                        <div className="width70 floatleft">
                          <div className="orderlistcontainer">
                            <div className="title">Sắp xếp theo</div>
                            <div className="activeOrder">
                              <a href="#">Ngày tạo sản phẩm +/-</a>
                            </div>
                          </div>
                        </div>
                        <div className="width30 floatright display-number">
                          Hiển thị {products.length} sản phẩm
                        </div>
                      </div>

                      <div className="row">
                        {products.length > 0 ? (
                          products.map((prod: any) => (
                            <div className="blocksp" key={prod._id}>
                              <div className="spacer">
                                <div className="product-anh">
                                  {/* SỬA LINK SẢN PHẨM: /san-pham/slug-san-pham */}
                                  <Link
                                    href={`/san-pham/${prod.slug?.current}`}
                                  >
                                    {prod.image ? (
                                      <img
                                        className="browseProductImage"
                                        src={urlFor(prod.image)
                                          .width(400)
                                          .height(400)
                                          .url()}
                                        alt={prod.title}
                                      />
                                    ) : (
                                      <div className="bg-gray-200 h-[200px] flex items-center justify-center">
                                        No Image
                                      </div>
                                    )}
                                  </Link>
                                </div>
                                <div className="product-thongtin">
                                  <h3 className="product-thongtin-ten">
                                    <Link
                                      href={`/san-pham/${prod.slug?.current}`}
                                    >
                                      {prod.title}
                                    </Link>
                                  </h3>
                                  <div className="product-thongtin-salesPrice">
                                    {prod.price
                                      ? `${prod.price.toLocaleString()} đ`
                                      : "Liên hệ"}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="p-4 w-full text-center text-gray-500">
                            Chưa có sản phẩm nào.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- CỘT PHẢI: SIDEBAR --- */}
              <div
                id="ja-cotphai"
                className="w-full md:w-[25%] flex flex-col gap-8"
              >
                {/* 1. MODULE DANH MỤC */}
                <div className="w-full shadow-md">
                  <div className="bg-[#1565d8] py-3 px-2 text-center">
                    <h2 className="text-white text-[15px] font-semibold uppercase tracking-wide leading-none m-0">
                      DANH MỤC SẢN PHẨM
                    </h2>
                  </div>
                  <div className="bg-[#0e4da4]">
                    {categories && categories.length > 0 ? (
                      <ul className="flex flex-col">
                        {categories.map((cat: any) => (
                          <li
                            key={cat._id}
                            className="border-b border-white last:border-0"
                          >
                            {/* SỬA LINK DANH MỤC: /danh-muc/slug-danh-muc */}
                            <Link
                              href={`/danh-muc/${cat.slug?.current}`}
                              className="block py-4 px-5 text-white text-[14px] font-bold hover:bg-[#0b3f8f] transition-colors"
                            >
                              {cat.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-white p-4 text-center">
                        Đang cập nhật...
                      </p>
                    )}
                  </div>
                </div>

                {/* 2. MODULE SẢN PHẨM MỚI */}
                <div className="w-full shadow-md">
                  <div className="bg-[#1565d8] py-3 px-2 text-center">
                    <h2 className="text-white text-[15px] font-semibold uppercase tracking-wide leading-none m-0">
                      SẢN PHẨM MỚI
                    </h2>
                  </div>
                  <div className="bg-[#0e4da4] p-4">
                    <div className="flex flex-col gap-4">
                      {products.slice(0, 5).map((prod: any) => (
                        <div
                          className="flex gap-3 items-start border-b border-blue-400 pb-4 last:border-0 last:pb-0"
                          key={`sidebar-${prod._id}`}
                        >
                          <div className="w-20 h-20 flex-shrink-0 bg-white p-1 rounded overflow-hidden shadow-sm">
                            <Link href={`/san-pham/${prod.slug?.current}`}>
                              {prod.image ? (
                                <img
                                  className="w-full h-full object-contain"
                                  src={urlFor(prod.image)
                                    .width(200)
                                    .height(200)
                                    .url()}
                                  alt={prod.title}
                                />
                              ) : (
                                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-xs text-black">
                                  No Img
                                </div>
                              )}
                            </Link>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-medium leading-tight mb-2">
                              <Link
                                href={`/san-pham/${prod.slug?.current}`}
                                className="text-white hover:text-yellow-300 transition-colors duration-200 line-clamp-2"
                              >
                                {prod.title}
                              </Link>
                            </h3>
                            <div className="text-yellow-400 font-bold text-sm">
                              {prod.price
                                ? `${prod.price.toLocaleString()} đ`
                                : "Liên hệ"}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
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
