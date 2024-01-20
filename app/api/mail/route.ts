import { NextRequest, NextResponse } from "next/server";
import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Bot Casa Fierros <onboarding@resend.dev>",
      to: ["atencion@tallerescasafierros.co"],
      subject: "Nueva solicitud de contacto! ESCRIBIR YA!",
      react: EmailTemplate({
        name: body.nombre,
        email: body.correo,
        text: body.mensaje,
      }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
