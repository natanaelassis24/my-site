import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Configura a chave da API do SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

function isValidEmail(email: string) {
  // Checa se o e-mail tem formato válido
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Valida os campos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "E-mail inválido" },
        { status: 400 }
      );
    }

    // Envia o e-mail via SendGrid
    await sgMail.send({
      to: process.env.EMAIL_TO!,        // E-mail que recebe a mensagem
      from: process.env.EMAIL_FROM!,    // E-mail verificado no SendGrid
      subject: `Nova mensagem do site Ricardo Pinturas`,
      text: `Nome: ${name}\nE-mail: ${email}\nMensagem:\n${message}`,
      html: `<p><strong>Nome:</strong> ${name}</p>
             <p><strong>E-mail:</strong> ${email}</p>
             <p><strong>Mensagem:</strong> ${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Erro ao enviar e-mail:", error.response?.body || error.message || error);
    return NextResponse.json(
      { error: "Erro ao enviar e-mail. Verifique suas credenciais SendGrid." },
      { status: 500 }
    );
  }
}
