import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    await sgMail.send({
      to: process.env.EMAIL_TO!,
      from: process.env.EMAIL_FROM!,
      subject: "Nova mensagem do site Ricardo Pinturas",
      text: `Nome: ${name}\nE-mail: ${email}\nMensagem:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Erro ao enviar e-mail:", error.message || error);
    return NextResponse.json({ error: "Erro ao enviar e-mail" }, { status: 500 });
  }
}
