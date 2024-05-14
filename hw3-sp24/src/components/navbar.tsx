export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <a href={`/`}>Home</a>
                </li>
                <li>
                    <a href={`/list`}>Info</a>
                </li>
                <li>
                    <a href={`/population`}>Charts</a>
                </li>
                <li>
                    <a href={`/customroute`}>Contact</a>
                </li>
            </ul>
        </nav>
    );
}
