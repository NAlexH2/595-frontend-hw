import { useEffect, useState, useRef, ReactNode } from "react";
import axios, { AxiosResponse } from "axios";
import NavBar from "../components/navbar";

const countryAPIURL: string =
  "https://cs464p564-frontend-api.vercel.app/api/countries";

function buildCards(response: AxiosResponse): Array<ReactNode> {
  const countryList: ReactNode[] = [];
  for (const item of response.data) {
    const cleanCard = (
      <>
        <div
          className="bg-slate-200 text-black border-2 border-black rounded max-w-sm overflow-hidden
            shadow-md"
          key={item.name}
        >
          <div className="p-4">
            <div className="flex items-center justify-center pb-1">
              <img
                src={item.flag_png}
                alt={
                  item.flag_alt
                    ? item.flag_alt
                    : "No alt-text for this flag is available."
                }
              />
            </div>
            <h1 className="font-bold text-lg">{item.name}</h1>
            <p>
              <text className="font-bold underline">Population:</text>{" "}
              {item.population.toLocaleString()}
            </p>
            <p>
              <text className="font-bold underline">Spoken Languages:</text>{" "}
              {item.official_languages.join(", ")}
            </p>
            <p>
              <text className="font-bold underline">GDP (Billions):</text>{" "}
              {item.gdp_billions
                ? item.gdp_billions
                : "No GDP recorded to report."}
            </p>
          </div>
        </div>
      </>
    );
    countryList.push(cleanCard);
  }
  countryList.sort();
  return countryList;
}

export default function List() {
  const currentLoc = window.location.href;
  const hasFetched = useRef(false);
  const [cardCompnent, setCardComponent] = useState<Array<ReactNode>>([]);

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      axios
        .get(countryAPIURL)
        .then(response => setCardComponent(buildCards(response)))
        .catch(error => console.error(error.message));
    }
  }, []);

  return (
    <>
      <NavBar title={currentLoc}></NavBar>
      <main className="container mx-auto pt-10">
        <section className="grid grid-cols-12 grid-rows-12 grid-flow-col gap-1">
          <div
            className="rounded py-3 px-4 border-emerald-200 border-2 row-start-1 col-start-2 col-end-12
              row-end-12 bg-emerald-700"
          >
            <section className="grid grid-cols-8 gap-2 col-start-1">
              {cardCompnent.map((country, index) => (
                <div className="m-2 col-span-4 place-items-end" key={index}>
                  {country}
                </div>
              ))}
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
