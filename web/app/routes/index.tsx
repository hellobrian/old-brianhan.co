import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { gql } from "graphql-request";

import { getSanityContent } from "~/utils/getSanityContent";

export let loader: LoaderFunction = async () => {
  const query = gql`
    query Allpages {
      allPage {
        title
        slug {
          current
        }
      }
    }
  `;
  return getSanityContent(query);
};

export default function Index() {
  let pages = useLoaderData();
  return <div>{JSON.stringify(pages, null, 2)}</div>;
}
