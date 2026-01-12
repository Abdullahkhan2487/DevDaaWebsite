"use client";

import Tag from "@/components/Tag";
import {
    useMotionValue,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `, and it needs cutting-edge solutions to stay competitive in the AI-driven world.`;
const words = text.split(" ");

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });

    const [currentWord, setCurrentWord] = useState(0);

    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(() => {
        wordIndex.on("change", (latest) => {
            setCurrentWord(latest);
        });
    }, [wordIndex]);

    return (
        <section className="py-28 lg:py-40  ">
            <div className="container">
                <div className="sticky top-28 md:top-32">
                    <div className="flex justify-center">
                        <Tag>Introduction DevDaa</Tag>
                    </div>
                    <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10 ">
                        <span>Your business deserves innovation&nbsp;</span>
                        <span className="text-white/15 ">
                            {words.map((word, wordIndex) => (
                                <span
                                    key={wordIndex}
                                    className={twMerge(
                                        "transition duration-500 text-white/15",
                                        wordIndex < currentWord && "text-white"
                                    )}
                                >{`${word} `}</span>
                            ))}
                        </span>
                        <span className="text-teal-500 block">
                            That&apos;s why we built DevDaa.
                        </span>
                    </div>
                </div>
                <div ref={scrollTarget} className="h-[150vh]"></div>
            </div>
        </section>
    );
}
