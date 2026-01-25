"use client";

import { motion } from "framer-motion";
import {
    SiReact,
    SiPython,
    SiDocker,
    SiKubernetes,
    SiTensorflow,
    SiNodedotjs,
    SiTypescript,
    SiAmazon,
} from "react-icons/si";

// Floating tech icons data
const floatingIcons = [
    { Icon: SiReact, color: "text-cyan-400", delay: 0 },
    { Icon: SiPython, color: "text-yellow-400", delay: 0.5 },
    { Icon: SiDocker, color: "text-blue-400", delay: 1 },
    { Icon: SiKubernetes, color: "text-blue-500", delay: 1.5 },
    { Icon: SiTensorflow, color: "text-orange-400", delay: 2 },
    { Icon: SiNodedotjs, color: "text-green-400", delay: 2.5 },
    { Icon: SiTypescript, color: "text-blue-400", delay: 3 },
    { Icon: SiAmazon, color: "text-orange-500", delay: 3.5 },
];

// Animated orb particles
const orbParticles = [
    { color: "from-cyan-500 to-blue-500", delay: 0, duration: 8 },
    { color: "from-purple-500 to-pink-500", delay: 2, duration: 10 },
    { color: "from-green-500 to-teal-500", delay: 4, duration: 12 },
    { color: "from-yellow-500 to-orange-500", delay: 1, duration: 9 },
];

export default function BackgroundEffects() {
    return (
        <>
            {/* Multi-layer animated background orbs */}
            <motion.div
                className="fixed inset-0 opacity-40 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                style={{ zIndex: 0 }}
            >
                {orbParticles.map((orb, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-96 h-96 rounded-full blur-3xl mix-blend-screen opacity-30 bg-gradient-to-r ${orb.color}`}
                        initial={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            scale: 0,
                        }}
                        animate={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: orb.duration,
                            repeat: Infinity,
                            delay: orb.delay,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </motion.div>

            {/* Floating tech icons */}
            <div
                className="fixed inset-0 pointer-events-none overflow-hidden"
                style={{ zIndex: 1 }}
            >
                {floatingIcons.map((item, index) => (
                    <motion.div
                        key={index}
                        className="absolute hidden lg:block"
                        initial={{
                            x:
                                Math.random() *
                                (typeof window !== "undefined"
                                    ? window.innerWidth
                                    : 1000),
                            y: -100,
                            opacity: 0,
                            scale: 0,
                        }}
                        animate={{
                            y: [
                                0,
                                typeof window !== "undefined"
                                    ? window.innerHeight * 1.5
                                    : 1500,
                            ],
                            x:
                                Math.sin(index) * 200 +
                                (typeof window !== "undefined"
                                    ? window.innerWidth / 2
                                    : 500),
                            opacity: [0, 0.5, 0],
                            scale: [0, 1, 0],
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 15,
                            repeat: Infinity,
                            delay: item.delay,
                            ease: "linear",
                        }}
                    >
                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                filter: [
                                    "drop-shadow(0 0 0px currentColor)",
                                    "drop-shadow(0 0 20px currentColor)",
                                    "drop-shadow(0 0 0px currentColor)",
                                ],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                            }}
                        >
                            <item.Icon className={`size-10 ${item.color}`} />
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Particle system */}
            <div
                className="fixed inset-0 overflow-hidden pointer-events-none"
                style={{ zIndex: 1 }}
            >
                {Array.from({ length: 50 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        initial={{
                            x:
                                Math.random() *
                                (typeof window !== "undefined"
                                    ? window.innerWidth
                                    : 1000),
                            y:
                                Math.random() *
                                (typeof window !== "undefined"
                                    ? window.innerHeight
                                    : 800),
                            opacity: 0,
                            width: Math.random() * 3 + 1,
                            height: Math.random() * 3 + 1,
                            backgroundColor: [
                                "rgb(34, 197, 94)",
                                "rgb(59, 130, 246)",
                                "rgb(168, 85, 247)",
                            ][Math.floor(Math.random() * 3)],
                        }}
                        animate={{
                            y: [0, -1500],
                            x: [0, Math.sin(i) * 300, Math.cos(i) * 200],
                            opacity: [0, 0.8, 0],
                        }}
                        transition={{
                            duration: 15 + Math.random() * 20,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeOut",
                        }}
                    />
                ))}
            </div>
        </>
    );
}
