import { FaGithub, FaLinkedin, FaDiscord, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="bg-[#0A0A0A] text-white min-h-screen flex flex-col py-10">
            <div className="container mx-auto px-6 py-20 border border-gray-700 rounded-xl">
                
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div>
                        <h1 className="text-5xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 mb-8">
                            A New Era for Postgres
                        </h1>
                        <p className="text-lg text-gray-400 font-mono mb-4">
                            Neon is transforming the database landscape with Postgres. Experience the future of serverless databases, built for developers.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-emerald-400 text-black px-8 py-3 rounded-sm hover:bg-emerald-500 transition duration-200 ease-in-out">
                                Get Started
                            </button>
                            <button className="border border-gray-600 text-white px-8 py-3 rounded-sm hover:border-gray-400 transition duration-200 ease-in-out">
                                Join the Revolution
                            </button>
                        </div>
                    </div>

                    <div>
                    <p className="text-gray-400 text-lg mb-4 font-mono">
                        <span className="font-semibold">Our mission:</span> Deliver Postgres with the power of serverless — fast, scalable, and effortless. Built for teams that ship.
                    </p>
                    <p className="text-gray-400 font-mono">
                        With Neon, Postgres isn’t just a database — it’s a next-gen platform that grows with you.
                    </p>
                    </div>
                </div>

                {/* Timeline Section */}
                <div className="mt-32 border-t border-gray-700 pt-12">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute h-1 bg-gray-800 top-1/2 left-0 right-0 -translate-y-1/2"></div>
                        {/* Timeline points */}
                        <div className="grid grid-cols-6 relative">
                            {[{
                                date: 'March, 2021',
                                event: 'First Commits'
                            }, {
                                date: 'June 15th, 2022',
                                event: 'Technical Preview'
                            }, {
                                date: 'July, 2022',
                                event: '$54MM Raised'
                            }, {
                                date: 'December, 2022',
                                event: 'Open Access'
                            }, {
                                date: 'August, 2023',
                                event: '$46MM Raised'
                            }, {
                                date: 'April 15th, 2024',
                                event: 'Neon is Generally Available'
                            }].map((point, index) => (
                                <div className="flex flex-col items-center" key={index}>
                                    <div className="bg-teal-500 w-4 h-4 rounded-sm mb-6 z-10"></div>
                                    <p className="text-gray-400 text-sm">{point.date}</p>
                                    <p className="font-medium">{point.event}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Social Section */}
                <div className="mt-32 text-center border-t border-gray-700 pt-12">
                    <h3 className="text-3xl font-bold mb-6">Connect with Us</h3>
                    <div className="flex justify-center gap-8">
                        <a href="https://github.com" className="text-gray-400 hover:text-white transition duration-200 ease-in-out">
                            <FaGithub size={28} />
                        </a>
                        <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition duration-200 ease-in-out">
                            <FaLinkedin size={28} />
                        </a>
                        <a href="https://discord.com" className="text-gray-400 hover:text-white transition duration-200 ease-in-out">
                            <FaDiscord size={28} />
                        </a>
                        <a href="https://x.com" className="text-gray-400 hover:text-white transition duration-200 ease-in-out">
                            <FaXTwitter size={28} />
                        </a>
                        <a href="https://youtube.com" className="text-gray-400 hover:text-white transition duration-200 ease-in-out">
                            <FaYoutube size={28} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
