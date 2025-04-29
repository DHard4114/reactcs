import React from 'react'
import { motion } from 'framer-motion';

function Card({ text, idx }) {
    return (
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
    );
}

export default Card;
