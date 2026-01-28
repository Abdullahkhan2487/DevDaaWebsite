"use client";

import { memo, useMemo } from "react";
import {
    SiReact,
    SiPython,
    SiDocker,
    SiNodedotjs,
    SiTypescript,
} from "react-icons/si";
import { usePerformanceMode } from "@/hooks/usePerformanceMode";

// Floating tech icons data (reduced for performance)
const floatingIcons = [
    { Icon: SiReact, color: "text-cyan-400", delay: 0 },
    { Icon: SiPython, color: "text-yellow-400", delay: 1 },
    { Icon: SiDocker, color: "text-blue-400", delay: 2 },
    { Icon: SiNodedotjs, color: "text-green-400", delay: 3 },
    { Icon: SiTypescript, color: "text-blue-400", delay: 4 },
];

// Animated orb particles (reduced for performance)
const orbParticles = [
    { color: "from-cyan-500 to-blue-500", delay: 0, duration: 10 },
    { color: "from-purple-500 to-pink-500", delay: 5, duration: 12 },
];

// Pre-generate particle data to avoid re-computation
const generateParticles = (count: number) => {
    const colors = ["rgb(34, 197, 94)", "rgb(59, 130, 246)", "rgb(168, 85, 247)"];
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        color: colors[Math.floor(Math.random() * 3)],
        duration: 15 + Math.random() * 20,
        delay: Math.random() * 5,
        driftX: Math.sin(i) * 300,
    }));
};

const BackgroundEffects = memo(function BackgroundEffects() {
    const performanceMode = usePerformanceMode();
    
    // Adjust effects based on performance
    const particleCount = performanceMode === "high" ? 8 : performanceMode === "medium" ? 4 : 0;
    const showIcons = performanceMode !== "low";
    const showOrbs = performanceMode !== "low";
    
    const particleData = useMemo(() => generateParticles(particleCount), [particleCount]);
    // Memoize icon positions
    const iconPositions = useMemo(() => 
        floatingIcons.map((_, index) => ({
            left: `${Math.random() * 80 + 10}%`,
            duration: 20 + Math.random() * 15,
            driftX: Math.sin(index) * 200,
        })), []
    );

    return (
        <>
            {/* Multi-layer animated background orbs - CSS animated */}
            <div
                className="fixed inset-0 opacity-40 pointer-events-none"
                style={{ zIndex: 0 }}
            >
                {orbParticles.map((orb, i) => (
                    <div
                        key={i}
                        className={`absolute w-80 h-80 rounded-full blur-xl mix-blend-screen bg-gradient-to-r ${orb.color} animate-orb`}
                        style={{
                            left: `${30 + i * 40}%`,
                            top: `${20 + i * 40}%`,
                            ["--duration" as string]: `${orb.duration}s`,
                            ["--delay" as string]: `${orb.delay}s`,
                            display: showOrbs ? "block" : "none",
                        }}
                    />
                ))}
            </div>

            {/* Floating tech icons - CSS animated */}
            <div
                className="fixed inset-0 pointer-events-none overflow-hidden"
                style={{ zIndex: 1 }}
            >
                {floatingIcons.map((item, index) => (
                    <div
                        key={index}
                        className="absolute hidden lg:block animate-icon-float"
                        style={{
                            left: iconPositions[index].left,
                            ["--duration" as string]: `${iconPositions[index].duration}s`,
                            ["--delay" as string]: `${item.delay}s`,
                            ["--drift-x" as string]: `${iconPositions[index].driftX}px`,
                            display: showIcons ? "block" : "none",
                        }}
                    >
                        <div className="animate-icon-pulse">
                            <item.Icon className={`size-10 ${item.color}`} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Particle system - CSS animated */}
            <div
                className="fixed inset-0 overflow-hidden pointer-events-none"
                style={{ zIndex: 1 }}
            >
                {particleData.map((particle) => (
                    <div
                        key={particle.id}
                        className="absolute rounded-full animate-particle"
                        style={{
                            left: particle.left,
                            top: particle.top,
                            width: particle.size,
                            height: particle.size,
                            backgroundColor: particle.color,
                            ["--duration" as string]: `${particle.duration}s`,
                            ["--delay" as string]: `${particle.delay}s`,
                            ["--drift-x" as string]: `${particle.driftX}px`,
                            display: particleCount > 0 ? "block" : "none",
                        }}
                    />
                ))}
            </div>
        </>
    );
});

export default BackgroundEffects;
