import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");
export async function POST(req: NextRequest) {
  const body = await req.json();
  
  const mailTransport = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    secure: true,
    secureConnection: false,
    tls: {
      ciphers: "SSLv3",
    },
    requireTLS: true,
    port: 465,
    debug: true,
    auth: {
      user: process.env.GODADDY_EMAIL,
      pass: process.env.GODADDY_PASSWORD,
    },
  });

  const mailOptions = {
    from: `atencion@tallerescasafierros.co`,
    to: `atencion@tallerescasafierros.co`,
    subject: `Nueva opinión`,
    text: `Hola equipo de tallerescasafierros.co    

  Hemos recibido una nueva opinion!

  ${body.nombre} con el correo electrónico ${body.correo} ha dicho:
  ${body.mensaje} 

  Talleres Casa Fierros
  `,
  };

  mailTransport
    .sendMail(mailOptions)
    .then(() => {
      console.log("Email sent successfully");
    })
    .catch((err: any) => {
      console.log("Failed to send email");
      console.error(err);
    });

  return NextResponse.json({ message: body });
}
