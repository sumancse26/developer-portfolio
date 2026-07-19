import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields are required!" },
      { status: 400 }
    );
  }

  const user = process.env.CONTACT_EMAIL;
  const pass = process.env.CONTACT_EMAIL_PASSWORD;

  if (!user || !pass) {
    return NextResponse.json(
      { error: "Email service is not configured!" },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });

  try {
    await transporter.sendMail({
      from: user,
      replyTo: email,
      to: user,
      subject: `Portfolio Contact: Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 16px;">
          <h2 style="color: #16f2b3;">New message from your portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({
      message: "Message sent successfully!",
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error?.message || "Failed to send message!" },
      { status: 500 }
    );
  }
}
