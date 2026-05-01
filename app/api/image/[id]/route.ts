import { connectToDatabase } from "@utils/database";
import { NextRequest } from "next/server";
import Image from "@models/image";

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;

  try {
    await connectToDatabase();

    if (!id) {
      return new Response(JSON.stringify({ error: "No imageId provided" }), {
        status: 400,
      });
    }

    const image = await Image.findById(id);

    if (!image) {
      return new Response(JSON.stringify({ error: "Image not found" }), {
        status: 404,
      });
    }

    return new Response(image.image, {
      status: 200,
      headers: {
        "Content-Type": image.mimeType,
        "Content-Length": image.image.length.toString(),
      },
    });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify(err), { status: 500 });
  }
};

export const PATCH = async (
  req: NextRequest,
 { params }: { params: Promise<{ id: string }> }
) => {
  try {
    await connectToDatabase();
    const { id:imageId } = await params;

    if (!imageId)
      return new Response(JSON.stringify({ error: "No imageId provided" }), {
        status: 400,
      });

    // Find the image in database
    const image = await Image.findById(imageId);

    if (!image)
      return new Response(JSON.stringify({ error: "Image not found" }), {
        status: 404,
      });

    // Get the form data from the request
    const formData = await req.formData();
    const imageFile = formData.get("image") as File;

    if (!imageFile)
      return new Response(JSON.stringify({ error: "No image provided" }), {
        status: 400,
      });

    // Read the file data
    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    // const imageDb = await Image.create({
    //   image: buffer,
    //   mimeType: imageFile.type,
    // });
    image.image = buffer;
    image.mimeType = imageFile.type;
    await image.save();
    return new Response(JSON.stringify({ imageId }), {
      status: 201,
    });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify(err), { status: 501 });
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await connectToDatabase();
    const imageId = params.id;

    const imageDb = await Image.findByIdAndDelete(imageId);
    return new Response(JSON.stringify({ imageId: imageDb._id }), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify(err), { status: 501 });
  }
};