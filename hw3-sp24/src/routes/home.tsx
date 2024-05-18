import NavBar from "../components/navbar";

export default function Home() {
  const currentLoc = window.location.href;
  return (
    <>
      <NavBar title={currentLoc}></NavBar>
      <main className="container mx-auto pt-10">
        <section className="grid grid-cols-12 grid-rows-12 grid-flow-col gap-1">
          <h1 className="col-start-6 col-end-8 text-center">Welcome!</h1>
          <div
            className="rounded py-3 px-4 border-emerald-200 border-2 row-start-2 col-start-2 col-end-12
              row-end-12 bg-emerald-700"
          >
            <section className="row-start-2 text-yellow-50 font-semibold text-xl">
              <p>
                This website is designed to provide an example of what it might
                look like to have a website that accesses a country api, and
                display information about a select number of countries. 13 is
                the magic number for this example!
              </p>
              <p className="pt-2">
                Feel free to use any of the navigation buttons at the top to go
                explore other information on any of the South American countries
                the API pulls up.
              </p>
              <p className="pt-2">
                The following South American countries are what you can expect
                to find while exploring the site:{" "}
              </p>
              <ul>
                <li>Argentina</li>
                <li>Bolivia</li>
                <li>Brazil</li>
                <li>Chile</li>
                <li>Colombia</li>
                <li>Ecuador</li>
                <li>Guyana</li>
                <li>Paraguay</li>
                <li>Peru</li>
                <li>Suriname</li>
                <li>Uruguay</li>
                <li>Venezuela</li>
                <li>French Guiana</li>
              </ul>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
