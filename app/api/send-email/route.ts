import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Ricardo Pinturas" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: "Nova mensagem do site Ricardo Pinturas",
      text: `Nome: ${name}\nE-mail: ${email}\nMensagem:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json({ error: "Erro ao enviar e-mail" }, { status: 500 });
  }
}
