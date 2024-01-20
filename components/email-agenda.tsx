import * as React from "react";

interface EmailTemplateProps {
  nombre: string;
  celular: string;
  carro: string;
  horario: string;
  servicios: string;
  date: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  nombre,
  carro,
  horario,
  celular,
  servicios,
  date,
}) => (
  <div>
    <h1>Hola equipo de tallerescasafierros.co!</h1>
    <p>Hemos recibido una solicitud de agendamiento!</p>
    <p>
      {nombre} con el número de celular {celular} necesita un servicio para su
      carro:
      <br />
      {carro} en el horario {horario} y requiere los servicios {servicios} en la
      fecha {date}
    </p>
    <p>
      Por favor ponerse en contacto de inmediato para confirmar la fecha y hora.
    </p>
    <br />
    <p className="font-bold">Talleres Casa Fierros</p>
  </div>
);
