import * as React from "react";

interface EmailTemplateProps {
  nombre: string;
  celular: string;
  carro: string;
  motivo: string;
  servicio: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  nombre,
  celular,
  carro,
  motivo,
  servicio,
}) => (
  <div>
    <h1>Hola equipo de tallerescasafierros.co!</h1>
    <p>Hemos recibido una nueva opinion!</p>
    <p>
      {nombre} con el número de celular {celular} necesita un servicio para su
      carro:
      <br />
      {carro} con el motivo {motivo} y requiere los servicios {servicio}
    </p>
    <br />
    <p className="font-bold">Talleres Casa Fierros</p>
  </div>
);
