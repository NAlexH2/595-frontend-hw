import { useEffect, useRef, useState } from "react";
import NavBar from "../components/navbar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

ChartJS.defaults.color = "#000000";
ChartJS.defaults.borderColor = "#000000";

const countryAPIURL: string =
  "https://cs464p564-frontend-api.vercel.app/api/countries";

interface Country {
  name: string;
  population: number;
}

export default function Population() {
  const hasFetched = useRef(false);
  const currentLoc = window.location.href;
  const [countryData, setCountryData] = useState<Array<Country>>([]);

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      axios
        .get(countryAPIURL)
        .then(response => {
          const data: Array<Country> = response.data.map(
            (item: { name: string; population: BigInteger }) => ({
              name: item.name,
              population: item.population,
            }),
          );
          setCountryData(data);
        })
        .catch(error => console.error(error.message));
    }
  });

  countryData.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const labels = countryData.map(country => country.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Population",
        data: countryData.map(country => country.population),
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,
        type: "logarithmic",
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "South American Country Population",
        color: "#fffffff",
      },
    },
  };
  return (
    <>
      <NavBar title={currentLoc}></NavBar>
      <main className="container mx-auto pt-10">
        <h1 className="col-start-6 col-end-8 text-center pb-10">
          This chart uses logarithmic scaling! Neat!
        </h1>
        <section className="grid grid-cols-12 grid-rows-12 grid-flow-col gap-1">
          <div
            className="rounded py-3 px-4 border-emerald-200 border-2 row-start-1 col-start-2 col-end-12
              row-end-12 bg-emerald-700"
          >
            <Bar data={data} options={options} className="bg-white" />
          </div>
        </section>
        <h1 className="col-start-6 col-end-8 text-center">
          If it wasn't log scaled, you couldn't see some of the population.
        </h1>
      </main>
    </>
  );
}
