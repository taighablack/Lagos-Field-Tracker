const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-green-700 text-white">
            <span className="text-2xl font-bold">Lagos Field Tracker</span>
            <ul className="flex space-x-4">
                <li><a href="/">Home</a></li>
                <li><a href="/map">Map</a></li>
                <li><a href="/sighting">Sighting</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;