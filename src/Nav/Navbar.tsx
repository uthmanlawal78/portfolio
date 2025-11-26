

export default function Navbar() {
    return (
        <nav className="z-50">
            <div className="h-10vh flex justify-between lg:py-5 px-20 py-20 border-b">
                <div className="flex items-center flex-1">
                    <h2 className="text-3xl font-bold text-[#142850]">OURLANYTECH</h2>
                </div>
                <div>
                    <ul className="flex gap-8 mr-16 text-[18px]">
                        <li className="text-black hover:text-black-700 cursor-pointer">
                            <a href="#home">Home</a>
                        </li>
                        <li className="text-black hover:text-black-700 cursor-pointer">
                            <a href="#about">About</a>
                        </li>
                        <li className="text-black hover:text-black-700 cursor-pointer">
                            <a href="/work">Projects</a>
                        </li>
                        <li className="text-black hover:text-black-700 cursor-pointer">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}