"use client";

import Button from "@/components/Button";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorImage from "@/assets/images/cursor-you.svg";
import { Building2, Mail, Phone, MapPin } from "lucide-react";

export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();

    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);

        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { y: [0, 16, 0], x: 0 },
                { duration: 0.5, ease: "easeInOut" },
            ],
            [
                leftPointerScope.current,
                { opacity: 0 },
                { duration: 0.3, delay: 0.2 },
            ],
        ]);

        rightDesignAnimate([
            [
                rightDesignScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);

        rightPointerAnimate([
            [
                rightPointerScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { y: [0, 20, 0], x: 0 },
                { duration: 0.5, ease: "easeInOut" },
            ],
            [
                rightPointerScope.current,
                { opacity: 0 },
                { duration: 0.3, delay: 0.2 },
            ],
        ]);
    }, []);

    return (
        <section
            className="py-24 overflow-hidden relative min-h-screen flex items-center"
            style={{
                cursor: `url(${cursorImage.src}), auto`,
            }}
        >
            <div className="container relative z-10">
                <motion.div
                    ref={leftDesignScope}
                    initial={{ opacity: 0, y: 200, x: -100 }}
                    className="absolute -left-32 top-16 hidden lg:block w-80"
                    drag
                >
                    <div className="bg-neutral-900 border border-white/10 rounded-3xl p-6 shadow-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-teal-500 rounded-full p-2">
                                <Building2
                                    className="text-neutral-950"
                                    size={24}
                                />
                            </div>
                            <h3 className="text-xl font-bold text-white">
                                About DevDaa
                            </h3>
                        </div>
                        <div className="space-y-3 text-white/70 text-sm">
                            <p>
                                DevDaa is a cutting-edge software company
                                specializing in AI, ML, and emerging
                                technologies.
                            </p>
                            <p>
                                We transform innovative ideas into intelligent
                                solutions that drive business growth and digital
                                transformation.
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: -150, x: -200 }}
                    className="absolute top-96 left-56 hidden lg:block"
                >
                    <Pointer name="DevDaa team" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100, x: 100 }}
                    ref={rightDesignScope}
                    className="absolute -right-64 -top-16 hidden lg:block w-80"
                    drag
                >
                    <div className="bg-neutral-900 border border-white/10 rounded-3xl p-6 shadow-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-purple-400 rounded-full p-2">
                                <Mail className="text-neutral-950" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">
                                Contact Info
                            </h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Mail
                                    className="text-teal-500 mt-1"
                                    size={18}
                                />
                                <div>
                                    <p className="text-white/50 text-xs">
                                        Email
                                    </p>
                                    <p className="text-white text-sm">
                                        contact@devdaa.com
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone
                                    className="text-teal-500 mt-1"
                                    size={18}
                                />
                                <div>
                                    <p className="text-white/50 text-xs">
                                        Phone
                                    </p>
                                    <p className="text-white text-sm">
                                        +92 (340) 5744-852
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin
                                    className="text-teal-500 mt-1"
                                    size={18}
                                />
                                <div>
                                    <p className="text-white/50 text-xs">
                                        Location
                                    </p>
                                    <p className="text-white text-sm">
                                        Islamabad, PK
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, x: 475, y: 100 }}
                    className="absolute -top-4 right-80 hidden lg:block"
                >
                    <Pointer color="red" name="DevDaa team" />
                </motion.div>

                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 ">
                    Transforming ideas into intelligent solutions
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    DevDaa delivers cutting-edge AI, ML, and software solutions
                    that drive innovation and accelerate your business growth.
                </p>
                <div className="flex justify-center mt-8">
                    <a href="#contact">
                        <Button
                            size="lg"
                            variant="primary"
                            className="font-bold"
                        >
                            Let's Talk Business
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
}
