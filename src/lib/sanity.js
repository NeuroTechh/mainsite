import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "3sg1v6xe",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-07",
});

export default client;
