import Link from "next/link";
import { client, urlFor } from "../../sanity/client";

// Interface dữ liệu
interface Product {
  _id: string;
  title: string;
  slug: { current: string };
  image: any;
  price: string;
}

interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  image: any;
  // Thêm mảng products vào interface category
  products: Product[];
}

async function getData() {
  // CÂU TRUY VẤN THẦN THÁNH
  // 1. Lấy tất cả category
  // 2. Bên trong mỗi category, lấy danh sách product có references tới id của category đó
  // 3. [0...8] nghĩa là chỉ lấy 8 cái đầu tiên
  const query = `*[_type == "category"] | order(_createdAt asc) {
    _id,
    title,
    slug,
    image,
    "products": *[_type == "product" && references(^._id)] | order(_createdAt desc) [0...8] {
      _id,
      title,
      slug,
      image,
      price
    }
  }`;

  return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export default async function ProductList() {
  const categories: Category[] = await getData();

  if (!categories?.length) return <div>Đang cập nhật...</div>;

  return (
    <div className="container mx-auto">
      {/* Vòng lặp hiển thị từng Block Danh mục */}
      {categories.map(
        (cat) =>
          // Chỉ hiển thị nếu danh mục đó CÓ sản phẩm con (hoặc bỏ điều kiện này nếu muốn hiện hết)
          cat.products &&
          cat.products.length > 0 && (
            <div
              className="category-block mb-10 border border-gray-200"
              key={cat._id}
            >
              {/* Header Block (Màu đỏ như ảnh mẫu) */}
              <div className="bg-[#00AEEF] h-[40px] flex items-center justify-between px-4">
                <h3 className="text-white font-bold uppercase text-lg m-0 p-0 leading-[40px]">
                  <Link
                    href={`/danh-muc/${cat.slug?.current}`}
                    className="text-white no-underline hover:text-yellow-200"
                  >
                    {cat.title}
                  </Link>
                </h3>
                <Link
                  href={`/danh-muc/${cat.slug?.current}`}
                  className="text-white text-xs underline hover:text-yellow-200"
                >
                  Xem tất cả
                </Link>
              </div>

              {/* Body Block: Chia 2 cột (Trái: Banner to - Phải: Grid 8 sản phẩm) */}
              <div className="flex flex-wrap md:flex-nowrap">
                {/* CỘT TRÁI: ẢNH ĐẠI DIỆN CATEGORY (Banner đứng) */}
                <div className="w-full md:w-1/4 border-r border-gray-200 p-2">
                  <Link
                    href={`/danh-muc/${cat.slug?.current}`}
                    className="block h-full relative group overflow-hidden"
                  >
                    {cat.image ? (
                      <img
                        src={urlFor(cat.image).url()}
                        alt={cat.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="bg-gray-100 h-full flex items-center justify-center">
                        No Image
                      </div>
                    )}
                  </Link>
                </div>

                {/* CỘT PHẢI: GRID 8 SẢN PHẨM */}
                <div className="w-full md:w-3/4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
                    {/* gap-0 để kẻ viền giống ảnh mẫu */}
                    {cat.products.map((prod) => (
                      <div
                        key={prod._id}
                        className="border-b border-r border-gray-100 p-4 hover:shadow-lg transition-shadow group"
                      >
                        <div className="aspect-square overflow-hidden mb-2">
                          <Link href={`/san-pham/${prod.slug?.current}`}>
                            {prod.image && (
                              <img
                                src={urlFor(prod.image)
                                  .width(300)
                                  .height(300)
                                  .url()}
                                alt={prod.title}
                                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                // Hiệu ứng hover scale nhẹ như bạn yêu cầu
                              />
                            )}
                          </Link>
                        </div>
                        <h4 className="text-sm text-center font-medium line-clamp-2 h-10 mb-2">
                          <Link href={`/san-pham/${prod.slug?.current}`}>
                            {prod.title}
                          </Link>
                        </h4>
                        <div className="text-center text-[#E31E24] font-bold">
                          {prod.price || "Liên hệ"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
}
