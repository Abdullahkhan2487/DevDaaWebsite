"use client";

import { motion } from "framer-motion";
import {
    ArrowLeft,
    Linkedin,
    Mail,
    Github,
    Server,
    Shield,
    Cpu,
    Database,
    GitBranch,
    Terminal,
    Award,
    TrendingUp,
    Users,
    Rocket,
    Code,
    Cloud,
} from "lucide-react";
import Button from "@/components/Button";
import Tag from "@/components/Tag";
import Link from "next/link";
import Image from "next/image";
import hamzaImage from "@/assets/images/Hamza.webp";

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
        icon: <Cpu className="size-5" />,
        title: "Architecture Expert",
        description: "Designed scalable system architectures for enterprise-grade applications",
        metric: "30+",
        metricLabel: "Systems Architected",
    },
    {
        icon: <TrendingUp className="size-5" />,
        title: "Technical Vision",
        description: "Drove technology strategy and roadmap across multiple product lines",
        metric: "99.9%",
        metricLabel: "System Uptime",
    },
    {
        icon: <Users className="size-5" />,
        title: "Team Builder",
        description: "Scaled engineering teams and established best development practices",
        metric: "40+",
        metricLabel: "Developers Led",
    },
    {
        icon: <Shield className="size-5" />,
        title: "Security Champion",
        description: "Implemented zero-trust security architectures for critical systems",
        metric: "100%",
        metricLabel: "Compliance Rate",
    },
];

const projects = [
    {
        name: "Microservices Migration",
        category: "Architecture",
        impact: "Reduced latency by 65% with distributed systems",
        tech: ["Go", "gRPC", "Kubernetes", "Kafka"],
        icon: <Server className="size-5" />,
    },
    {
        name: "CI/CD Platform",
        category: "DevOps",
        impact: "Deployment frequency increased from weekly to hourly",
        tech: ["GitHub Actions", "Docker", "Terraform", "AWS"],
        icon: <GitBranch className="size-5" />,
    },
    {
        name: "AI Model Serving Infrastructure",
        category: "MLOps",
        impact: "Serving 50M+ predictions daily with <100ms latency",
        tech: ["Python", "FastAPI", "Redis", "ONNX"],
        icon: <Cpu className="size-5" />,
    },
    {
        name: "Data Lake Architecture",
        category: "Data Engineering",
        impact: "Unified analytics across 20+ data sources",
        tech: ["Spark", "Airflow", "S3", "Snowflake"],
        icon: <Database className="size-5" />,
    },
];

const skills = [
    "System Architecture", "Cloud Infrastructure", "DevOps/SRE",
    "Go/Rust", "Python", "TypeScript",
    "Kubernetes/Docker", "AWS/GCP/Azure", "CI/CD Pipelines",
    "PostgreSQL/Redis", "gRPC/GraphQL", "Security & Compliance",
];

const timeline = [
    {
        year: "2024–Present",
        role: "CTO & Co Founder",
        company: "DevDaa",
        achievements: [
            "Defined technical vision and architecture for all products",
            "Built and scaled engineering team from ground up",
            "Established DevOps culture with automated deployments",
        ],
    },
    {
        year: "2022–2024",
        role: "Senior Systems Architect",
        company: "DevDaa",
        achievements: [
            "Designed cloud-native architectures handling 10M+ requests/day",
            "Reduced infrastructure costs by 45% through optimization",
            "Led migration from monolith to microservices architecture",
        ],
    },
    {
        year: "2020–2022",
        role: "Backend Engineer",
        company: "CloudScale Solutions",
        achievements: [
            "Built high-throughput APIs processing 5K+ requests/second",
            "Implemented event-driven architecture with Kafka",
            "Achieved 99.99% uptime for mission-critical systems",
        ],
    },
];

// Optimized orb particles for background
const orbParticles = [
    { color: "from-purple-500 to-violet-500", startPos: { top: "15%", left: "15%" }, endPos: { top: "75%", left: "75%" }, duration: 24 },
    { color: "from-blue-500 to-purple-500", startPos: { top: "65%", left: "75%" }, endPos: { top: "25%", left: "15%" }, duration: 26 },
    { color: "from-violet-500 to-cyan-500", startPos: { top: "45%", left: "85%" }, endPos: { top: "85%", left: "25%" }, duration: 23 },
];

export default function HamzaPage() {
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
                        className="flex items-center gap-2 text-white/60 hover:text-purple-400 transition-colors bg-neutral-900/80 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
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
                                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-purple-400 to-violet-500 p-[3px]">
                                    <div className="w-full h-full rounded-full overflow-hidden">
                                        <Image
                                            src={hamzaImage}
                                            alt="Hamza Naveed"
                                            className="w-full h-full object-cover scale-110"
                                            priority
                                        />
                                    </div>
                                </div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.5, type: "spring" }}
                                    className="absolute -bottom-1 -right-1 bg-purple-400 text-neutral-950 rounded-full px-3 py-1 text-xs font-bold"
                                >
                                    CTO
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div custom={1} variants={fadeUp} className="mb-4">
                            <Tag className="border-purple-400 text-purple-400">Co Founder & CTO</Tag>
                        </motion.div>

                        <motion.h1 custom={2} variants={fadeUp} className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 tracking-tight">
                            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-300 bg-clip-text text-transparent">
                                HAMZA N.
                            </span>
                        </motion.h1>

                        <motion.p custom={3} variants={fadeUp} className="text-xl md:text-3xl text-white/50 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                            Engineering robust infrastructure
                            <br />
                            <span className="text-purple-400">that powers innovation</span>
                        </motion.p>

                        <motion.div custom={4} variants={fadeUp} className="flex flex-wrap gap-3 justify-center">
                            <a href="mailto:hamza.naveed@devdaa.com">
                                <Button variant="primary" size="sm" className="inline-flex items-center gap-2 font-bold bg-purple-400 border-purple-400 text-neutral-950">
                                    <Mail className="size-4" /> Get in Touch
                                </Button>
                            </a>
                            <a href="https://www.linkedin.com/in/hamza-naveed-4a743b388/" target="_blank" rel="noopener noreferrer">
                                <Button variant="secondary" size="sm" className="inline-flex items-center gap-2">
                                    <Linkedin className="size-4" /> LinkedIn
                                </Button>
                            </a>
                            <a href="https://github.com/xuwid" target="_blank" rel="noopener noreferrer">
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
                        <Tag className="border-purple-400 text-purple-400">Achievements</Tag>
                        <h2 className="text-3xl md:text-5xl font-bold mt-6">
                            Engineering <span className="text-purple-400">Excellence</span>
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
                                className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-purple-500/20 rounded-3xl p-8 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-500"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-purple-500/10 text-purple-400 p-2 rounded-lg">{item.icon}</div>
                                        <h3 className="font-bold text-lg">{item.title}</h3>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-purple-400">{item.metric}</div>
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
                        <Tag className="border-purple-400 text-purple-400">Experience</Tag>
                        <h2 className="text-3xl md:text-5xl font-bold mt-6">
                            Career <span className="text-purple-400">Journey</span>
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
                                className="relative pl-8 border-l-2 border-white/10 hover:border-purple-500/50 transition-colors duration-300"
                            >
                                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-purple-400 border-4 border-neutral-950" />
                                <div className="text-sm text-purple-400 font-mono mb-1">{entry.year}</div>
                                <h3 className="text-xl font-bold">{entry.role}</h3>
                                <p className="text-white/50 text-sm mb-3">{entry.company}</p>
                                <ul className="space-y-1">
                                    {entry.achievements.map((a, j) => (
                                        <li key={j} className="text-white/60 text-sm flex items-start gap-2">
                                            <span className="text-purple-400 mt-1.5 shrink-0">•</span>{a}
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
                        <Tag className="border-purple-400 text-purple-400">Projects</Tag>
                        <h2 className="text-3xl md:text-5xl font-bold mt-6">
                            Featured <span className="text-purple-400">Work</span>
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
                                className="bg-neutral-900 border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-colors duration-300 group"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="text-purple-400">{project.icon}</div>
                                    <span className="text-xs text-purple-400 font-mono bg-purple-500/10 px-2 py-0.5 rounded-full">{project.category}</span>
                                </div>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">{project.name}</h3>
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
                        <Tag className="border-purple-400 text-purple-400">Skills</Tag>
                        <h2 className="text-3xl md:text-5xl font-bold mt-6">
                            Technical <span className="text-purple-400">Expertise</span>
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
                                className="bg-neutral-900 border border-white/10 px-4 py-2 rounded-full text-sm hover:border-purple-400/40 hover:text-purple-400 transition-colors duration-300"
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
                            Let&apos;s Architect the <span className="text-purple-400">Future</span>
                        </h2>
                        <p className="text-white/50 mb-8">Ready to build robust, scalable systems? Let&apos;s connect.</p>
                        <div className="flex justify-center gap-4">
                            <a href="mailto:hamza.naveed@devdaa.com">
                                <Button variant="primary" className="font-bold bg-purple-400 border-purple-400 text-neutral-950">Contact Me</Button>
                            </a>
                            <Link href="/">
                                <Button variant="secondary">Back to DevDaa</Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
