import { connectToDatabase } from "@utils/database";
import Request from "@models/request";
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: NextRequest) => {
  try {
    await connectToDatabase();

    const { name, phone, email, message } = await req.json();

    // Save to DB
    const request = await Request.create({
      name,
      phone,
      email,
      message,
    });

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // sends to YOU
      subject: "New Contact Request",
      html: `
        <h2>New Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ msg: "Done" }), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ err }), { status: 500 });
  }
};
