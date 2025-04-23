import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {boxes.map((text, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-[#1A1A1A] p-6 rounded-xl border border-[#2A2A2A] shadow-lg font-mono"
                            whileHover={{ scale: 1.05, borderColor: '#00E599' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <p className="text-lg font-medium tracking-wide">{text}</p>
                        </motion.div>
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
