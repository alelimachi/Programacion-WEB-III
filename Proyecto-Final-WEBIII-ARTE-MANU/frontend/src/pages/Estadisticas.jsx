import { useEffect, useState } from "react";

import { obtenerArtistas } from "../services/artistaService";
import { obtenerObras } from "../services/obraService";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Estadisticas() {

  const [artistas, setArtistas] = useState([]);
  const [obras, setObras] = useState([]);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    try {

      const artistasData = await obtenerArtistas();
      const obrasData = await obtenerObras();

      setArtistas(artistasData);
      setObras(obrasData);

    } catch (error) {
      console.error(error);
    }
  };

  const data = {
    labels: artistas.map((a) => a.nombre),

    datasets: [
      {
        label: "Cantidad de Obras",

        data: artistas.map((artista) => {

          return obras.filter(
            (obra) => obra.artista_id === artista.id
          ).length;

        }),

        backgroundColor: [
          "#d4af37",
          "#8e44ad",
          "#3498db",
          "#e74c3c",
          "#27ae60",
          "#16a085",
          "#f39c12"
        ],

        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: true,
      },
    },

    scales: {
      y: {
        beginAtZero: true,

        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        Cantidad de Obras por Artista
      </h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 0 15px rgba(0,0,0,0.2)"
        }}
      >
        <Bar data={data} options={options} />
      </div>

    </div>
  );
}

export default Estadisticas;