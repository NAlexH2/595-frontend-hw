export default function NavBar({ title }: { title: string }) {
  const home = "/home";
  const list = "/list";
  const population = "/population";
  const customroute = "/customroute";
  const linkStyle =
    "rounded-lg border-2 border-blue-700 bg-blue-600 pb-1 text-center \
    font-bold text-white underline hover:border-white \
    hover:bg-slate-300 hover:text-black px-2";

  const currentStyle =
    "rounded-lg border-2 border-l-sky-300 bg-sky-500 pb-1 text-center \
    font-bold text-black underline hover:border-white \
    hover:bg-slate-300 hover:text-black px-2";

  return (
    <header className="bg-black py-3 ">
      <div className="flex items-center justify-center">
        <nav className="grid grid-cols-4 gap-4 grid-flow-row">
          <a
            className={title.search(home) !== -1 ? currentStyle : linkStyle}
            href={home}
          >
            Home
          </a>
          <a
            className={title.search(list) !== -1 ? currentStyle : linkStyle}
            href={list}
          >
            List
          </a>
          <a
            className={
              title.search(population) !== -1 ? currentStyle : linkStyle
            }
            href={population}
          >
            Population
          </a>
          <a
            className={
              title.search(customroute) !== -1 ? currentStyle : linkStyle
            }
            href={customroute}
          >
            Custom Route
          </a>
        </nav>
      </div>
    </header>
  );
}
