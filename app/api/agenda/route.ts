import { NextRequest, NextResponse } from "next/server";
import { EmailTemplate } from "@/components/email-agenda";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Bot Casa Fierros <onboarding@resend.dev>",
      to: ["atencion@tallerescasafierros.co"],
      subject: "Nueva solicitud de Cotización! ESCRIBIR YA!",
      react: EmailTemplate({
        nombre: body.nombre,
        celular: body.celular,
        carro: body.carro,
        horario: body.horario,
        date: body.date,
        servicios: body.servicios,
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
