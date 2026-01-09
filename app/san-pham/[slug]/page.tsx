import { Metadata } from "next";
import Link from "next/link";
import { client, urlFor } from "../../../sanity/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductDescription from "@/components/ProductDescription";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Lienhe from "@/components/Lienhe";

type Props = {
  params: Promise<{ slug: string }>;
};

// --- HELPER: FORMAT GIÁ ---
const formatPrice = (price: number | undefined | null) => {
  if (price === undefined || price === null || isNaN(Number(price))) {
    return "Liên hệ";
  }
  return (
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    })
      .format(price)
      .replace("₫", "")
      .trim() + " VNĐ"
  );
};

// 1. SEO
export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const query = `*[_type == "product" && slug.current == $slug][0]{ title, description }`;
  const product = await client.fetch(query, { slug: params.slug });
  if (!product) return { title: "Sản phẩm không tồn tại" };
  return {
    title: `${product.title}`,
    description: product.description?.slice(0, 160),
  };
}

// 2. Fetch Data
async function getData(slug: string) {
  const query = `{
    "product": *[_type == "product" && slug.current == $slug][0] {
      _id, title, slug, image, price, description,
      "category": category->{ _id, title, slug }
    },
    "relatedProducts": *[_type == "product" && slug.current != $slug && references(*[_type == "product" && slug.current == $slug][0].category._ref)] | order(_createdAt desc)[0...6] {
      _id, title, slug, image, price
    }
  }`;
  return await client.fetch(query, { slug }, { next: { revalidate: 0 } });
}

export default async function ProductDetailPage(props: Props) {
  const params = await props.params;
  const { product, relatedProducts } = await getData(params.slug);

  if (!product) return notFound();

  return (
    <div className="flex flex-col min-h-screen bg-white w-full !overflow-x-hidden">
      <Header />

      {/* --- BREADCRUMBS (Nằm ngoài scope cô lập để giữ style cũ nếu cần) --- */}
      <Breadcrumbs
        items={[
          { label: "Sản phẩm", url: "/san-pham" },
          { label: product?.title || "Chi tiết" },
        ]}
        backgroundImage="/images/background-footer-top.jpg"
      />

      {/* --- MAIN CONTENT START --- */}
      {/* ID này dùng để Reset CSS cục bộ */}
      <div id="isolated-product-scope" className="w-full flex-grow">
        {/* CSS RESET CỤC BỘ: Ép buộc trình duyệt nghe theo style mới */}
        <style>{`
          #isolated-product-scope * {
            box-sizing: border-box !important;
            max-width: 100% !important;
          }
          /* Ép ảnh không bao giờ tràn */
          #isolated-product-scope img {
            height: auto !important;
            display: block !important;
          }
          /* Ép chữ phải xuống dòng */
          #isolated-product-scope p, 
          #isolated-product-scope h1, 
          #isolated-product-scope h2, 
          #isolated-product-scope h3, 
          #isolated-product-scope div, 
          #isolated-product-scope span {
            white-space: normal !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            word-break: break-word !important;
          }
        `}</style>

        <div className="!mx-auto !w-full !max-w-[1200px] !px-4 md:!px-12 lg:!px-20 !py-8">
          {/* === PHẦN 1: INFO GRID === */}
          {/* !flex-col cho mobile, !grid cho desktop */}
          <div className="!flex !flex-col md:!grid md:!grid-cols-2 !gap-8 !mb-12">
            {/* CỘT ẢNH */}
            <div className="!w-full">
              <div className="!relative !border !border-gray-100 !rounded-lg !p-2 !shadow-sm !bg-white">
                <div className="!w-full !aspect-square !overflow-hidden !flex !items-center !justify-center">
                  {product.image ? (
                    <img
                      src={urlFor(product.image).width(800).url()}
                      alt={product.title}
                      className="!object-contain !w-full !h-full hover:!scale-105 !transition-transform !duration-500"
                    />
                  ) : (
                    <div className="!bg-gray-100 !w-full !h-full !flex !items-center !justify-center !text-gray-400">
                      No Image
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* CỘT THÔNG TIN */}
            <div className="!flex !flex-col !w-full">
              <h1 className="!text-2xl md:!text-3xl !font-bold !text-[#0080ff] !mb-4 !leading-tight">
                {product.title}
              </h1>

              <div className="!bg-gray-50 !p-4 !rounded !mb-6 !border !border-gray-100 !w-full">
                <span className="!block !text-gray-500 !text-sm !mb-1">
                  Giá bán:
                </span>
                <span className="!text-3xl !font-bold !text-[#E31E24]">
                  {formatPrice(product.price)}
                </span>
              </div>

              <div className="!text-gray-600 !mb-6 !text-sm !leading-relaxed !border-b !border-gray-200 !pb-6 !w-full">
                <p className="!font-semibold !mb-2 !text-gray-800">
                  Đặc điểm nổi bật:
                </p>
                <div className="!block !w-full">
                  {/* Dùng thẻ div thường thay vì component phức tạp ở đây để tránh lỗi style */}
                  <p className="!line-clamp-6">
                    {product.description ||
                      "Liên hệ để biết thêm chi tiết kỹ thuật."}
                  </p>
                </div>
              </div>

              <div className="!flex !flex-col sm:!flex-row !gap-4 !mt-auto !w-full">
                <a
                  href="tel:0907558123"
                  className="!w-full sm:!flex-1 !bg-[#d10002] !text-white !text-center !py-3 !px-6 !rounded !font-bold !uppercase hover:!bg-red-700 !transition-colors !shadow-lg !shadow-red-200"
                >
                  Đặt mua ngay
                  <span className="!block !text-xs !font-normal !normal-case !opacity-90">
                    Giao hàng tận nơi
                  </span>
                </a>
                <a
                  href="tel:0907558123"
                  className="!w-full sm:!flex-1 !bg-[#e7b705] !text-white !text-center !py-3 !px-6 !rounded !font-bold !uppercase hover:!bg-orange-600 !transition-colors !shadow-lg !shadow-orange-200"
                >
                  0907 558 123
                  <span className="!block !text-xs !font-normal !normal-case !opacity-90">
                    Tư vấn kỹ thuật 24/7
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* === PHẦN 2: CHI TIẾT SẢN PHẨM === */}
          <div className="!mb-12 !w-full">
            <div className="!bg-[#f2f2f2] !px-4 !py-3 !border-l-4 !border-[#0080ff]">
              <h3 className="!text-lg !font-bold !uppercase !text-gray-800 !m-0">
                Thông tin sản phẩm
              </h3>
            </div>
            <ProductDescription content={product.description} />
          </div>

          {/* === PHẦN 3: SẢN PHẨM LIÊN QUAN === */}
          <div className="!w-full">
            <h2 className="!text-2xl !font-bold !text-[#0080ff] !mb-6 !border-b-2 !border-gray-100 !pb-2">
              Sản phẩm liên quan
            </h2>
            <div className="!grid !grid-cols-1 sm:!grid-cols-2 md:!grid-cols-3 !gap-6">
              {relatedProducts && relatedProducts.length > 0 ? (
                relatedProducts.map((relProd: any) => (
                  <div
                    key={relProd._id}
                    className="group !border !border-gray-200 !rounded hover:!shadow-xl !transition-all !duration-300 !bg-white !flex !flex-col"
                  >
                    <div className="!relative !aspect-square !overflow-hidden !border-b !border-gray-100 !p-4">
                      <Link
                        href={`/san-pham/${relProd.slug.current}`}
                        className="!block !w-full !h-full"
                      >
                        {relProd.image ? (
                          <img
                            src={urlFor(relProd.image)
                              .width(400)
                              .height(400)
                              .url()}
                            alt={relProd.title}
                            className="!w-full !h-full !object-contain group-hover:!scale-110 !transition-transform !duration-500"
                          />
                        ) : (
                          <div className="!w-full !h-full !bg-gray-100 !flex !items-center !justify-center !text-gray-400">
                            No Img
                          </div>
                        )}
                      </Link>
                    </div>
                    <div className="!p-4 !text-center !flex !flex-col !flex-grow">
                      <h3 className="!font-semibold !text-gray-800 !mb-2 !leading-5 !line-clamp-2 !min-h-[40px]">
                        <Link href={`/san-pham/${relProd.slug.current}`}>
                          {relProd.title}
                        </Link>
                      </h3>
                      <p className="!text-[#E31E24] !font-bold !mt-auto">
                        {formatPrice(relProd.price)}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="!text-gray-500 !text-center !py-8">
                  Chưa có sản phẩm liên quan.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* --- END MAIN CONTENT --- */}

      <Footer />
      <Lienhe />
    </div>
  );
}
