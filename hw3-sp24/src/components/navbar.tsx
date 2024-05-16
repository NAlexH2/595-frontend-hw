export default function NavBar() {
    const linkStyle = "text-dark rounded bg-light border-light py-1 px-2 me-2";
    const linkStyleOnHover =
        "text-dark rounded bg-light border-light py-1 px-2 me-2";
    return (
        <div className="bg-dark py-3">
            <div className="container">
                <nav>
                    <a className={linkStyle} href={`/`}>
                        Home
                    </a>
                    <a className={linkStyle} href={`/list`}>
                        List
                    </a>
                    <a className={linkStyle} href={`/population`}>
                        Population
                    </a>
                    <a className={linkStyle} href={`/customroute`}>
                        Custom Route
                    </a>
                </nav>
            </div>
        </div>
    );
}
