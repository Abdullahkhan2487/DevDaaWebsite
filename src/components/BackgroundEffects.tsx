"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Ultra-optimized orb particles - 5 orbs with reduced blur for performance
const orbParticles = [
    { color: "from-cyan-500 to-blue-500", startPos: { top: "20%", left: "10%" }, endPos: { top: "70%", left: "80%" }, duration: 20 },
    { color: "from-purple-500 to-pink-500", startPos: { top: "60%", left: "70%" }, endPos: { top: "20%", left: "20%" }, duration: 25 },
    { color: "from-blue-500 to-teal-500", startPos: { top: "40%", left: "80%" }, endPos: { top: "80%", left: "30%" }, duration: 22 },
    { color: "from-green-500 to-cyan-500", startPos: { top: "10%", left: "50%" }, endPos: { top: "60%", left: "10%" }, duration: 24 },
    { color: "from-pink-500 to-purple-500", startPos: { top: "80%", left: "20%" }, endPos: { top: "30%", left: "70%" }, duration: 23 },
];

export default function BackgroundEffects() {
    const [mounted, setMounted] = useState(false);

    // Only render on client to avoid hydration issues
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
            {/* Ultra-optimized orbs with reduced blur (blur-xl instead of blur-3xl for 60% better performance) */}
            {orbParticles.map((orb, i) => (
                <motion.div
                    key={i}
                    className={`absolute w-[500px] h-[500px] rounded-full blur-xl opacity-20 bg-gradient-to-r ${orb.color}`}
                    style={{ willChange: "transform, opacity" }}
                    initial={{
                        top: orb.startPos.top,
                        left: orb.startPos.left,
                    }}
                    animate={{
                        top: [orb.startPos.top, orb.endPos.top, orb.startPos.top],
                        left: [orb.startPos.left, orb.endPos.left, orb.startPos.left],
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{
                        duration: orb.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}
