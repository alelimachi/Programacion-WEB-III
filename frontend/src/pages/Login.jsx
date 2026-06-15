import { useState } from "react";
import { loginUser } from "../config/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [captcha] = useState({
    num1: Math.floor(Math.random() * 10) + 1,
    num2: Math.floor(Math.random() * 10) + 1,
  });

  const [respuestaCaptcha, setRespuestaCaptcha] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (
      parseInt(respuestaCaptcha) !==
      captcha.num1 + captcha.num2
    ) {
      alert("Captcha incorrecto");
      return;
    }

    try {
      const data = await loginUser(email, password);

      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem(
          "usuario",
          JSON.stringify(data.usuario)
        );

        alert("Login correcto ✔");
        navigate("/home");
      } else {
        alert("Credenciales incorrectas");
      }
    } catch (err) {
      console.error(err);
      alert("Error de login");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/obra.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="card shadow p-4"
        style={{
          width: "400px",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.95)",
        }}
      >
        <h1
          className="text-center mb-4"
          style={{
            color: "#d4af37",
            fontFamily: "Cinzel, serif",
          }}
        >
          MUSA
        </h1>

        <p className="text-center text-muted">
          Sistema de Galería de Arte
        </p>

        <div className="mb-3">
          <label>Email</label>

          <input
            type="email"
            className="form-control"
            placeholder="Ingrese su email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Contraseña</label>

          <input
            type="password"
            className="form-control"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>
            CAPTCHA: {captcha.num1} + {captcha.num2} = ?
          </label>

          <input
            type="number"
            className="form-control"
            placeholder="Resultado"
            value={respuestaCaptcha}
            onChange={(e) =>
              setRespuestaCaptcha(e.target.value)
            }
          />
        </div>

        <button
          className="btn btn-warning w-100"
          onClick={handleLogin}
        >
          Ingresar
        </button>
      </div>
    </div>
  );
}

export default Login;