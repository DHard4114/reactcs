import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';

function NavBar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="bg-[#0A0A0A] text-white shadow-md">
            {/* Logo */}
            <div className="py-4 flex justify-center">
                <Link to="/">
                    <img
                        src="./src/assets/neon-brand-assets/neon-brand-assets/logo/dark-background/color.svg"
                        alt="Neon Tech Logo"
                        className="w-28 md:w-32 h-auto transition hover:brightness-110"
                    />
                </Link>
            </div>

            <div className="w-full h-0.5 bg-gradient-to-r from-[#00E599] via-[#00B2FF] to-[#7F00FF]"></div>

            {/* Navbar: Search Bar, Navigation, and Auth Buttons */}
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Search Bar */}
                <div className="relative w-3/4 max-w-xl hidden md:block">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full py-2 pl-10 pr-4 rounded-none bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200 ease-in-out"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>

                {/* Hamburger Menu for Mobile */}
                <button className="md:hidden text-white" onClick={toggleMobileMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Navigation */}
                <nav className={`md:flex items-center gap-8 text-sm font-mono tracking-wide ${isMobileMenuOpen ? 'block absolute left-0 right-0 top-32 space-x-6 bg-[#0A0A0A] bg-opacity-90 py-4 px-6 border-t border-[#00E599] transition-all opacity-100 visible z-50' : 'hidden md:flex'} md:block`}>
                    <Link to="/product" className="hover:text-[#00E599] transition">Product</Link>
                    <Link to="/solution" className="hover:text-[#00E599] transition">Solution</Link>
                    <Link to="/docs" className="hover:text-[#00E599] transition">Docs</Link>
                    <Link to="/pricing" className="hover:text-[#00E599] transition">Pricing</Link>
                </nav>

                {/* Auth Buttons */}
                <div className="flex items-center gap-4">
                    <Link to="/login" className="text-sm font-mono hover:text-[#00E599]">Login</Link>
                    <Link to="/get-started">
                        <button className="hover:bg-[#00E599] font-mono font-thin text-[#6636d6] px-4 py-2 rounded-sm hover:bg-opacity-90 transition shadow-md">
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default NavBar;
