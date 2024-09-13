"use client";

import { FaCalendarAlt } from "react-icons/fa";
import Calendar from "react-calendar";
import React, { FormEvent, useState } from "react";
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
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function AgendaSection() {
  const [value, onChange] = useState<ValuePiece | [ValuePiece, ValuePiece]>(
    new Date()
  );
  const [nombre, setNombre] = useState("");
  const [carro, setCarro] = useState("");
  const [horario, setHorario] = useState("");
  const [celular, setCelular] = useState("");
  const [servicios, setServicios] = useState<string[]>([]);

  const horarios: Record<string, string> = {
    1: "07:00 - 07:30 am",
    2: "07:30 - 08:00 am",
    3: "08:00 - 08:30 am",
    4: "08:30 - 09:00 am",
    5: "09:00 - 09:30 am",
    6: "09:30 - 10:00 am",
    7: "10:00 - 10:30 am",
    8: "10:30 - 11:00 am",
    9: "11:00 - 11:30 am",
    10: "11:30 - 12:00 pm",
    11: "12:00 - 12:30 pm",
    12: "12:30 - 1:00 pm",
    13: "1:00 - 1:30 pm",
    14: "1:30 - 2:00 pm",
    15: "2:00 - 2:30 pm",
    16: "2:30 - 3:00 pm",
    17: "3:00 - 3:30 pm",
    18: "3:30 - 4:00 pm",
    19: "4:00 - 4:30 pm",
    20: "4:30 - 5:00 pm",
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const horarioSeleccionado = horarios[event.target.value];
    setHorario(horarioSeleccionado);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setServicios([...servicios, event.target.value]);
    } else {
      setServicios(
        servicios.filter((service) => service !== event.target.value)
      );
    }
  };

  const enviarDatos = async (event: FormEvent) => {
    event.preventDefault();

    const respuesta = await fetch("/api/agenda", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre,
        carro: carro,
        horario: horario,
        celular: celular,
        servicios: JSON.stringify(servicios),
        date: JSON.stringify(value),
      }),
    });

    const datos = await respuesta.json();

    if (datos.error) {
      alert(datos.error);
      console.log(datos.error);
    } else {
      alert("Agendamiento enviado! Te contactaremos para confirmarlo.");
    }
  };

  return (
    <section
      className="w-full py-4 px-6 flex justify-center mt-12 sm:mt-20"
      id="agenda-section"
    >
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

        <form
          className="flex flex-col items-center sm:flex-row pt-[5vw] "
          onSubmit={enviarDatos}
        >
          <div className="flex flex-col w-[80%] sm:w-[60%] gap-y-8">
            <Input
              type="text"
              variant={"underlined"}
              label="NOMBRE"
              placeholder="Nombre completo"
              onChange={(e) => setNombre(e.target.value)}
            />
            <Input
              type="text"
              variant={"underlined"}
              label="TIPO DE CARRO"
              placeholder="Marca/Modelo/Año"
              onChange={(e) => setCarro(e.target.value)}
            />
            <Input
              type="text"
              variant={"underlined"}
              label="Numero de contacto"
              placeholder=""
              onChange={(e) => setCelular(e.target.value)}
            />

            <div className="flex flex-col sm:flex-row px-[0.8vw] w-[100%] items-start sm:justify-center gap-y-[3vh] sm:gap-x-[3vw]">
              <CheckboxGroup label="SERVICIOS" size="sm" color="warning">
                <Checkbox value="mec-bas" onChange={handleCheckboxChange}>
                  Mecánica básica
                </Checkbox>
                <Checkbox value="mec-esp" onChange={handleCheckboxChange}>
                  Mecánica especializada
                </Checkbox>
                <Checkbox value="ele-aut" onChange={handleCheckboxChange}>
                  Electricidad automotriz
                </Checkbox>
                <Checkbox value="lat-pin" onChange={handleCheckboxChange}>
                  Latoneria y pintura
                </Checkbox>
                <Checkbox value="serv-esp" onChange={handleCheckboxChange}>
                  Servicios especiales
                </Checkbox>
              </CheckboxGroup>
              <Select
                labelPlacement={"outside"}
                variant={"underlined"}
                label="HORARIO"
                placeholder="Hora"
                className="w-[50vw] sm:w-[10vw]"
                value={horario}
                onChange={handleSelectChange}
              >
                <SelectItem key={1} value={1}>
                  07:00 - 07:30 am
                </SelectItem>
                <SelectItem key={2} value={2}>
                  07:30 - 08:00 am
                </SelectItem>
                <SelectItem key={3} value={3}>
                  08:00 - 08:30 am
                </SelectItem>
                <SelectItem key={4} value={4}>
                  08:30 - 09:00 am
                </SelectItem>
                <SelectItem key={5} value={5}>
                  09:00 - 09:30 am
                </SelectItem>
                <SelectItem key={6} value={6}>
                  09:30 - 10:00 am
                </SelectItem>
                <SelectItem key={7} value={7}>
                  10:00 - 10:30 am
                </SelectItem>
                <SelectItem key={8} value={8}>
                  10:30 - 11:00 am
                </SelectItem>
                <SelectItem key={9} value={9}>
                  11:00 - 11:30 am
                </SelectItem>
                <SelectItem key={10} value={10}>
                  11:30 - 12:00 pm
                </SelectItem>
                <SelectItem key={11} value={11}>
                  12:00 - 12:30 pm
                </SelectItem>
                <SelectItem key={12} value={12}>
                  12:30 - 1:00 pm
                </SelectItem>
                <SelectItem key={13} value={13}>
                  1:00 - 1:30 pm
                </SelectItem>
                <SelectItem key={14} value={14}>
                  1:30 - 2:00 pm
                </SelectItem>
                <SelectItem key={15} value={15}>
                  2:00 - 2:30 pm
                </SelectItem>
                <SelectItem key={16} value={16}>
                  2:30 - 3:00 pm
                </SelectItem>
                <SelectItem key={17} value={17}>
                  3:00 - 3:30 pm
                </SelectItem>
                <SelectItem key={18} value={18}>
                  3:30 - 4:00 pm
                </SelectItem>
                <SelectItem key={19} value={19}>
                  4:00 - 4:30 pm
                </SelectItem>
                <SelectItem key={20} value={20}>
                  4:30 - 5:00 pm
                </SelectItem>
              </Select>
            </div>
          </div>
          <div className="w-[95%] sm:w-[60%] flex flex-col items-center align-middle justify-between">
            <CalendarContainer>
              <Calendar
                calendarType="gregory"
                value={value}
                onChange={onChange}
                selectRange={false}
              />
            </CalendarContainer>
            <Button
              color="warning"
              variant="solid"
              className="w-[50%]"
              type="submit"
            >
              Agendar
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
