import React, { useEffect, useState } from "react";

const Efectos = () => {
  const [actualizacion, setActualizacion] = useState(true);

  useEffect(() => {
    console.log("se actualizó");

    // eventListener mouse move
    document.addEventListener("mousemove", handleMouseMove);

    // remove eventListener mouse move
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [actualizacion]);

  const handleMouseMove = (e) => {
    console.log(e.clientX, e.clientY);
  };

  // =========================
  return (
    <>
      <h1>hola mundo</h1>
      <button
        onClick={() => {
          setActualizacion(!actualizacion);
        }}
      >
        actualizar
      </button>
    </>
  );
};

export default Efectos;
