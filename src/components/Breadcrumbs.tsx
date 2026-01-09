import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  url?: string;
}

interface BreadcrumbsBlueProps {
  items: BreadcrumbItem[];
  backgroundImage?: string;
}

export default function Breadcrumbs({
  items,
  backgroundImage,
}: BreadcrumbsBlueProps) {
  return (
    // Container chính với nền gradient xanh đậm mô phỏng ảnh
    <div
      className="w-full py-6 md:py-10"
      style={{
        // Nếu có ảnh thì dùng ảnh, không thì dùng gradient xanh đậm
        background: backgroundImage
          ? `url(${backgroundImage}) center/cover no-repeat`
          : "linear-gradient(to right, #1e3c72, #2a5298)",
      }}
    >
      {/* Căn giữa nội dung theo main container */}
      <div className="main2">
        <nav
          className="flex justify-center md:justify-start"
          aria-label="Breadcrumb"
        >
          <ol
            className="
      list-none
      inline-flex
      flex-wrap
      items-center
      gap-x-2 gap-y-1
      md:space-x-3
    "
          >
            {/* Trang chủ */}
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="
          text-base
          md:text-xl
          font-bold
          text-white
          hover:text-yellow-100
          transition-colors
          whitespace-nowrap
        "
              >
                Trang chủ
              </Link>
            </li>

            {items.map((item, index) => (
              <li key={index} className="inline-flex items-center">
                <span
                  className="
            mx-1
            md:mx-2
            text-white
            font-bold
            text-base
            md:text-xl
          "
                >
                  »
                </span>

                {item.url ? (
                  <Link
                    href={item.url}
                    className="
              text-base
              md:text-xl
              font-bold
              text-white
              hover:text-yellow-100
              transition-colors
              whitespace-nowrap
            "
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="
              text-base
              md:text-xl
              font-extrabold
              text-yellow-400
              whitespace-nowrap
            "
                  >
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
