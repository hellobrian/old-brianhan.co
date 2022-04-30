import Link from "next/link";

export default function AppLink({ href = "", ...props }) {
  return (
    <Link href={href}>
      <a {...props} />
    </Link>
  );
}
