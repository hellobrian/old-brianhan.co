import type { NextPage } from "next";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allBlogs, Blog } from "contentlayer/generated";
import Base from "layouts/Base";

export async function getStaticProps() {
  const blogs: Blog[] = allBlogs.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { blogs } };
}

function Blog({ blog }) {
  return (
    <div>
      <time dateTime={blog.date}>
        {format(parseISO(blog.date), "LLLL d, yyyy")}
      </time>
      <h2>
        <Link href={blog.url}>
          <a>{blog.title}</a>
        </Link>
      </h2>
    </div>
  );
}

type BlogIndexProps = {
  blogs: Blog[];
};

const BlogIndex: NextPage = ({ blogs }: BlogIndexProps) => {
  return (
    <Base>
      {blogs.map((blog, idx) => (
        <Blog key={idx} blog={blog} />
      ))}
    </Base>
  );
};

export default BlogIndex;
