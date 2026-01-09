function Header() {
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
                            <i className="fa fa-volume-control-phone" /> 090
                            7558123
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
                    <img
                      src="/images/23.jpg"
                      alt="23.jpg"
                      width={277}
                      height={186}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="ja-workshome" id="Mod366">
              <div className="workshome-content">
                <ul className="menu level0">
                  <li className="item-991 current active">
                    {" "}
                    <a href="/">Trang chủ</a>
                  </li>
                  <li className="item-1010">
                    {" "}
                    <a href="/gioi-thieu">Giới thiệu</a>
                  </li>
                  <li className="item-1006 deeper">
                    {" "}
                    <a href="/san-pham">Sản phẩm</a>
                    <ul>
                      <li className="">
                        <a href="/danh-muc/pa-lang-xich-dien">
                          Pa lăng xích điện
                        </a>
                      </li>
                      <li className="">
                        <a href="/danh-muc/phu-kien-cau-truc">
                          Phụ kiện cầu trục
                        </a>
                      </li>
                      <li className="">
                        <a href="/danh-muc/hop-giam-toc">Hộp giảm tốc</a>
                      </li>
                      <li className="">
                        <a href="/danh-muc/phanh-thuy-luc">Phanh thuỷ lực</a>
                      </li>
                      <li className="">
                        <a href="/danh-muc/dong-co">Động cơ</a>
                      </li>
                    </ul>
                  </li>
                  <li className="item-1076">
                    {" "}
                    <a href="dich-vu-sua-chua/">Dịch vụ sửa chữa</a>
                  </li>
                  {/* <li className="item-1175">
                    {" "}
                    <a href="du-an/">Dự án</a>
                  </li> */}
                  <li className="item-1011">
                    {" "}
                    <a href="/lien-he">Liên hệ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="ja-workshome" id="Mod377">
              <div className="workshome-content">
                {/*BEGIN Search Box */}
                <form
                  className="searchID377"
                  action="https://cautructhangmayhoalong.com/san-pham/search.html"
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
                      name="virtuemart_category_id"
                      className="sp-vmsearch-categories"
                    >
                      <option value={0}>Tất cả danh mục</option>
                      <option value={1389} data-name="Sàn nâng thủy lực">
                        {" "}
                        Sàn nâng thủy lực
                      </option>
                      <option value={1388} data-name="Nhà Thép">
                        {" "}
                        Nhà Thép
                      </option>
                      <option value={1380} data-name="Cầu trục">
                        {" "}
                        Cầu trục
                      </option>
                      <option value={1385} data-name="Cầu trục quay">
                        -- Cầu trục quay
                      </option>
                      <option value={1383} data-name="Cầu trục dầm đôi">
                        -- Cầu trục dầm đôi
                      </option>
                      <option value={1387} data-name="Cầu trục treo">
                        -- Cầu trục treo
                      </option>
                      <option value={1384} data-name="Cầu trục Monorail">
                        -- Cầu trục Monorail
                      </option>
                      <option value={1382} data-name="Cầu trục dầm đơn">
                        -- Cầu trục dầm đơn
                      </option>
                      <option value={1374} data-name="Cổng trục">
                        {" "}
                        Cổng trục
                      </option>
                      <option value={1378} data-name="Bán cổng trục dầm đôi">
                        -- Bán cổng trục dầm đôi
                      </option>
                      <option value={1376} data-name="Cổng trục dầm đôi">
                        -- Cổng trục dầm đôi
                      </option>
                      <option value={1377} data-name="Bán cổng trục dầm đơn">
                        -- Bán cổng trục dầm đơn
                      </option>
                      <option value={1375} data-name="Cổng trục dầm đơn">
                        -- Cổng trục dầm đơn
                      </option>
                      <option value={1366} data-name="Tời điện Pa Lang">
                        {" "}
                        Tời điện Pa Lang
                      </option>
                      <option value={1372} data-name="Tời điện mini">
                        -- Tời điện mini
                      </option>
                      <option value={1370} data-name="Palang xích kéo tay">
                        -- Palang xích kéo tay
                      </option>
                      <option value={1368} data-name="Palang cáp điện dầm đôi">
                        -- Palang cáp điện dầm đôi
                      </option>
                      <option value={1373} data-name="Palang xích lắc tay">
                        -- Palang xích lắc tay
                      </option>
                      <option value={1371} data-name="Tời kéo mặt đất">
                        -- Tời kéo mặt đất
                      </option>
                      <option value={1369} data-name="Palang xích điện">
                        -- Palang xích điện
                      </option>
                      <option value={1367} data-name="Palang cáp điện dầm đơn">
                        -- Palang cáp điện dầm đơn
                      </option>
                      <option value={1358} data-name="Phụ kiện cầu trục">
                        {" "}
                        Phụ kiện cầu trục
                      </option>
                      <option value={1364} data-name="Ray điện an toàn">
                        -- Ray điện an toàn
                      </option>
                      <option value={1362} data-name="Tủ điện điều khiển">
                        -- Tủ điện điều khiển
                      </option>
                      <option value={1360} data-name="Động cơ di chuyển">
                        -- Động cơ di chuyển
                      </option>
                      <option value={1365} data-name="Rulo cuốn cáp">
                        -- Rulo cuốn cáp
                      </option>
                      <option value={1363} data-name="Hệ điện máng C">
                        -- Hệ điện máng C
                      </option>
                      <option value={1361} data-name="Dầm biên di chuyển">
                        -- Dầm biên di chuyển
                      </option>
                      <option value={1359} data-name="Tay điều khiển">
                        -- Tay điều khiển
                      </option>
                    </select>
                    <input
                      type="hidden"
                      name="custom_parent_id"
                      defaultValue=""
                    />
                    <span
                      data-searchid={377}
                      // value="Tìm kiếm"
                      className="buttontim button"
                    >
                      <i className="fa fa-search" />
                    </span>
                  </div>
                  <input
                    type="hidden"
                    name="option"
                    defaultValue="com_virtuemart"
                  />
                  <input type="hidden" name="view" defaultValue="category" />
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

export default Header;
