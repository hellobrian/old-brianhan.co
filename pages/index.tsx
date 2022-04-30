import type { NextPage } from "next";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allBlogs, Blog } from "contentlayer/generated";
import VisuallyHidden from "components/VisuallyHidden/VisuallyHidden";
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

type HomeProps = {
  blogs: Blog[];
};

const Home: NextPage = ({ blogs }: HomeProps) => {
  return (
    <Base>
      <VisuallyHidden as="h1">Brian Han</VisuallyHidden>

      {/* {blogs.map((blog, idx) => (
        <Blog key={idx} blog={blog} />
      ))} */}
    </Base>
  );
};

export default Home;
