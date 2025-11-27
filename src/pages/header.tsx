import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="p-4 text-white justify-between flex items-center bg-gray-800 space-between ">
            <div></div>
            <div>
            <nav className="mt-2">
                <ul className="flex space-x-4">
                    <li><Link to="/" className="hover:underline">Home</Link></li>
                    <li><Link to="/project" className="hover:underline">Projects</Link></li>
                    <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                </ul>
            </nav>
            </div>
        </header> 
    )
}