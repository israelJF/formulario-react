import { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [errores, setErrores] = useState({});

  const validar = () => {
    let erroresTemp = {};

    if (!nombre.trim()) {
      erroresTemp.nombre = "El nombre es obligatorio.";
    }

    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo)) {
      erroresTemp.correo = "El correo no tiene un formato válido.";
    }

    if (password.length < 8) {
      erroresTemp.password = "La contraseña debe tener al menos 8 caracteres.";
    }

    setErrores(erroresTemp);
    return Object.keys(erroresTemp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      alert("✅ Registro exitoso");
      // Aquí podrías enviar los datos a un backend
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Formulario de Registro</h2>
      <form className="card p-4 shadow" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          {errores.nombre && <p className="text-danger">{errores.nombre}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input
            type="email"
            className="form-control"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          {errores.correo && <p className="text-danger">{errores.correo}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errores.password && <p className="text-danger">{errores.password}</p>}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Registrar
        </button>
      </form>
    </div>
  );
}

export default App;


