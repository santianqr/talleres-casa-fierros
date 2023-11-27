import { FaCalendarAlt } from "react-icons/fa";

export default function AgendaSection() {
  return (
    <section className="w-full py-4 px-6 flex justify-center">
      <div className="max-w-[1024px] w-[100%] bg-red-500">
        <div>
          <p>AGENDA</p>
          <div>
            <p>YA</p>
            <FaCalendarAlt />
          </div>
        </div>

        <form>
          <div>
            <label htmlFor="name">NOMBRE:</label>
            <input type="text" />
            <label htmlFor="car">Carro:</label>
            <input type="text" />
            <div>
              <div>
                <label>SERVICIO</label>
                <input type="radio" id="op1" name="opciones" value="opcion1" />
                <label htmlFor="op1">Opcion 1</label>
                <input type="radio" id="op2" name="opciones" value="opcion2" />
                <label htmlFor="op2">Opcion 2</label>
                <input type="radio" id="op3" name="opciones" value="opcion3" />
                <label htmlFor="op3">Opcion 3</label>
                <input type="radio" id="op4" name="opciones" value="opcion4" />
                <label htmlFor="op3">Opcion 4</label>
                <input type="radio" id="op5" name="opciones" value="opcion5" />
                <label htmlFor="op4">Opcion 5</label>
              </div>
              <div>
                <label>HORARIO</label>
                <input type="radio" id="op1" name="opciones" value="opcion1" />
                <label htmlFor="op1">Opcion 1</label>
                <input type="radio" id="op2" name="opciones" value="opcion2" />
                <label htmlFor="op2">Opcion 2</label>
                <input type="radio" id="op3" name="opciones" value="opcion3" />
                <label htmlFor="op3">Opcion 3</label>
                <input type="radio" id="op4" name="opciones" value="opcion4" />
                <label htmlFor="op3">Opcion 4</label>
                <input type="radio" id="op5" name="opciones" value="opcion5" />
                <label htmlFor="op4">Opcion 5</label>
              </div>
            </div>
            <div>
              <label htmlFor="fecha">Fecha</label>
              <input type="date" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
