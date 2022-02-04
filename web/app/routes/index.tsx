import { Link } from "remix";

export default function Index() {
  return (
    <>
      <div>Index</div>
      <Link to="/blog">Blog</Link>
    </>
  );
}
