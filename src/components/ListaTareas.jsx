import { useReducer } from "react";

const TYPES = {
  agregar: "agregar",
  borrar: "borrar",
};

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.agregar:
      return [...state, { id: Date.now(), name: action.payload }];
    case TYPES.borrar:
      return state.filter((tarea) => tarea.id !== action.payload);
    default:
      return state;
  }
};

const tareasIniciales = [
  { id: 1, name: "Estudiar HTML" },
  { id: 2, name: "Estudiar CSS" },
  { id: 3, name: "Estudiar JavaScript" },
];

export const ListaTareas = () => {
  const [tareas, dispatch] = useReducer(reducer, tareasIniciales);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: TYPES.agregar,
      payload: event.target[0].value,
    });
  };

  const handledelete = (id) => {
    dispatch({
      type: TYPES.borrar,
      payload: id,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="nueva tarea" />
        <input type="submit" value="crear Tarea" />
        <div className="contenedor-tareas">
          {tareas.map((tarea) => (
            <div key={tarea.id} className="tarea">
              <p>{tarea.name}</p>
              <button onClick={() => handledelete(tarea.id)}>Eliminar</button>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};
