"use client";

import { motion } from "framer-motion";
import {
    Award,
    Briefcase,
    Code,
    GraduationCap,
    Linkedin,
    Mail,
    Github,
    Star,
    TrendingUp,
    Users,
    Zap,
    Calendar,
    Cpu,
    Database,
    Globe,
    Sparkles,
    Rocket,
    Lightbulb,
    Target,
    Heart,
} from "lucide-react";
import Button from "@/components/Button";
import Tag from "@/components/Tag";
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

// Floating tech icons data with enhanced animation
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

const achievements = [
    {
        icon: <Rocket className="size-6" />,
        title: "Innovation Leader",
        description:
            "Architected 20+ cutting-edge AI/ML solutions transforming industries",
        metric: "98%",
        metricLabel: "Client Satisfaction",
    },
    {
        icon: <TrendingUp className="size-6" />,
        title: "Business Growth",
        description:
            "Drove exponential company growth and market expansion globally",
        metric: "300%",
        metricLabel: "Revenue Growth",
    },
    {
        icon: <Users className="size-6" />,
        title: "Visionary Leader",
        description:
            "Built, mentored, and scaled high-performance technical teams",
        metric: "50+",
        metricLabel: "Engineers Mentored",
    },
    {
        icon: <Award className="size-6" />,
        title: "Industry Recognition",
        description:
            "Pioneering AI solutions featured in premier tech publications",
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
        icon: <Sparkles className="size-6" />,
    },
    {
        name: "Predictive Analytics Platform",
        category: "Data Science",
        impact: "Reduced operational costs by $2M annually",
        tech: ["PyTorch", "PostgreSQL", "Docker", "AWS"],
        icon: <Target className="size-6" />,
    },
    {
        name: "Blockchain Supply Chain",
        category: "Web3",
        impact: "Improved transparency for 500+ suppliers",
        tech: ["Ethereum", "Solidity", "Next.js", "MongoDB"],
        icon: <Rocket className="size-6" />,
    },
    {
        name: "Real-time Analytics Dashboard",
        category: "Full Stack",
        impact: "Processing 1M+ events per second",
        tech: ["React", "Node.js", "Redis", "Kubernetes"],
        icon: <Lightbulb className="size-6" />,
    },
];

const skills = [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Python",
    "JavaScript/TypeScript",
    "React/Next.js",
    "Node.js",
    "AWS/Azure/GCP",
    "Docker/Kubernetes",
    "PostgreSQL/MongoDB",
    "FastAPI/Flask",
    "TensorFlow/PyTorch",
];

const timeline = [
    {
        year: "2024-Present",
        role: "Chief Technology Officer",
        company: "DevDaa",
        achievements: [
            "Led digital transformation for Fortune 500 clients",
            "Architected scalable AI infrastructure serving 10M+ users",
            "Established DevDaa as a leader in AI innovation",
        ],
    },
    {
        year: "2022-2024",
        role: "Lead AI Engineer",
        company: "DevDaa",
        achievements: [
            "Developed proprietary ML models with 95%+ accuracy",
            "Reduced model training time by 60% through optimization",
            "Published research on cutting-edge AI techniques",
        ],
    },
    {
        year: "2020-2022",
        role: "Senior Full Stack Developer",
        company: "Tech Innovations Inc.",
        achievements: [
            "Built enterprise applications serving 100K+ users",
            "Implemented CI/CD pipelines reducing deployment time by 70%",
            "Mentored junior developers in best practices",
        ],
    },
];

export default function AbdullahPage() {
    return (
        <main className="bg-neutral-950 text-white overflow-hidden relative">
            {/* ===== HERO SECTION ===== */}
            <section className="min-h-screen flex items-center justify-center py-24 md:py-32 overflow-hidden relative">
                {/* Multi-layer animated background */}
                <motion.div
                    className="absolute inset-0 opacity-40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
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

                {/* Floating icons with complex animations */}
                {floatingIcons.map((item, index) => (
                    <motion.div
                        key={index}
                        className="absolute hidden lg:block"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: -100,
                            opacity: 0,
                            scale: 0,
                        }}
                        animate={{
                            y: [0, window.innerHeight + 100],
                            x: Math.sin(index) * 200 + window.innerWidth / 2,
                            opacity: [0, 0.7, 0],
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

                {/* Particle system */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {Array.from({ length: 50 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full"
                            initial={{
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
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

                {/* Main content */}
                <div className="container relative z-10 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center"
                    >
                        {/* Animated badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            whileHover={{ scale: 1.1 }}
                            className="inline-block mb-8"
                        >
                            <Tag>🚀 Visionary Tech Leader</Tag>
                        </motion.div>

                        {/* Main heading with gradient and animation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4">
                                <motion.span
                                    className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                                    animate={{
                                        backgroundPosition: [
                                            "0% 50%",
                                            "100% 50%",
                                            "0% 50%",
                                        ],
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                    }}
                                    style={{
                                        backgroundSize: "200% 200%",
                                    }}
                                >
                                    Abdullah
                                </motion.span>
                            </h1>
                        </motion.div>

                        {/* Animated subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-2xl md:text-4xl font-bold mb-6 text-white"
                        >
                            Transforming Ideas Into{" "}
                            <motion.span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
                                animate={{
                                    textShadow: [
                                        "0 0 20px rgba(34, 197, 94, 0.5)",
                                        "0 0 40px rgba(34, 197, 94, 0.8)",
                                        "0 0 20px rgba(34, 197, 94, 0.5)",
                                    ],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                }}
                            >
                                Intelligence
                            </motion.span>
                        </motion.p>

                        {/* Animated description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed"
                        >
                            CTO & AI Architect | Building next-generation AI
                            solutions that reshape industries | 10+ years of
                            innovation excellence
                        </motion.p>

                        {/* Animated buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-wrap gap-4 justify-center"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a href="mailto:abdullah@devdaa.com">
                                    <Button
                                        variant="primary"
                                        className="gap-2 px-8 py-4 text-lg"
                                    >
                                        <Mail className="size-6" />
                                        Let's Connect
                                    </Button>
                                </a>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a
                                    href="https://linkedin.com/in/abdullah"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        variant="secondary"
                                        className="gap-2 px-8 py-4 text-lg"
                                    >
                                        <Linkedin className="size-6" />
                                        LinkedIn Profile
                                    </Button>
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* Scroll indicator */}
                        <motion.div
                            className="mt-16"
                            animate={{ y: [0, 10, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                        >
                            <p className="text-white/50 mb-2">
                                Scroll to explore
                            </p>
                            <motion.svg
                                className="w-6 h-6 mx-auto text-white/50"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                            </motion.svg>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ===== STATS SECTION ===== */}
            <section className="py-20 relative overflow-hidden bg-neutral-900/30">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {[
                            { number: "20+", label: "AI/ML Projects" },
                            { number: "10M+", label: "Users Impacted" },
                            { number: "50+", label: "Engineers Mentored" },
                            { number: "98%", label: "Client Satisfaction" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <motion.div
                                    className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                    }}
                                >
                                    {stat.number}
                                </motion.div>
                                <p className="text-white/60 mt-2">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ===== ACHIEVEMENTS SECTION ===== */}
            <section className="py-24 relative overflow-hidden">
                <motion.div
                    className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                    }}
                />

                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <Tag>Highlights</Tag>
                        <h2 className="text-5xl md:text-7xl font-bold mt-6">
                            Key{" "}
                            <motion.span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
                                animate={{
                                    filter: [
                                        "brightness(1)",
                                        "brightness(1.3)",
                                        "brightness(1)",
                                    ],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                }}
                            >
                                Achievements
                            </motion.span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                    rotate: -5,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    rotate: 0,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.12,
                                    duration: 0.6,
                                }}
                                whileHover={{
                                    y: -15,
                                    scale: 1.02,
                                }}
                                className="group relative"
                            >
                                {/* Animated gradient border */}
                                <motion.div
                                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ padding: "2px" }}
                                    animate={{
                                        backgroundPosition: [
                                            "0% 50%",
                                            "100% 50%",
                                        ],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                    }}
                                />

                                <div className="relative bg-neutral-900 rounded-3xl p-8 h-full">
                                    {/* Floating particles in card */}
                                    <motion.div
                                        className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100"
                                        animate={{
                                            scale: [1, 1.5, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                        }}
                                    />

                                    <motion.div
                                        className="bg-gradient-to-br from-cyan-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10 text-white group-hover:shadow-2xl group-hover:shadow-cyan-500/50"
                                        whileHover={{
                                            rotate: 360,
                                            scale: 1.1,
                                        }}
                                        transition={{
                                            duration: 0.6,
                                        }}
                                    >
                                        {achievement.icon}
                                    </motion.div>

                                    <h3 className="text-2xl font-bold mb-2 relative z-10">
                                        {achievement.title}
                                    </h3>

                                    <p className="text-white/70 mb-6 relative z-10">
                                        {achievement.description}
                                    </p>

                                    <div className="flex items-end justify-between relative z-10">
                                        <div>
                                            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                                                {achievement.metric}
                                            </p>
                                            <p className="text-white/50 text-sm">
                                                {achievement.metricLabel}
                                            </p>
                                        </div>
                                        <motion.div
                                            animate={{
                                                rotate: [0, 20, 0],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                            }}
                                        >
                                            <Sparkles className="text-yellow-400 size-6" />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SKILLS SECTION ===== */}
            <section className="py-24 bg-neutral-900/50 relative overflow-hidden">
                <motion.div
                    className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                    }}
                />

                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <Tag>Expertise</Tag>
                        <h2 className="text-5xl md:text-7xl font-bold mt-6">
                            Technical{" "}
                            <motion.span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
                                animate={{
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            >
                                Mastery
                            </motion.span>
                        </h2>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            className="flex flex-wrap gap-3 justify-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            {skills.map((skill, idx) => (
                                <motion.div
                                    key={skill}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.5,
                                        y: 20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        scale: 1,
                                        y: 0,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: idx * 0.05,
                                        duration: 0.5,
                                    }}
                                    whileHover={{
                                        scale: 1.15,
                                        y: -10,
                                        boxShadow:
                                            "0 20px 40px rgba(34, 197, 94, 0.3)",
                                    }}
                                    className="relative group"
                                >
                                    <motion.div
                                        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 blur transition-opacity"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: idx * 0.1,
                                        }}
                                    />
                                    <div className="relative bg-neutral-950 rounded-full px-6 py-3 border border-cyan-500/30 group-hover:border-cyan-500 transition-colors">
                                        <span className="text-sm font-semibold text-cyan-400">
                                            {skill}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== PROJECTS SECTION ===== */}
            <section className="py-24 relative overflow-hidden">
                {/* Animated background blobs */}
                <motion.div
                    className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                    }}
                />

                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <Tag>Portfolio</Tag>
                        <h2 className="text-5xl md:text-7xl font-bold mt-6">
                            Transformative{" "}
                            <motion.span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500"
                                animate={{
                                    x: [0, 10, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            >
                                Projects
                            </motion.span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                    rotateY: -20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    rotateY: 0,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.15,
                                    duration: 0.7,
                                }}
                                whileHover={{
                                    y: -20,
                                    scale: 1.03,
                                }}
                                className="group relative"
                            >
                                {/* Animated gradient frame */}
                                <motion.div
                                    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 p-0.5 transition-opacity"
                                    style={{}}
                                    animate={{
                                        backgroundPosition: [
                                            "0% 0%",
                                            "100% 100%",
                                        ],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                    }}
                                />

                                <div className="relative bg-neutral-900 rounded-3xl p-8 h-full overflow-hidden">
                                    {/* Floating background effect */}
                                    <motion.div
                                        className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.3, 0.6, 0.3],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                        }}
                                    />

                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between mb-6">
                                            <motion.div
                                                className="bg-gradient-to-br from-cyan-500 to-blue-500 p-4 rounded-2xl text-white group-hover:shadow-2xl group-hover:shadow-cyan-500/50"
                                                animate={{
                                                    rotate: [0, 5, -5, 0],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                }}
                                            >
                                                {project.icon}
                                            </motion.div>
                                            <motion.span
                                                className="bg-teal-500/20 text-teal-300 px-4 py-2 rounded-full text-sm font-semibold"
                                                whileHover={{
                                                    scale: 1.1,
                                                    backgroundColor:
                                                        "rgba(20, 184, 166, 0.4)",
                                                }}
                                            >
                                                {project.category}
                                            </motion.span>
                                        </div>

                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                                            {project.name}
                                        </h3>

                                        <p className="text-white/70 mb-6 flex items-center gap-2">
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                }}
                                            >
                                                <TrendingUp className="size-5 text-green-400" />
                                            </motion.div>
                                            {project.impact}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map(
                                                (tech, techIdx) => (
                                                    <motion.span
                                                        key={tech}
                                                        initial={{
                                                            opacity: 0,
                                                            x: -10,
                                                        }}
                                                        whileInView={{
                                                            opacity: 1,
                                                            x: 0,
                                                        }}
                                                        viewport={{
                                                            once: true,
                                                        }}
                                                        transition={{
                                                            delay:
                                                                techIdx * 0.05,
                                                        }}
                                                        whileHover={{
                                                            scale: 1.15,
                                                            backgroundColor:
                                                                "rgba(34, 197, 94, 0.3)",
                                                        }}
                                                        className="bg-neutral-800/50 border border-cyan-500/30 text-cyan-300 px-3 py-1.5 rounded-lg text-xs font-semibold hover:border-cyan-500 transition-all cursor-pointer"
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TIMELINE SECTION ===== */}
            <section className="py-24 bg-neutral-900/50 relative overflow-hidden">
                <motion.div
                    className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                    }}
                />

                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <Tag>Career Path</Tag>
                        <h2 className="text-5xl md:text-7xl font-bold mt-6">
                            My{" "}
                            <motion.span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500"
                                animate={{
                                    filter: [
                                        "drop-shadow(0 0 0px rgba(20, 184, 166, 0))",
                                        "drop-shadow(0 0 20px rgba(20, 184, 166, 0.5))",
                                        "drop-shadow(0 0 0px rgba(20, 184, 166, 0))",
                                    ],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                }}
                            >
                                Journey
                            </motion.span>
                        </h2>
                    </motion.div>

                    <div className="max-w-5xl mx-auto">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? -50 : 50,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.2,
                                    duration: 0.7,
                                }}
                                className="relative mb-12 last:mb-0"
                            >
                                <div className="flex items-center mb-6">
                                    {/* Timeline dot with glow */}
                                    <motion.div className="relative z-10">
                                        <motion.div
                                            className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 ring-4 ring-neutral-950 relative"
                                            whileHover={{
                                                scale: 1.3,
                                                boxShadow:
                                                    "0 0 30px rgba(34, 197, 94, 0.8)",
                                            }}
                                            animate={{
                                                boxShadow: [
                                                    "0 0 0 0 rgba(34, 197, 94, 0.4)",
                                                    "0 0 0 15px rgba(34, 197, 94, 0)",
                                                ],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                            }}
                                        />
                                    </motion.div>

                                    {/* Timeline connector line */}
                                    {index < timeline.length - 1 && (
                                        <motion.div
                                            className="absolute left-3 top-6 w-0.5 h-32 bg-gradient-to-b from-cyan-500/50 to-transparent"
                                            initial={{
                                                scaleY: 0,
                                            }}
                                            whileInView={{
                                                scaleY: 1,
                                            }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: 0.3,
                                                duration: 0.8,
                                            }}
                                            style={{
                                                originY: 0,
                                            }}
                                        />
                                    )}
                                </div>

                                {/* Card */}
                                <motion.div
                                    className="ml-12 group relative"
                                    whileHover={{
                                        x: 10,
                                    }}
                                >
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur transition-opacity"
                                        animate={{
                                            scale: [1, 1.05, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: index * 0.2,
                                        }}
                                    />

                                    <div className="relative bg-neutral-900 border border-white/10 group-hover:border-cyan-500/50 rounded-2xl p-8 transition-all">
                                        <div className="flex items-center gap-3 mb-3">
                                            <motion.div
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: index * 0.1,
                                                }}
                                            >
                                                <Calendar className="text-cyan-400 size-6" />
                                            </motion.div>
                                            <span className="text-lg font-bold text-cyan-400">
                                                {item.year}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-bold mb-1 group-hover:text-cyan-400 transition-colors">
                                            {item.role}
                                        </h3>
                                        <p className="text-purple-400 font-semibold mb-4">
                                            {item.company}
                                        </p>

                                        <ul className="space-y-3">
                                            {item.achievements.map(
                                                (achievement, idx) => (
                                                    <motion.li
                                                        key={idx}
                                                        initial={{
                                                            opacity: 0,
                                                            x: -20,
                                                        }}
                                                        whileInView={{
                                                            opacity: 1,
                                                            x: 0,
                                                        }}
                                                        viewport={{
                                                            once: true,
                                                        }}
                                                        transition={{
                                                            delay:
                                                                index * 0.1 +
                                                                idx * 0.05,
                                                        }}
                                                        className="flex gap-3 text-white/70"
                                                    >
                                                        <motion.span
                                                            className="text-cyan-400 font-bold flex-shrink-0"
                                                            animate={{
                                                                scale: [
                                                                    1, 1.3, 1,
                                                                ],
                                                            }}
                                                            transition={{
                                                                duration: 2,
                                                                repeat: Infinity,
                                                                delay:
                                                                    index * 0.1,
                                                            }}
                                                        >
                                                            ✦
                                                        </motion.span>
                                                        <span>
                                                            {achievement}
                                                        </span>
                                                    </motion.li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FINAL CTA SECTION ===== */}
            <section className="min-h-[600px] flex items-center justify-center py-24 relative overflow-hidden">
                {/* Animated background */}
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        background: [
                            "radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.2) 0%, transparent 50%)",
                            "radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)",
                            "radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.2) 0%, transparent 50%)",
                        ],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                    }}
                />

                {/* Floating orbs */}
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-64 h-64 rounded-full blur-3xl opacity-20 ${
                            i === 0
                                ? "bg-cyan-500"
                                : i === 1
                                  ? "bg-purple-500"
                                  : "bg-pink-500"
                        }`}
                        animate={{
                            x: [0, 100, 0],
                            y: [0, 100, 0],
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            duration: 10 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{
                            top: `${20 + i * 30}%`,
                            left: `${20 + i * 35}%`,
                        }}
                    />
                ))}

                <div className="container relative z-10 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        {/* Glowing background card */}
                        <motion.div
                            className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-2xl"
                            animate={{
                                opacity: [0.3, 0.6, 0.3],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                            }}
                        />

                        <motion.div className="relative z-10">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-5xl md:text-7xl font-bold mb-6"
                            >
                                Let's Create{" "}
                                <motion.span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                                    animate={{
                                        textShadow: [
                                            "0 0 20px rgba(34, 197, 94, 0.3)",
                                            "0 0 60px rgba(168, 85, 247, 0.6)",
                                            "0 0 20px rgba(34, 197, 94, 0.3)",
                                        ],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                    }}
                                >
                                    Magic Together
                                </motion.span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-xl md:text-2xl text-white/70 mb-12"
                            >
                                Ready to transform your vision into reality?
                                Let's collaborate on something extraordinary.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-wrap gap-6 justify-center"
                            >
                                {[
                                    {
                                        icon: <Mail className="size-6" />,
                                        label: "Email",
                                        href: "mailto:abdullah@devdaa.com",
                                    },
                                    {
                                        icon: <Linkedin className="size-6" />,
                                        label: "LinkedIn",
                                        href: "https://linkedin.com/in/abdullah",
                                    },
                                    {
                                        icon: <Github className="size-6" />,
                                        label: "GitHub",
                                        href: "https://github.com/abdullah",
                                    },
                                ].map((item, i) => (
                                    <motion.a
                                        key={i}
                                        href={item.href}
                                        target={
                                            item.href.startsWith("http")
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel="noopener noreferrer"
                                        whileHover={{
                                            scale: 1.1,
                                            y: -10,
                                        }}
                                        whileTap={{
                                            scale: 0.95,
                                        }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + i * 0.1 }}
                                    >
                                        <motion.div
                                            className="group relative"
                                            whileHover={{
                                                filter: "brightness(1.2)",
                                            }}
                                        >
                                            <motion.div
                                                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 blur transition-opacity"
                                                animate={{
                                                    scale: [1, 1.1, 1],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: i * 0.2,
                                                }}
                                            />
                                            <div className="relative bg-neutral-950 border-2 border-cyan-500/50 group-hover:border-cyan-500 rounded-2xl px-8 py-4 flex items-center gap-2 transition-all">
                                                <motion.div
                                                    animate={{
                                                        rotate: [0, 20, 0],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        delay: i * 0.2,
                                                    }}
                                                >
                                                    {item.icon}
                                                </motion.div>
                                                <span className="font-bold">
                                                    {item.label}
                                                </span>
                                            </div>
                                        </motion.div>
                                    </motion.a>
                                ))}
                            </motion.div>

                            {/* Floating elements around CTA */}
                            <motion.div
                                className="absolute -top-20 -left-20 text-6xl opacity-10"
                                animate={{
                                    rotate: 360,
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                ✨
                            </motion.div>
                            <motion.div
                                className="absolute -bottom-20 -right-20 text-6xl opacity-10"
                                animate={{
                                    rotate: -360,
                                    scale: [1.2, 1, 1.2],
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                💫
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
