import { createClient } from "@sanity/client";

export const POST = async ({ request }) => {
  const data = await request.formData();
  const email = data.get("email");
  console.log(email);
  // Validate the data - you'll probably want to do more than this
  if (!email) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 },
    );
  }
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailRegex.test(email)) {
    return new Response(
      JSON.stringify({
        message: "Invalid email address",
      }),
      { status: 400 },
    );
  }
  const client = createClient({
    projectId: "3sg1v6xe",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-07",
    token: import.meta.env.SANITY_AUTH_TOKEN,
  });

  const doc = {
    _type: "newsletter",
    email: email,
  };

  const duplicate = await client.fetch(
    `*[_type == "newsletter" && email == $email]`,
    { email: email },
  );
  console.log(duplicate);
  if (duplicate.length > 0) {
    return new Response(
      JSON.stringify({
        message: "Email already exists",
      }),
      { status: 400 },
    );
  }

  try {
    const res = await client.create(doc);
    console.log(`Email was created, document ID is ${res._id}`);
    return new Response(
      JSON.stringify({
        message: "Successfully subscribed!",
      }),
      { status: 200 },
    );
  } catch (err) {
    console.error(`An error occurred: ${err}`);
    return new Response(
      JSON.stringify({
        message: `An error occurred, ${err}`,
      }),
      { status: 500 },
    );
  }
};
