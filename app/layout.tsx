import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

// 1. Setup Meta data (SEO)
export const metadata: Metadata = {
  title: "Trang chủ - cautruchoaan.com",
  description:
    "Công ty hàng đầu chuyên cung cấp các sản phẩm, dịch vụ chất lượng nhất...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        {/* Link này xử lý cả FontAwesome 4, 5 và 6 */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        {/* Nếu web cũ dùng v4 shim thì thêm dòng này cho chắc cốp (thường là không cần) */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/v4-shims.min.css"
        />

        {/* 2. Import CSS (Legacy từ HTTrack) */}
        {/* Lưu ý: Đã thêm dấu '/' ở đầu các đường dẫn */}
        <link rel="stylesheet" href="/templates/ja_social/css/template.css" />
        <link rel="stylesheet" href="/templates/responsive/responsive.css" />
        <link rel="stylesheet" href="/templates/fancybox/fancybox.css" />

        {/* Font Google */}
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      {/* 3. Class của body giữ nguyên từ code cũ để ăn CSS */}
      <body
        id="bd"
        className="bd fs3 com_content bodyhome_bd AddMore_OptionCom_content_ViewFeatured"
      >
        {/* Thẻ bao ngoài chính */}
        <div id="ja-khungchinh">{children}</div>

        {/* 4. Import JS (Legacy) - Dùng Script của Next.js hoặc thẻ script thường */}
        {/* Load các thư viện core trước */}
        <Script src="/rejslib.min.js" strategy="beforeInteractive" />
        <Script
          src="/plugins/system/jqueryeasy/jquerynoconflict.js"
          strategy="beforeInteractive"
        />

        {/* Các script khác load sau để không chặn hiển thị trang */}
        <Script
          src="/components/com_virtuemart/assets/js/vmsite.js"
          strategy="lazyOnload"
        />
        <Script
          src="/components/com_virtuemart/assets/js/vmprices.js"
          strategy="lazyOnload"
        />
        <Script
          src="/modules/mod_unite_nivoslider/tmpl/js/jquery.nivo.slider.pack.js"
          strategy="lazyOnload"
        />
        <Script src="/templates/scroller/scroller.js" strategy="lazyOnload" />
        <Script
          src="/templates/responsive/responsive.js"
          strategy="lazyOnload"
        />
        <Script src="/templates/fancybox/fancybox.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
