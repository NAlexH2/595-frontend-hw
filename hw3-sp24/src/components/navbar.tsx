export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <a href={`/`}>Home</a>
                </li>
                <li>
                    <a href={`/list`}>List</a>
                </li>
                <li>
                    <a href={`/population`}>Population</a>
                </li>
                <li>
                    <a href={`/customroute`}>Custom Route</a>
                </li>
            </ul>
        </nav>
    );
}
