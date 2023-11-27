"use client";

import { FaCalendarAlt } from "react-icons/fa";
import Calendar from "react-calendar";
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";

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

        <form className="flex flex-row">
          <div className="flex flex-col">
            <label htmlFor="name">NOMBRE:</label>
            <input type="text" />
            <label htmlFor="car">Carro:</label>
            <input type="text" />
            <div className="flex flex-row">
              <div className="flex flex-col">
                <p>SERVICIO</p>
                <label>
                  <input type="radio" name="opciones" value="opcion1" />
                  Opción 1
                </label>
                <label>
                  <input type="radio" name="opciones" value="opcion2" />
                  Opción 2
                </label>
                <label>
                  <input type="radio" name="opciones" value="opcion3" />
                  Opción 3
                </label>
                <label>
                  <input type="radio" name="opciones" value="opcion4" />
                  Opción 4
                </label>
                <label>
                  <input type="radio" name="opciones" value="opcion5" />
                  Opción 5
                </label>
              </div>
              <div className="flex flex-col">
                <p>HORARIO</p>
                <label>
                  <input type="radio" name="opciones2" value="opcion1" />
                  Opción 1
                </label>
                <label>
                  <input type="radio" name="opciones2" value="opcion2" />
                  Opción 2
                </label>
                <label>
                  <input type="radio" name="opciones2" value="opcion3" />
                  Opción 3
                </label>
                <label>
                  <input type="radio" name="opciones2" value="opcion4" />
                  Opción 4
                </label>
                <label>
                  <input type="radio" name="opciones2" value="opcion5" />
                  Opción 5
                </label>
              </div>
            </div>
          </div>
          <div>
            <Calendar />
          </div>
        </form>
      </div>
    </section>
  );
}
