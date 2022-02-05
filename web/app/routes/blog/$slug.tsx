import { useEffect } from "react";
import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { gql } from "graphql-request";
import { marked } from "marked";
import * as prism from "prismjs";

import { getSanityContent } from "~/utils/getSanityContent";

import styles from "~/styles/blog-slug.css";
import prismStyles from "~/styles/blog-prism-theme.css";
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "stylesheet",
      href: prismStyles,
    },
  ];
}

type Page = {
  title: string;
  content: string;
  _updatedAt: string;
  _createdAt: string;
};
type AllPage = { allPage: Page[] };

export let loader: LoaderFunction = async ({ params }) => {
  const query = gql`
    query PageBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        title
        content
        _updatedAt
        _createdAt
      }
    }
  `;

  const { allPage }: AllPage = await getSanityContent(query, {
    slug: params.slug,
  });

  const { title, content, _updatedAt, _createdAt } = allPage[0];

  return { title, content, updatedAt: _updatedAt, createdAt: _createdAt };
};

export default function BlogSlug() {
  const blog = useLoaderData();

  useEffect(() => {
    prism.highlightAll();
  }, []);

  return (
    <div className="BlogSlug">
      <h1 className="BlogSlug__title">{blog.title}</h1>
      <p>
        {blog.createdAt} / {blog.updatedAt}
      </p>
      <div dangerouslySetInnerHTML={{ __html: marked(blog.content) }} />
    </div>
  );
}
