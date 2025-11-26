

export default function Header() {
    return (
        <header className="p-4 text-white justify-between flex items-center bg-gray-800 space-between">
            <nav className="mt-2">
                <ul className="flex space-x-4">
                    <li><a href="#home" className="hover:underline">Home</a></li>
                    <li><a href="#about" className="hover:underline">About</a></li>
                    <li><a href="/work" className="hover:underline">Projects</a></li>
                    <li><a href="#contact" className="hover:underline">Contact</a></li>
                </ul>
            </nav>
        </header> 
    )
}