import { defineField, defineType } from "sanity";

export default defineType({
  name: "news",
  title: "Tin tức",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tiêu đề bài viết",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Đường dẫn (Slug)",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "image",
      title: "Ảnh đại diện",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "description",
      title: "Mô tả ngắn (Hiện ở trang chủ)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "content",
      title: "Nội dung chi tiết",
      type: "array",
      of: [
        {
          type: "block",
          // Cấu hình cho phép H2, H3, Bold, Italic, List
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Heading 4", value: "h4" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
            ],
          },
        },
        { type: "image" },
      ],
    }),
  ],
});
