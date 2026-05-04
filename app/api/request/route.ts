import { connectToDatabase } from "@utils/database";
import Request from "@models/request";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await connectToDatabase();
    const { name, phone, email, message } = await req.json();
    const request = await Request.create({
      name,
      phone,
      email,
      message,
    });
    if (request)
      return new Response(JSON.stringify({ msg: "Done" }), { status: 200 });
    else throw "not created";
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ err }), { status: 500 });
  }
};
