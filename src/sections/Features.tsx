"use client";

import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import { motion } from "framer-motion";
import { Brain, Code2, Cloud, Sparkles, TrendingUp, Cpu } from "lucide-react";

const services = [
    "Machine Learning",
    "Data Analytics",
    "Web Development",
    "Mobile Apps",
    "AI Consulting",
    "Cloud Solutions",
    "Blockchain",
];

const parentVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.7,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function Services() {
    return (
        <section id="Services" className="py-24 ">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Services</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl m-auto">
                    Empowering innovation with{" "}
                    <span className="text-teal-500">AI & Technology</span>
                </h2>
                <motion.div
                    variants={parentVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <FeatureCard
                                title="AI Solutions"
                                description="Transform your business with intelligent automation and machine learning models"
                                className="md:col-span-2 lg:col-span-1 group"
                            >
                                <div className="aspect-video flex items-center justify-center relative overflow-hidden">
                                    {/* Removed heavy rotating blur gradient for better performance */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-purple-500/10 rounded-full" />
                                    <Brain
                                        className="text-teal-500 group-hover:scale-110 transition-transform duration-500 z-10"
                                        size={80}
                                        strokeWidth={1.5}
                                    />
                                    <Sparkles
                                        className="absolute top-4 right-4 text-purple-400 group-hover:rotate-12 transition-transform"
                                        size={24}
                                    />
                                    <Cpu
                                        className="absolute bottom-4 left-4 text-blue-400 group-hover:-rotate-12 transition-transform"
                                        size={24}
                                    />
                                </div>
                            </FeatureCard>
                        </motion.div>

                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <FeatureCard
                                title="Custom Software Development"
                                description="Tailored solutions designed to meet your unique business requirements"
                                className="md:col-span-2 lg:col-span-1 group transition duration-500"
                            >
                                <div className="aspect-video flex items-center justify-center relative">
                                    <motion.div
                                        className="absolute inset-0 flex items-center justify-center"
                                        animate={{
                                            scale: [1, 1.05, 1],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <Code2
                                            className="text-teal-500/30"
                                            size={120}
                                            strokeWidth={1}
                                        />
                                    </motion.div>
                                    <motion.div
                                        animate={{
                                            y: [0, -10, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <Code2
                                            className="text-teal-500 group-hover:text-purple-400 transition-colors duration-500"
                                            size={60}
                                            strokeWidth={1.5}
                                        />
                                    </motion.div>
                                    <TrendingUp
                                        className="absolute top-6 right-6 text-green-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                                        size={20}
                                    />
                                </div>
                            </FeatureCard>
                        </motion.div>

                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <FeatureCard
                                title="Cloud & DevOps"
                                description="Scalable infrastructure and seamless deployment solutions"
                                className="group md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
                            >
                                <div className="aspect-video flex justify-center items-center relative">
                                    <motion.div
                                        animate={{
                                            y: [0, -15, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="absolute"
                                    >
                                        <Cloud
                                            className="text-teal-500/40"
                                            size={100}
                                            strokeWidth={1}
                                        />
                                    </motion.div>
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            opacity: [0.5, 1, 0.5],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <Cloud
                                            className="text-teal-500"
                                            size={60}
                                            strokeWidth={1.5}
                                        />
                                    </motion.div>
                                    <motion.div
                                        className="absolute bottom-8"
                                        animate={{
                                            y: [0, -5, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 0.5,
                                        }}
                                    >
                                        <div className="flex gap-2">
                                            <div className="w-2 h-2 rounded-full bg-green-400 group-hover:bg-teal-500 transition-colors" />
                                            <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:bg-teal-500 transition-colors" />
                                            <div className="w-2 h-2 rounded-full bg-purple-400 group-hover:bg-teal-500 transition-colors" />
                                        </div>
                                    </motion.div>
                                </div>
                            </FeatureCard>
                        </motion.div>
                    </div>
                </motion.div>

                <div className="my-8 flex items-center justify-center flex-wrap gap-2 max-w-3xl m-auto">
                    {services.map((service) => (
                        <div
                            className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 md:py-2 py-1.5 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group"
                            key={service}
                        >
                            <span className="bg-teal-500 text-neutral-900 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                                &#10038;
                            </span>
                            <span className="font-medium md:text-lg">
                                {service}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
