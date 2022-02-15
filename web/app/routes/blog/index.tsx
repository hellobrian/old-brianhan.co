import { useLoaderData, Link } from "remix";
import type { LoaderFunction } from "remix";
import { gql } from "graphql-request";

import { getSanityContent } from "~/utils/getSanityContent";

type Page = {
  _id: string;
  title: string;
  slug: { current: string };
  tags: string[];
};

type Blog = {
  id: string;
  title: string;
  slug: string;
  tags: string[];
};

export let loader: LoaderFunction = async () => {
  const query = gql`
    query AllPages {
      allPage(where: { isPublished: { eq: true } }) {
        _id
        title
        tags
        slug {
          current
        }
      }
    }
  `;
  const { allPage } = await getSanityContent(query);
  console.log(allPage);

  return allPage.map((page: Page) => ({
    id: page._id,
    title: page.title,
    slug: page.slug.current,
    tags: page.tags,
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
            <div>
              {blog.tags.map((tag) => (
                <span
                  style={{
                    marginRight: 4,
                    backgroundColor: "#ccc",
                    color: "white",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
