import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  text: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  text,
}) => (
  <div>
    <h1>Hola equipo de tallerescasafierros.co!</h1>
    <p>Hemos recibido una nueva opinion!</p>
    <p>
      {name} con el correo electrónico {email} ha dicho:
      <br />
      {text}
    </p>
    <br />
    <p className="font-bold">Talleres Casa Fierros</p>
  </div>
);
