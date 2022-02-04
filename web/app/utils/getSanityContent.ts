import { request, gql } from "graphql-request";

// export const getSanityContent = async (query = "", variables = "") => {
//   const response = await fetch(`${process.env.GRAPHQL_URL}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       query,
//       variables,
//     }),
//   });
//   return response.json();
// };

export const getSanityContent = async (query = gql``, variables = {}) => {
  const response = await request(
    `${process.env.GRAPHQL_URL}`,
    query,
    variables
  );
  return response;
};
