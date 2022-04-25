import { format, parseISO } from "date-fns";
import { allBlogs } from "contentlayer/generated";
import Base from "layouts/Base";

export async function getStaticPaths() {
  const paths = allBlogs.map((blog) => blog.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  return {
    props: {
      blog,
    },
  };
}

const BlogLayout = ({ blog }) => {
  return (
    <Base>
      <article>
        <div>
          <h1>{blog.title}</h1>
          <time dateTime={blog.date}>
            {format(parseISO(blog.date), "LLLL d, yyyy")}
          </time>
        </div>
        <div dangerouslySetInnerHTML={{ __html: blog.body.html }} />
      </article>
    </Base>
  );
};

export default BlogLayout;
