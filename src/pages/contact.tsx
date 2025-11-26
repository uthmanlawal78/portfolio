

export default function Contact() {
    return (
        <div className="p-4 flex flex-col md:flex-row items-start bg-white space-y-4 md:space-y-0 md:space-x-6 ">
            <div className="w-1/2">
                <h1 className="text-2xl font-bold p-4 text-[#21243D]">Let's Talk</h1>
                <h4 className="text-[#21243D]">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help</h4>
                <h2 className="text-2xl font-bold p-4 text-[#21243D]">Email</h2>
                <h4 className="text-[#21243D]">uthmanlawal78@gmail.com</h4>
                <h2 className="text-2xl font-bold p-4 text-[#21243D]">Phone</h2>
                <h4 className="text-[#21243D]">07053344517</h4>
                <h2 className="text-2xl font-bold p-4 text-[#21243D]">Socials</h2>
                <h4><a href="https://twitter.com/Uthma533445">Twitter: @Uthma533445</a></h4>
                <h4><a href="https://instagram.com/uthman_78">Instagram: @uthman_78</a></h4>
                <h4><a href="https://www.linkedin.com/in/uthman-lawal-27813a30a/">Linkedin: @Uthman lawal</a></h4>
            </div>
            
            
            <div className="w-1/2 bg-gray-100 rounded-md shadow-md">
                <div className="p-4">
                    <form className="flex flex-col space-y-4">
                        <label className="text-left">Name:</label>
                        <input id="name" type="text" placeholder="Romeo" className="p-2 border border-gray-300 rounded-md"/>
                        <label className="text-left">Email:</label>
                        <input id="email" type="email" placeholder="example@example.com" className="p-2 border border-gray-300 rounded-md"/>
                        <label className="text-left">Message:</label>
                        <textarea id="message" placeholder="Your Message" className="p-2 border border-gray-300 rounded-md h-32"></textarea>
                        <button type="submit" className="bg-[#21243D] text-white p-2 rounded-md hover:bg-[#1a1f2d]">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}