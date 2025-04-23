import { FaDiscord, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = (scrollPosition / windowHeight) * 100;

            if (scrollPercentage >= 25) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer
            className={`bg-black text-white py-12 px-6 transition-transform duration-700 ease-out transform ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
                {/* Logo & Status */}
                <div className="space-y-4">
                    <div className="py-4 flex justify-center">
                        <Link to="/">
                            <img
                                src="./src/assets/neon-brand-assets/neon-brand-assets/logo/dark-background/mono.png"
                                alt="Neon Tech Logo"
                                className="w-28 md:w-32 h-auto transition hover:brightness-110"
                            />
                        </Link>
                    </div>
                    <p className="flex items-center gap-2 text-green-400">
                        <span className="text-xs">●</span> All systems operational
                    </p>
                    <p className="text-gray-400">
                        Made in SF and the World <br />
                        Copyright © 2022 – 2025 Neon, Inc.
                    </p>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-white font-bold mb-3">COMPANY</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>
                            <Link to="/about" className="hover:text-[#00E599] transition duration-200">
                                About
                            </Link>
                        </li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Contact Sales</li>
                        <li>Partners</li>
                        <li>Security</li>
                        <li>Legal</li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-white font-bold mb-3">RESOURCES</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>Docs</li>
                        <li>Changelog</li>
                        <li>Support</li>
                        <li>Community Guides</li>
                        <li>PostgreSQL Tutorial</li>
                        <li>Creators</li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-white font-bold mb-3">SOCIAL</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li className="flex items-center gap-2"><FaDiscord /> Discord</li>
                        <li className="flex items-center gap-2"><FaGithub /> GitHub</li>
                        <li className="flex items-center gap-2"><FaXTwitter /> x.com</li>
                        <li className="flex items-center gap-2"><FaLinkedin /> LinkedIn</li>
                        <li className="flex items-center gap-2"><FaYoutube /> YouTube</li>
                    </ul>
                </div>

                {/* Compliance */}
                <div>
                    <h3 className="text-white font-bold mb-3">COMPLIANCE</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>✓ <span className="font-semibold">CCPA</span> Compliant</li>
                        <li>✓ <span className="font-semibold">GDPR</span> Compliant</li>
                        <li>✓ ISO 27001 Certified</li>
                        <li>✓ ISO 27701 Certified</li>
                        <li>✓ SOC 2 Certified</li>
                        <li>✓ <span className="font-semibold">HIPAA</span> Compliant</li>
                        <li>Trust Center</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
