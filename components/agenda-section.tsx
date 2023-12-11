"use client";

import { FaCalendarAlt } from "react-icons/fa";
import Calendar from "react-calendar";
import React, { useState } from "react";
import styled from "styled-components";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
//import "react-calendar/dist/Calendar.css";

const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  max-width: 300px;
  width: 100%;
  margin: auto;
  margin-top: 20px;
  background-color: black;
  padding: 10px;
  border-radius: 3px;

  /* Estilos para los días del calendario */
  .react-calendar__tile {
    border-radius: 8px; /* Bordes redondeados para los días */
    background: black; /* Fondo blanco para los días */
    color: white; /* Texto negro para los días */
    border: 1px solid white; /* Contorno blanco para los días */
    text-align: center;
  }

  /* Estilos para el día seleccionado */
  .react-calendar__tile--active {
    background: rgba(
      236,
      201,
      75,
      0.6
    ); /* Fondo amarillo para el día seleccionado */
    border: none;
    color: black; /* Texto negro para el día seleccionado */
  }

  .react-calendar__month-view__weekdays__weekday {
    font-size: 0.8em; /* Tamaño de fuente más pequeño para los nombres de los días de la semana */
    text-align: center;
  }
  .react-calendar__navigation {
    /* ... tus otros estilos ... */
    justify-content: space-between; /* Distribuye el espacio entre los elementos de navegación */
    text-align: center; /* Centra el texto de la navegación */
    font-size: 1.2em; /* Aumenta el tamaño de la fuente de la navegación */
  }

  .react-calendar__navigation button {
    font-size: 1em;
    margin: 0 0.5vw;
  }

  .react-calendar__navigation__next2-button,
  .react-calendar__navigation__prev2-button {
    display: none;
  }
`;

export default function AgendaSection() {
  const [value, onChange] = useState(new Date());

  return (
    <section className="w-full py-4 px-6 flex justify-center">
      <div className="max-w-[1024px] w-[100%]">
        <div className="flex flex-row gap-x-4 py-2 items-center">
          <p className="text-3xl sm:text-[5vh] font-bold">AGENDA</p>
          <div className="bg-yellow-500/[0.6] w-[100%] flex flex-row pl-2 items-center gap-2 py-2">
            <p className="text-3xl sm:text-[5vh] font-bold text-background">
              YA
            </p>
            <FaCalendarAlt style={{ fontSize: "3.5vh" }} />
          </div>
        </div>

        <form className="flex flex-col items-center sm:flex-row pt-[5vw] ">
          <div className="flex flex-col w-[80%] sm:w-[60%] gap-y-8">
            <Input
              type="text"
              variant={"underlined"}
              label="NOMBRE"
              placeholder="Nombre completo"
            />
            <Input
              type="text"
              variant={"underlined"}
              label="TIPO DE CARRO"
              placeholder="Marca/Modelo/Año"
            />

            <div className="flex flex-col sm:flex-row px-[0.8vw] w-[100%] items-start sm:justify-center gap-y-[3vh] sm:gap-x-[3vw]">
              <CheckboxGroup label="SERVICIOS" size="sm" color="warning">
                <Checkbox value="mec-bas">Mecánica básica</Checkbox>
                <Checkbox value="mec-esp">Mecánica especializada</Checkbox>
                <Checkbox value="ele-aut">Electricidad automotriz</Checkbox>
                <Checkbox value="lat-pin">Latoneria y pintura</Checkbox>
                <Checkbox value="serv-esp">Servicios especiales</Checkbox>
              </CheckboxGroup>
              <Select
                labelPlacement={"outside"}
                variant={"underlined"}
                label="HORARIO"
                placeholder="Hora"
                className="w-[50vw] sm:w-[10vw]"
              >
                <SelectItem key={1}>07:00 - 07:30 am</SelectItem>
                <SelectItem key={2}>07:30 - 08:00 am</SelectItem>
                <SelectItem key={3}>08:00 - 08:30 am</SelectItem>
                <SelectItem key={4}>08:30 - 09:00 am</SelectItem>
                <SelectItem key={5}>09:00 - 09:30 am</SelectItem>
                <SelectItem key={6}>09:30 - 10:00 am</SelectItem>
                <SelectItem key={7}>10:00 - 10:30 am</SelectItem>
                <SelectItem key={8}>10:30 - 11:00 am</SelectItem>
                <SelectItem key={9}>11:00 - 11:30 am</SelectItem>
                <SelectItem key={10}>11:30 - 12:00 pm</SelectItem>
                <SelectItem key={11}>12:00 - 12:30 pm</SelectItem>
                <SelectItem key={12}>12:30 - 1:00 pm</SelectItem>
                <SelectItem key={13}>1:00 - 1:30 pm</SelectItem>
                <SelectItem key={14}>1:30 - 2:00 pm</SelectItem>
                <SelectItem key={15}>2:00 - 2:30 pm</SelectItem>
                <SelectItem key={16}>2:30 - 3:00 pm</SelectItem>
                <SelectItem key={17}>3:00 - 3:30 pm</SelectItem>
                <SelectItem key={18}>3:30 - 4:00 pm</SelectItem>
                <SelectItem key={19}>4:00 - 4:30 pm</SelectItem>
                <SelectItem key={20}>4:30 - 5:00 pm</SelectItem>
              </Select>
            </div>
          </div>
          <div className="w-[95%] sm:w-[60%] flex flex-col items-center align-middle justify-between">
            <CalendarContainer>
              <Calendar calendarType="gregory" />
            </CalendarContainer>
            <Button color="warning" variant="solid" className="w-[50%]">
              Agendar
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
