import { connectToDatabase } from "@utils/database";
import Project from "@models/project";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await connectToDatabase();
    const {
      title,
      utils_data,
      description,
      demo,
      repository,
      img,
      presentation,
    } = await req.json();
    const project = await Project.create({
      title,
      utils_data,
      description,
      demo,
      repository,
      img,
      presentation,
    });
    if (project)
      return new Response(JSON.stringify({ msg: "Done" }), { status: 200 });
    else throw "not created";
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ err }), { status: 500 });
  }
};

export const GET = async (req: NextRequest) => {
  try {
    await connectToDatabase();
    const Url = new URL(req.url);
    const params = new URLSearchParams(Url.searchParams);
    const limit = Number(params.get("limit") ?? 30);

    const projects = await Project.find().sort({ createdAt: -1 }).limit(limit);
    return new Response(JSON.stringify(projects), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ err }), { status: 500 });
  }
};
