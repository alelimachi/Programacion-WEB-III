import { useState } from "react";
import axios from "axios";

function Usuarios() {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const obtenerFortaleza = (pass) => {

    if (pass.length < 6) {
      return {
        texto: "🔴 Débil",
        color: "red"
      };
    }

    const mayuscula = /[A-Z]/.test(pass);
    const numero = /[0-9]/.test(pass);
    const simbolo = /[^A-Za-z0-9]/.test(pass);

    if (mayuscula && numero && simbolo) {
      return {
        texto: "🟢 Fuerte",
        color: "green"
      };
    }

    return {
      texto: "🟡 Intermedia",
      color: "orange"
    };
  };

  const guardarUsuario = async () => {

    try {

      await axios.post(
        "http://localhost:3001/usuarios",
        {
          nombre,
          email,
          password,
          rol: "usuario"
        }
      );

      alert("Usuario registrado");

      setNombre("");
      setEmail("");
      setPassword("");

    } catch (error) {

      console.error(error);

      alert("Error al registrar");

    }
  };

  return (
    <div className="container mt-5">

      <h1 className="text-center">
        Registro de Usuarios
      </h1>

      <input
        className="form-control mt-3"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        className="form-control mt-3"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="form-control mt-3"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {password && (
        <div
          style={{
            color: obtenerFortaleza(password).color,
            fontWeight: "bold",
            marginTop: "10px"
          }}
        >
          {obtenerFortaleza(password).texto}
        </div>
      )}

      <button
        className="btn btn-success mt-3"
        onClick={guardarUsuario}
      >
        Registrar Usuario
      </button>

    </div>
  );
}

export default Usuarios;