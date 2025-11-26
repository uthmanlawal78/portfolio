import projA from '../assets/images/kranium.png';
import projB from '../assets/images/ticket.png';
import projC from '../assets/images/flowinade.png';

export default function Work() {
    return (
        <div className='bg-[#EDF7FA]'>
            <p className="text-xl font-semibold">Featured work</p>
            
            <div className="p-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className='w-1/4'>
                    <img src={projA} alt="Project A" className="w-48 h-28 rounded-md mt-4"/>
                </div>
                
                <div className='w-3/4'>
                    <h2 className="text-lg font-bold text-[#21243D]">KRANIUM AUTO<br/><h4 className='rounded-md bg-[#142850] text-white px-2 inline-block '>2024</h4></h2>
                    <p>A web landing page for a nice car brand where customers can easily check available cars, explore detailed car specifications, view high-quality images, and find up-to-date information on pricing and promotions. The page aims to provide a seamless browsing experience, helping customers make informed decisions about their next vehicle.</p>
                </div>
            </div>


            <div className="p-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                    <div className='w-1/4'>
                        <img src={projB} alt="Project B" className="w-48 h-28 rounded-md mt-4"/>
                    </div>
                    <div className='w-3/4'>
                        <h2 className="text-lg font-bold">TECHENDFEST<br/><h4 className='rounded-md bg-[#142850] text-white px-2 inline-block'>2025</h4></h2>
                        <p>A technology conference focused on emerging trends and innovations in software development.</p>
                    </div>
            </div>

            <div className="p-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                    <div className='w-1/4'>
                        <img src={projC} alt="Project B" className="w-48 h-28 rounded-md mt-4"/>
                    </div>
                    <div className='w-3/4'>
                        <h2 className="text-lg font-bold">FLOWINADE<br/><h4 className='rounded-md bg-[#142850] text-white px-2 inline-block '>2024</h4></h2>                       
                        <p>A landing page for a shortlet apartment rental service.</p>
                    </div>
            </div>
            
        </div>
    )
}

