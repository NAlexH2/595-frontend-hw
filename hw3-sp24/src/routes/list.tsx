import NavBar from "../components/navbar";

export default function List() {
  const currentLoc = window.location.href;
  return (
    <>
      <NavBar title={currentLoc}></NavBar>
      <nav>List</nav>
    </>
  );
}
