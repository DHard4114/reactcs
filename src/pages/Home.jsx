// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../component/Card';

function Home() {
    // Display Array
    const boxes = [
        "Serverless Speed. Neon Simplicity.",
        "Built for Scale. Powered by Postgres.",
        "Neon: Where Devs and Databases Align.",
        "Postgres, Evolved. Welcome to Neon.",
        "Less Ops, More Code. That’s Neon.",
        "The Future of Postgres Starts Here.",
    ];

    return (
        <main className="bg-[#0A0A0A] min-h-screen text-white">
            <section className="max-w-7xl mx-auto px-6 py-20 text-center">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                    <span className="text-[#00E599] font-mono">Postgres. Reimagined.</span>
                </h1>
                <p className="text-lg font-mono md:text-xl text-gray-300 max-w-2xl mx-auto mb-16">
                    A blazing-fast, serverless experience for developers who move fast and ship faster.
                </p>

                {/* Mapping Display */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {boxes.map((text, idx) => (
                        <Card key={idx} text={text} idx={idx} />
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link
                        to="/about"
                        className="inline-block px-6 py-3 bg-[#00E599] text-[#0A0A0A] font-semibold rounded-md hover:bg-[#00c67c] transition-colors duration-200"
                    >
                        About Neon →
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default Home;
