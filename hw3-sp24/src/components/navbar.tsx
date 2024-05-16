export default function NavBar() {
    return (
        <nav className="bg-dark py-3">
            <div className="container">
                <a href={`/`}>Home</a>

                <a href={`/list`}>List</a>

                <a href={`/population`}>Population</a>

                <a href={`/customroute`}>Custom Route</a>
            </div>
        </nav>
    );
}
