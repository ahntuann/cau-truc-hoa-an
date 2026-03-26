import Link from "next/link";
import { client } from "../../sanity/client"; // Đảm bảo đường dẫn này đúng

// Hàm lấy tất cả danh mục từ Sanity (Sắp xếp theo thứ tự bảng chữ cái)
async function getCategories() {
  const query = `*[_type == "category"] | order(title asc) {
    _id, title, slug
  }`;
  return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export default async function Header() {
  // Lấy dữ liệu ngay trong Component Header
  const categories = await getCategories();

  return (
    <>
      <div id="ja-header">
        <div className="header1">
          <div className="main2">
            <div className="header1_1">
              <div className="ja-workshome" id="Mod369">
                <div className="workshome-content">
                  <div className="custom">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <i className="fa fa-volume-control-phone" />{" "}
                            0903152530
                          </td>
                          <td>
                            <i className="fa fa-map-marker" /> 78/18/8 Bùi Thị
                            Cội, KP Đông An, P. Tân Đông Hiệp, TP Dĩ An, Bình
                            Dương
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="header1_2"></div>
            <div className="header1_3"></div>
          </div>
        </div>
        <div className="header2">
          <div className="main2">
            <div className="header2_1"></div>
            <div className="header2_2"></div>
            <div className="header2_3"></div>
            <div className="header2_4"></div>
          </div>
        </div>
      </div>
      <div id="ja-menungang">
        <div className="menungang">
          <div className="main2">
            <div className="ja-workshome" id="Mod370">
              <div className="workshome-content">
                <div className="custom">
                  <p>
                    <Link href="/">
                      <img
                        src="/images/logo.jpeg"
                        alt="Logo"
                        width={277}
                        height={186}
                      />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="ja-workshome" id="Mod366">
              <div className="workshome-content">
                <ul className="menu level0">
                  <li className="item-991 current active">
                    <Link href="/">Trang chủ</Link>
                  </li>
                  <li className="item-1010">
                    <Link href="/gioi-thieu">Giới thiệu</Link>
                  </li>
                  <li className="item-1006 deeper">
                    <Link href="/san-pham">Sản phẩm</Link>
                    <ul>
                      {/* --- RENDER MENU ĐỘNG TẠI ĐÂY --- */}
                      {categories.map((cat: any) => (
                        <li key={cat._id} className="">
                          <Link href={`/danh-muc/${cat.slug?.current}`}>
                            {cat.title}
                          </Link>
                        </li>
                      ))}
                      {/* -------------------------------- */}
                    </ul>
                  </li>
                  <li className="item-1076">
                    <Link href="/dich-vu-sua-chua">Dịch vụ sửa chữa</Link>
                  </li>
                  <li className="item-1011">
                    <Link href="/lien-he">Liên hệ</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="ja-workshome" id="Mod377">
              <div className="workshome-content">
                {/*BEGIN Search Box */}
                <form
                  className="searchID377"
                  action="/tim-kiem" // Tạm trỏ form này về trang /tim-kiem nội bộ của bạn (nếu có làm sau này)
                  method="get"
                >
                  <div className="module_search search">
                    <input
                      name="keyword"
                      alt="Tìm kiếm"
                      className="inputbox mod_virtuemart_search"
                      type="text"
                      defaultValue=""
                      placeholder="Nhập từ khóa ..."
                    />
                    <select
                      name="category_slug"
                      className="sp-vmsearch-categories"
                    >
                      <option value="">Tất cả danh mục</option>

                      {/* --- RENDER SELECT ĐỘNG TẠI ĐÂY --- */}
                      {categories.map((cat: any) => (
                        <option
                          key={`search-${cat._id}`}
                          value={cat.slug?.current} // Lấy value là slug để sau này làm bộ lọc tìm kiếm cho dễ
                          data-name={cat.title}
                        >
                          {cat.title}
                        </option>
                      ))}
                      {/* ---------------------------------- */}
                    </select>
                    <input
                      type="hidden"
                      name="custom_parent_id"
                      defaultValue=""
                    />
                    <button
                      type="submit"
                      data-searchid={377}
                      className="buttontim button"
                      style={{
                        border: "none",
                        background: "none",
                        cursor: "pointer",
                      }}
                    >
                      <i className="fa fa-search" />
                    </button>
                  </div>
                </form>
                {/* End Search Box */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
