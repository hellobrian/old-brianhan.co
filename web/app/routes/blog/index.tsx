import { useLoaderData, Link } from "remix";
import type { LoaderFunction } from "remix";
import { gql } from "graphql-request";

import { getSanityContent } from "~/utils/getSanityContent";

type Page = {
  _id: string;
  title: string;
  slug: { current: string };
};

type Blog = {
  id: string;
  title: string;
  slug: string;
};

export let loader: LoaderFunction = async () => {
  const query = gql`
    query Allpages {
      allPage {
        _id
        title
        slug {
          current
        }
      }
    }
  `;
  const { allPage } = await getSanityContent(query);

  return allPage.map((page: Page) => ({
    id: page._id,
    title: page.title,
    slug: page.slug.current,
  }));
};

export default function BlogIndex() {
  let blogs = useLoaderData();
  return (
    <>
      <div>BlogIndex</div>
      <ul>
        {blogs.map((blog: Blog) => (
          <li key={blog.id}>
            <Link to={blog.slug}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
