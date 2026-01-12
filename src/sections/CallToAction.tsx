"use client";

import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function CallToAction() {
    const animation = useRef<AnimationPlaybackControls>();
    const [scope, animate] = useAnimate();

    const [slowDownAnimation, setSlowDownAnimation] = useState(false);

    useEffect(() => {
        animation.current = animate(
            scope.current,
            { x: "-50%" },
            { duration: 30, ease: "linear", repeat: Infinity }
        );
    }, []);

    useEffect(() => {
        if (animation.current) {
            if (slowDownAnimation) {
                animation.current.speed = 0.5;
            } else {
                animation.current.speed = 0.8;
            }
        }
    }, [slowDownAnimation]);

    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4 flex">
                <motion.div
                    ref={scope}
                    className="flex flex-none gap-16 pr-16 text-5xl md:text-6xl font-medium"
                    onMouseEnter={() => setSlowDownAnimation(true)}
                    onMouseLeave={() => setSlowDownAnimation(false)}
                >
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div key={index} className="flex items-center gap-16">
                            <span className="text-teal-500 text-5xl ">
                                &#10038;
                            </span>
                            <span
                                className={twMerge(
                                    slowDownAnimation && "text-teal-500"
                                )}
                            >
                                Dev-Driven. Data-Powered{" "}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
