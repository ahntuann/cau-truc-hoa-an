"use client";
import { useState, useRef } from "react";

export default function ProductDescription({ content }: { content: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Style "cứng" để chống lại global CSS
  const resetStyles = {
    whiteSpace: "pre-line",
    wordWrap: "break-word",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    maxWidth: "100%",
  } as React.CSSProperties;

  // Nội dung mặc định nếu không có data
  const safeContent = content || "Đang cập nhật nội dung...";

  const handleToggle = () => {
    if (isExpanded) {
      contentRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      ref={contentRef}
      className="bg-white border border-gray-200 p-4 mt-2 !w-full !max-w-full"
    >
      <div className="!relative !w-full !block">
        <div
          style={resetStyles} // Dùng inline-style để override mạnh nhất
          className={`
            !text-justify !text-gray-700 !leading-relaxed 
            !w-full !block !overflow-hidden !transition-all !duration-500 !ease-in-out
            ${isExpanded ? "!max-h-[5000px] !opacity-100" : "!max-h-[300px]"}
          `}
        >
          {safeContent}
        </div>

        {/* Hiệu ứng mờ dần */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        )}
      </div>

      {safeContent.length > 500 && (
        <div className="text-center mt-4 pt-2 border-t border-gray-100">
          <div
            onClick={handleToggle}
            className="!text-blue-600 !text-sm !font-semibold !underline hover:!text-blue-800 !transition-colors focus:!outline-none"
          >
            {isExpanded ? "Thu gọn nội dung" : "Xem thêm nội dung"}
          </div>
        </div>
      )}
    </div>
  );
}
