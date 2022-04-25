import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the blog",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the blog",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (blog) => `/blog/${blog._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "blog",
  documentTypes: [Blog],
});
