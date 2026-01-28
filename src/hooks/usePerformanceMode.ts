"use client";

import { useState, useEffect } from "react";

export type PerformanceMode = "high" | "medium" | "low";

export function usePerformanceMode(): PerformanceMode {
    const [mode, setMode] = useState<PerformanceMode>("medium"); // Start with medium to avoid hydration issues
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) {
            setMode("low");
            return;
        }

        // Detect device capabilities
        const detectPerformance = () => {
            // Check CPU cores
            const cores = navigator.hardwareConcurrency || 2;
            
            // Check device memory (if available)
            const memory = (navigator as any).deviceMemory || 4;
            
            // Check if mobile device
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            
            // Performance scoring
            if (isMobile || cores < 4 || memory < 4) {
                return "low";
            } else if (cores < 8 || memory < 8) {
                return "medium";
            } else {
                return "high";
            }
        };

        const detectedMode = detectPerformance();
        setMode(detectedMode);
    }, []);

    return isClient ? mode : "medium"; // Return medium during SSR
}
