"use client";

import { FaCalendarAlt } from "react-icons/fa";
import Calendar from "react-calendar";
import React, { useState } from "react";
import styled from "styled-components";
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
        <div className="flex flex-row gap-x-4">
          <p className="text-[5vh] font-bold">AGENDA</p>
          <div className="bg-yellow-500/[0.6] w-[100%] flex flex-row pl-2 items-center gap-2">
            <p className="text-[5vh] font-bold text-background">YA</p>
            <FaCalendarAlt style={{ fontSize: "5vh" }} />
          </div>
        </div>

        <form className="flex flex-col items-center sm:flex-row pt-[5vw] ">
          <div className="flex flex-col w-[40%] gap-y-8">
            <div className="flex flex-col">
              <label htmlFor="name">NOMBRE:</label>
              <input
                type="text"
                className="bg-background border-b-2 border-yellow-500/[0.6] focus:border-yellow-500 outline-none "
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="car">TIPO DE CARRO:</label>
              <input
                type="text"
                className="bg-background border-b-2 border-yellow-500/[0.6] focus:border-yellow-500 outline-none"
              />
            </div>

            <div className="flex flex-row px-[1.2vw] w-[100%] justify-center gap-x-[3vw]">
              <div className="flex flex-col items-center">
                <p>SERVICIO</p>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="opciones" value="opcion1" />
                  <span>Opción 1</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="opciones" value="opcion2" />
                  <span>Opción 2</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="opciones" value="opcion3" />
                  <span>Opción 3</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="opciones" value="opcion4" />
                  <span>Opción 4</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="opciones" value="opcion5" />
                  <span>Opción 5</span>
                </label>
              </div>
              <div className="flex flex-col">
                <p>HORARIOS</p>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="opciones" value="opcion1" />
                  <span>Opción 1</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="opciones" value="opcion2" />
                  <span>Opción 2</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="opciones" value="opcion3" />
                  <span>Opción 3</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="opciones" value="opcion4" />
                  <span>Opción 4</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="opciones" value="opcion5" />
                  <span>Opción 5</span>
                </label>
              </div>
            </div>
          </div>
          <div className="w-[60%] flex items-center align-middle justify-center">
            <CalendarContainer>
              <Calendar calendarType="gregory" />
            </CalendarContainer>
          </div>
        </form>
      </div>
    </section>
  );
}
