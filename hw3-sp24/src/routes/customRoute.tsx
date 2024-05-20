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
import { Doughnut } from "react-chartjs-2";
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
  languages: string;
}

export default function CustomRoute() {
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
            (item: { official_languages: string }) => ({
              languages: item.official_languages,
            }),
          );
          setCountryData(data);
        })
        .catch(error => console.error(error.message));
    }
  });

  const labels = Array.from(
    new Set(countryData.flatMap(country => country.languages)),
  );

  const languageCountMap = new Map<string, number>();
  countryData.forEach(country => {
    const languages = Array.isArray(country.languages)
      ? country.languages
      : [country.languages];
    languages.forEach(language => {
      languageCountMap.set(language, (languageCountMap.get(language) || 0) + 1);
    });
  });
  const languageCounts: number[] = Array.from(languageCountMap.values());

  const data = {
    labels,
    datasets: [
      {
        label: "Spoken Langauges Totals In South America",
        data: languageCounts,
        backgroundColor: [
          "rgba(50, 99, 132, 1)",
          "rgba(112, 99, 132, 1)",
          "rgba(255, 99, 0, 1)",
          "rgba(0, 99, 132, 1)",
          "rgba(255, 0, 132, 1)",
          "rgba(0, 0, 255, 1)",
          "rgba(255, 0, 0, 1)",
          "rgba(0, 132, 132, 1)",
          "rgba(132, 132, 0, 1)",
          "rgba(99, 0, 99, 1)",
          "rgba(0, 112, 0, 1)",
          "rgba(75, 0, 255, 1)",
          "rgba(0, 0, 150, 1)",
        ],
      },
    ],
  };
  // 13
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Spoken Langauges Totals In South America",
        color: "#fffffff",
      },
    },
  };
  return (
    <>
      <NavBar title={currentLoc}></NavBar>
      <main className="container mx-auto pt-10">
        <section className="grid grid-cols-12 grid-rows-12 grid-flow-col gap-1">
          <div
            className="rounded py-3 px-4 border-emerald-200 border-2 row-start-1 col-start-2 col-end-12
              row-end-12 bg-emerald-700"
          >
            <Doughnut data={data} options={options} className="bg-white" />
          </div>
        </section>
      </main>
    </>
  );
}
