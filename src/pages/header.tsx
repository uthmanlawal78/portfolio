

export default function Header() {
    return (
        <header className="p-4 text-white justify-between flex items-center bg-gray-800 space-between ">
            <div></div>
            <div>
            <nav className="mt-2">
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/project" className="hover:underline">Projects</a></li>
                    <li><a href="/contact" className="hover:underline">Contact</a></li>
                </ul>
            </nav>
            </div>
        </header> 
    )
}