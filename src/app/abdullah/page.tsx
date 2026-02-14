"use client";

import { motion } from "framer-motion";
import {
    ArrowLeft,
    Linkedin,
    Mail,
    Github,
    TrendingUp,
    Users,
    Rocket,
    Lightbulb,
    Target,
    Sparkles,
    Award,
} from "lucide-react";
import Button from "@/components/Button";
import Tag from "@/components/Tag";
import Link from "next/link";
import Image from "next/image";
import abdullahImage from "@/assets/images/abdullah.webp";
import Footer from "@/sections/Footer";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
    }),
};

const achievements = [
    {
        icon: <Rocket className="size-5" />,
        title: "Innovation Leader",
        description: "Architected 20+ cutting-edge AI/ML solutions transforming industries",
        metric: "98%",
        metricLabel: "Client Satisfaction",
    },
    {
        icon: <TrendingUp className="size-5" />,
        title: "Business Growth",
        description: "Drove exponential company growth and market expansion globally",
        metric: "300%",
        metricLabel: "Revenue Growth",
    },
    {
        icon: <Users className="size-5" />,
        title: "Visionary Leader",
        description: "Built, mentored, and scaled high-performance technical teams",
        metric: "50+",
        metricLabel: "Engineers Mentored",
    },
    {
        icon: <Award className="size-5" />,
        title: "Industry Recognition",
        description: "Pioneering AI solutions featured in premier tech publications",
        metric: "15+",
        metricLabel: "Awards & Publications",
    },
];

const projects = [
    {
        name: "Enterprise AI Assistant",
        category: "AI/ML",
        impact: "40% increase in customer support efficiency",
        tech: ["Python", "TensorFlow", "FastAPI", "React"],
        icon: <Sparkles className="size-5" />,
    },
    {
        name: "Predictive Analytics Platform",
        category: "Data Science",
        impact: "Reduced operational costs by $2M annually",
        tech: ["PyTorch", "PostgreSQL", "Docker", "AWS"],
        icon: <Target className="size-5" />,
    },
    {
        name: "Blockchain Supply Chain",
        category: "Web3",
        impact: "Improved transparency for 500+ suppliers",
        tech: ["Ethereum", "Solidity", "Next.js", "MongoDB"],
        icon: <Rocket className="size-5" />,
    },
    {
        name: "Real-time Analytics Dashboard",
        category: "Full Stack",
        impact: "Processing 1M+ events per second",
        tech: ["React", "Node.js", "Redis", "Kubernetes"],
        icon: <Lightbulb className="size-5" />,
    },
];

const skills = [
    "Artificial Intelligence", "Machine Learning", "Deep Learning",
    "Python", "JavaScript/TypeScript", "React/Next.js",
    "Node.js", "AWS/Azure/GCP", "Docker/Kubernetes",
    "PostgreSQL/MongoDB", "FastAPI/Flask", "TensorFlow/PyTorch",
];

const timeline = [
    {
        year: "2024–Present",
        role: "CEO & Founder",
        company: "DevDaa",
        achievements: [
            "Led digital transformation for Fortune 500 clients",
            "Architected scalable AI infrastructure serving 10M+ users",
            "Established DevDaa as a leader in AI innovation",
        ],
    },
    {
        year: "2022–2024",
        role: "Lead AI Engineer",
        company: "DevDaa",
        achievements: [
            "Developed proprietary ML models with 95%+ accuracy",
            "Reduced model training time by 60% through optimization",
            "Published research on cutting-edge AI techniques",
        ],
    },
    {
        year: "2020–2022",
        role: "Senior Full Stack Developer",
        company: "Tech Innovations Inc.",
        achievements: [
            "Built enterprise applications serving 100K+ users",
            "Implemented CI/CD pipelines reducing deployment time by 70%",
            "Mentored junior developers in best practices",
        ],
    },
];

// Optimized orb particles for background
const orbParticles = [
    { color: "from-teal-500 to-cyan-500", startPos: { top: "20%", left: "10%" }, endPos: { top: "70%", left: "80%" }, duration: 22 },
    { color: "from-cyan-500 to-blue-500", startPos: { top: "60%", left: "70%" }, endPos: { top: "20%", left: "20%" }, duration: 28 },
    { color: "from-blue-500 to-teal-500", startPos: { top: "40%", left: "80%" }, endPos: { top: "80%", left: "30%" }, duration: 25 },
];

export default function AbdullahPage() {
    return (
        <main className="bg-neutral-950 text-white min-h-screen relative overflow-hidden">
            {/* Animated Background Orbs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
                {orbParticles.map((orb, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-[600px] h-[600px] rounded-full blur-xl opacity-20 bg-gradient-to-r ${orb.color}`}
                        style={{ willChange: "transform, opacity" }}
                        initial={{
                            top: orb.startPos.top,
                            left: orb.startPos.left,
                        }}
                        animate={{
                            top: [orb.startPos.top, orb.endPos.top, orb.startPos.top],
                            left: [orb.startPos.left, orb.endPos.left, orb.startPos.left],
                            scale: [1, 1.3, 1],
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

            {/* Back Navigation */}
            <div className="fixed top-6 left-6 z-50">
                <Link href="/">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 text-white/60 hover:text-teal-400 transition-colors bg-neutral-900/80 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
                    >
                        <ArrowLeft className="size-4" />
                        <span className="text-sm font-medium">Back</span>
                    </motion.div>
                </Link>
            </div>

            {/* ===== HERO ===== */}
            <section className="min-h-screen flex items-center justify-center py-24 md:py-32 relative">
                <div className="container relative z-10 max-w-5xl mx-auto">
                    <motion.div initial="hidden" animate="visible" className="text-center">
                        {/* Profile Image */}
                        <motion.div custom={0} variants={fadeUp} className="mb-8 flex justify-center">
                            <div className="relative">
                                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 p-[3px]">
                                    <div className="w-full h-full rounded-full overflow-hidden">
                                        <Image
                                            src={abdullahImage}
                                            alt="Abdullah Khan"
                                            className="w-full h-full object-cover scale-110"
                                            priority
                                        />
                                    </div>
                                </div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.5, type: "spring" }}
                                    className="absolute -bottom-1 -right-1 bg-teal-400 text-neutral-950 rounded-full px-3 py-1 text-xs font-bold"
                                >
                                    CEO
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div custom={1} variants={fadeUp} className="mb-4">
                            <Tag>Founder & CEO</Tag>
                        </motion.div>

                        <motion.h1 custom={2} variants={fadeUp} className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 tracking-tight">
                            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
                                ABDULLAH K.
                            </span>
                        </motion.h1>

                        <motion.p custom={3} variants={fadeUp} className="text-xl md:text-3xl text-white/50 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                            Building next-generation AI solutions
                            <br />
                            <span className="text-teal-400">that reshape industries</span>
                        </motion.p>

                        <motion.div custom={4} variants={fadeUp} className="flex flex-wrap gap-3 justify-center">
                            <a href="mailto:abdullah.khan@devdaa.com">
                                <Button variant="primary" size="sm" className="inline-flex items-center gap-2 font-bold">
                                    <Mail className="size-4" /> Get in Touch
                                </Button>
                            </a>
                            <a href="https://www.linkedin.com/in/mabdullahknuces/" target="_blank" rel="noopener noreferrer">
                                <Button variant="secondary" size="sm" className="inline-flex items-center gap-2">
                                    <Linkedin className="size-4" /> LinkedIn
                                </Button>
                            </a>
                            <a href="https://github.com/Abdullahkhan2487" target="_blank" rel="noopener noreferrer">
                                <Button variant="secondary" size="sm" className="inline-flex items-center gap-2">
                                    <Github className="size-4" /> GitHub
                                </Button>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ===== ACHIEVEMENTS ===== */}
            <section className="py-20">
                <div className="container max-w-5xl mx-auto">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
                        <Tag>Achievements</Tag>
                        <h2 className="text-3xl md:text-5xl font-bold mt-6">
                            Track Record of <span className="text-teal-400">Excellence</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {achievements.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-teal-500/20 rounded-3xl p-8 hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-500"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-teal-500/10 text-teal-400 p-2 rounded-lg">{item.icon}</div>
                                        <h3 className="font-bold text-lg">{item.title}</h3>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-teal-400">{item.metric}</div>
                                        <div className="text-xs text-white/40">{item.metricLabel}</div>
                                    </div>
                                </div>
                                <p className="text-white/60 text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== EXPERIENCE ===== */}
            <section className="py-20">
                <div className="container max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
                        <Tag>Experience</Tag>
                        <h2 className="text-3xl md:text-5xl font-bold mt-6">
                            Career <span className="text-teal-400">Journey</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-8">
                        {timeline.map((entry, i) => (
                            <motion.div
                                key={entry.year}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="relative pl-8 border-l-2 border-white/10 hover:border-teal-500/50 transition-colors duration-300"
                            >
                                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-teal-400 border-4 border-neutral-950" />
                                <div className="text-sm text-teal-400 font-mono mb-1">{entry.year}</div>
                                <h3 className="text-xl font-bold">{entry.role}</h3>
                                <p className="text-white/50 text-sm mb-3">{entry.company}</p>
                                <ul className="space-y-1">
                                    {entry.achievements.map((a, j) => (
                                        <li key={j} className="text-white/60 text-sm flex items-start gap-2">
                                            <span className="text-teal-400 mt-1.5 shrink-0">•</span>{a}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PROJECTS ===== */}
            <section className="py-20">
                <div className="container max-w-5xl mx-auto">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
                        <Tag>Projects</Tag>
                        <h2 className="text-3xl md:text-5xl font-bold mt-6">
                            Featured <span className="text-teal-400">Work</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project, i) => (
                            <motion.div
                                key={project.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-neutral-900 border border-white/10 rounded-2xl p-6 hover:border-teal-500/30 transition-colors duration-300 group"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="text-teal-400">{project.icon}</div>
                                    <span className="text-xs text-teal-400 font-mono bg-teal-500/10 px-2 py-0.5 rounded-full">{project.category}</span>
                                </div>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-teal-400 transition-colors">{project.name}</h3>
                                <p className="text-white/50 text-sm mb-4">{project.impact}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs bg-white/5 text-white/50 px-2 py-1 rounded-md">{t}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SKILLS ===== */}
            <section className="py-20">
                <div className="container max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
                        <Tag>Skills</Tag>
                        <h2 className="text-3xl md:text-5xl font-bold mt-6">
                            Technical <span className="text-teal-400">Expertise</span>
                        </h2>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-3">
                        {skills.map((skill, i) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-neutral-900 border border-white/10 px-4 py-2 rounded-full text-sm hover:border-teal-400/40 hover:text-teal-400 transition-colors duration-300"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ===== FOOTER CTA ===== */}
            <section className="py-20 border-t border-white/5">
                <div className="container max-w-3xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Let&apos;s Build Something <span className="text-teal-400">Extraordinary</span>
                        </h2>
                        <p className="text-white/50 mb-8">Ready to transform your ideas into intelligent solutions? Get in touch.</p>
                        <div className="flex justify-center gap-4">
                            <a href="mailto:abdullah.khan@devdaa.com">
                                <Button variant="primary" className="font-bold bg-teal-400 border-teal-400 text-neutral-950">Contact Me</Button>
                            </a>
                            <Link href="/">
                                <Button variant="secondary">Back to DevDaa</Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
}
