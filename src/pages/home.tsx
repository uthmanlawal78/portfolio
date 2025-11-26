import profimg from '../assets/images/uthman.jpg';
import Work from './work';

export default function Home() {
    return (
        <div>
        <div className="p-4 flex flex-col md:flex-row items-center bg-white space-y-4 md:space-y-0 md:space-x-6 ">
             <div>
            <img src={profimg} alt="Profile" className="w-48 h-48 rounded-full mt-4"/>
            </div>
            <div><h1 className="text-2xl font-bold">Hi, I am Uthman, <br/>A software engineer.</h1><br/>
            <p>Motivated and detail-oriented Website Developer with strong foundations in software
                development, <br/>computer systems, and hardware troubleshooting. Experienced in both
                engineering environments and <br/> customer-facing roles, with a hands-on approach to project
                implementation, system configuration, and <br/>responsive web development. Currently serving in
                Lagos where he supports technology operations and <br/>contributes to community-based IT
                solutions. Passionate about continuous learning and using tech to<br/> improve user experience
                and digital access. 
                </p></div>
           
            </div>
                 <p className="text-xl font-semibold">Featured work</p>

            <div>
                <Work />
            </div>
            
        </div>
        
    )
}

//