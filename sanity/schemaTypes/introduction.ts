import { defineField, defineType } from "sanity";

export default defineType({
  name: "introduction",
  title: "Bài Giới Thiệu",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tiêu đề",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Ảnh đại diện",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "description",
      title: "Mô tả ngắn (Hiện ở widget trang chủ)",
      type: "text", // Dùng text để nhập văn bản thuần cho widget
      rows: 4,
    }),
    defineField({
      name: "content",
      title: "Nội dung chi tiết (Trang bài viết)",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
  ],
});
