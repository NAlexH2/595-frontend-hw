import NavBar from "../components/navbar";

export default function CustomRoute() {
  const currentLoc = window.location.href;
  return (
    <>
      <NavBar title={currentLoc}></NavBar>
      <nav>Custom Route</nav>
    </>
  );
}
