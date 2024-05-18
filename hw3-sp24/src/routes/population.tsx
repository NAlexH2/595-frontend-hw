import NavBar from "../components/navbar";

export default function Population() {
  const currentLoc = window.location.href;
  return (
    <>
      <NavBar title={currentLoc}></NavBar>
      <nav>Population</nav>
    </>
  );
}
