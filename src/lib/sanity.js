import groq from "groq";

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "3sg1v6xe",
  dataset: "production",
  useCdn: false,
  apiVersion: "2022-03-07",
});

export async function getPosts() {
  return await client.fetch(groq`*[_type == "post" | order(_createdAt desc)`);
}

export async function getPost(slug) {
  return await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]`,
    {
      slug,
    },
  );
}

export default client;
