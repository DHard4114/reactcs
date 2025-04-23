import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="bg-[#0A2540] text-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-[#00E599]">NeonTech</h1>

                <nav className="space-x-6">
                <Link to="/" className="hover:text-[#00E599] transition-colors">Home</Link>
                <Link to="/docs" className="hover:text-[#00E599] transition-colors">Docs</Link>
                <Link to="/pricing" className="hover:text-[#00E599] transition-colors">Pricing</Link>
                <Link to="/contact" className="hover:text-[#00E599] transition-colors">Contact</Link>
                </nav>

                <div>
                <Link to="/get-started">
                    <button className="bg-[#00E599] text-[#0A2540] px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition">
                    Get Started
                    </button>
                </Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
