"use client";

import logoImage from "@/assets/images/devdaa.png";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Button from "@/components/Button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#Services" },
    { label: "Tech Stack", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section className="py-4 lg:py-6 fixed w-full top-0 z-50 ">
                <div className="container max-w-6xl">
                    <div className="border border-white/15 rounded-[27px] lg:rounded-full bg-neutral-950/70 backdrop-blur">
                        <figure className="grid grid-cols-2 lg:grid-cols-3 py-3 lg:py-2 lg:px-4 px-4 items-center gap-4">
                            <div>
                                <Image
                                    src={logoImage}
                                    alt="DevDaa logo"
                                    className="h-8 w-auto md:h-10"
                                />
                            </div>
                            <div className="hidden lg:flex justify-center items-center ">
                                <nav className="flex gap-6 font-medium text-base">
                                    {navLinks.map((each) => (
                                        <a
                                            href={each.href}
                                            key={each.href}
                                            className="hover:text-teal-500 transition"
                                        >
                                            {each.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex justify-end gap-4">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="lg:hidden"
                                >
                                    {!isOpen ? (
                                        <motion.div
                                            initial={{ opacity: 1 }}
                                            animate={{
                                                opacity: isOpen ? 0 : 1,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Menu
                                                className="text-white"
                                                size={30}
                                            />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{
                                                opacity: isOpen ? 1 : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <X
                                                className="text-white"
                                                size={30}
                                            />
                                        </motion.div>
                                    )}
                                </button>
                                <a href="#contact">
                                    <Button
                                        variant="primary"
                                        className="hidden lg:inline-flex items-center text-sm px-5 font-bold"
                                    >
                                        Let's Talk Business
                                    </Button>
                                </a>
                            </div>
                        </figure>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.figure
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden lg:hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-4">
                                        {navLinks.map((link) => (
                                            <a key={link.href} href={link.href}>
                                                {link.label}
                                            </a>
                                        ))}
                                        <a href="#contact" className="w-3/4">
                                            <Button
                                                className="w-full font-bold"
                                                variant="primary"
                                            >
                                                Let's Talk Business
                                            </Button>
                                        </a>
                                    </div>
                                </motion.figure>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className="pb-[86px] md:pb-[98px]"></div>
        </>
    );
}
