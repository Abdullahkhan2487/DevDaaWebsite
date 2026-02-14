"use client";

import { motion } from "framer-motion";
import {
    ArrowLeft,
    Linkedin,
    Mail,
    Github,
    BarChart3,
    Handshake,
    PieChart,
    Target,
    TrendingUp,
    Users,
    Award,
    Globe,
    Briefcase,
    LineChart,
    Rocket,
    Megaphone,
} from "lucide-react";
import Button from "@/components/Button";
import Tag from "@/components/Tag";
import Link from "next/link";
import Image from "next/image";
import saudImage from "@/assets/images/saud.webp";

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
        icon: <TrendingUp className="size-5" />,
        title: "Revenue Growth",
        description: "Spearheaded business development strategies driving exponential growth",
        metric: "400%",
        metricLabel: "Revenue Increase",
    },
    {
        icon: <Handshake className="size-5" />,
        title: "Strategic Partnerships",
        description: "Established key partnerships with Fortune 500 companies worldwide",
        metric: "25+",
        metricLabel: "Enterprise Clients",
    },
    {
        icon: <Users className="size-5" />,
        title: "Operations Leadership",
        description: "Streamlined operations and built efficient cross-functional teams",
        metric: "60%",
        metricLabel: "Efficiency Gain",
    },
    {
        icon: <Globe className="size-5" />,
        title: "Market Expansion",
        description: "Led successful market expansion into 5+ international markets",
        metric: "5+",
        metricLabel: "Markets Entered",
    },
];

const projects = [
    {
        name: "Enterprise Growth Strategy",
        category: "Business Dev",
        impact: "Closed $5M+ in enterprise contracts in first year",
        skills: ["Sales Strategy", "Client Relations", "Market Analysis", "Negotiation"],
        icon: <Briefcase className="size-5" />,
    },
    {
        name: "Operational Excellence Program",
        category: "Operations",
        impact: "Reduced operational overhead by 40%",
        skills: ["Process Optimization", "Team Management", "KPI Tracking", "Agile"],
        icon: <PieChart className="size-5" />,
    },
    {
        name: "Brand & Marketing Initiative",
        category: "Marketing",
        impact: "3x increase in qualified leads through digital channels",
        skills: ["Digital Marketing", "Brand Strategy", "Content", "SEO"],
        icon: <Megaphone className="size-5" />,
    },
    {
        name: "Client Success Framework",
        category: "Client Success",
        impact: "95% client retention rate with NPS score of 72",
        skills: ["Account Management", "CX Design", "Analytics", "Feedback Loops"],
        icon: <LineChart className="size-5" />,
    },
];

const skills = [
    "Business Strategy", "Operations Management", "Financial Planning",
    "Client Relations", "Team Leadership", "Market Analysis",
    "Sales & BD", "Project Management", "Digital Marketing",
    "Strategic Planning", "Agile/Scrum", "Data-Driven Decisions",
];

const timeline = [
    {
        year: "2024–Present",
        role: "COO & Co Founder",
        company: "DevDaa",
        achievements: [
            "Defined business strategy and growth roadmap",
            "Built client acquisition pipeline generating 200+ qualified leads/month",
            "Established operational processes scaling the company 4x",
        ],
    },
    {
        year: "2022–2024",
        role: "Head of Business Development",
        company: "DevDaa",
        achievements: [
            "Closed partnerships with 15+ enterprise clients",
            "Built and managed the sales and marketing team",
            "Developed pricing strategy and go-to-market plans",
        ],
    },
    {
        year: "2020–2022",
        role: "Business Analyst",
        company: "Strategic Solutions Group",
        achievements: [
            "Analyzed market trends and identified growth opportunities",
            "Managed $3M+ project portfolios end-to-end",
            "Delivered data-driven insights improving decision-making by 35%",
        ],
    },
];

// Optimized orb particles for background
const orbParticles = [
    { color: "from-amber-500 to-orange-500", startPos: { top: "18%", left: "12%" }, endPos: { top: "72%", left: "78%" }, duration: 23 },
    { color: "from-orange-500 to-rose-500", startPos: { top: "63%", left: "72%" }, endPos: { top: "23%", left: "18%" }, duration: 27 },
    { color: "from-rose-500 to-amber-500", startPos: { top: "43%", left: "82%" }, endPos: { top: "83%", left: "28%" }, duration: 24 },
];

export default function SaudPage() {
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
                        className="flex items-center gap-2 text-white/60 hover:text-amber-400 transition-colors bg-neutral-900/80 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
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
                                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 p-[3px]">
                                    <div className="w-full h-full rounded-full overflow-hidden">
                                        <Image
                                            src={saudImage}
                                            alt="Saud Naseer"
                                            className="w-full h-full object-cover scale-110"
                                            priority
                                        />
                                    </div>
                                </div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.5, type: "spring" }}
                                    className="absolute -bottom-1 -right-1 bg-amber-400 text-neutral-950 rounded-full px-3 py-1 text-xs font-bold"
                                >
                                    COO
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div custom={1} variants={fadeUp} className="mb-4">
                            <Tag className="border-amber-400 text-amber-400">Co Founder & COO</Tag>
                        </motion.div>

                        <motion.h1 custom={2} variants={fadeUp} className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 tracking-tight">
                            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                                SAUD N.
                            </span>
                        </motion.h1>

                        <motion.p custom={3} variants={fadeUp} className="text-xl md:text-3xl text-white/50 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                            Driving operational excellence
                            <br />
                            <span className="text-amber-400">and business growth at scale</span>
                        </motion.p>

                        <motion.div custom={4} variants={fadeUp} className="flex flex-wrap gap-3 justify-center">
                            <a href="mailto:saud.naseer@devdaa.com">
                                <Button variant="primary" size="sm" className="inline-flex items-center gap-2 font-bold bg-amber-400 border-amber-400 text-neutral-950">
                                    <Mail className="size-4" /> Get in Touch
                                </Button>
                            </a>
                            <a href="https://www.linkedin.com/in/muhammad-saud-naseer-5b3110398/" target="_blank" rel="noopener noreferrer">
                                <Button variant="secondary" size="sm" className="inline-flex items-center gap-2">
                                    <Linkedin className="size-4" /> LinkedIn
                                </Button>
                            </a>
                            <a href="https://github.com/saud-naseer" target="_blank" rel="noopener noreferrer">
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
                        <Tag className="border-amber-400 text-amber-400">Achievements</Tag>
                        <h2 className="text-3xl md:text-5xl font-bold mt-6">
                            Driving <span className="text-amber-400">Results</span>
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
                                className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-amber-500/20 rounded-3xl p-8 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-500"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-amber-500/10 text-amber-400 p-2 rounded-lg">{item.icon}</div>
                                        <h3 className="font-bold text-lg">{item.title}</h3>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-amber-400">{item.metric}</div>
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
                        <Tag className="border-amber-400 text-amber-400">Experience</Tag>
                        <h2 className="text-3xl md:text-5xl font-bold mt-6">
                            Career <span className="text-amber-400">Journey</span>
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
                                className="relative pl-8 border-l-2 border-white/10 hover:border-amber-500/50 transition-colors duration-300"
                            >
                                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-amber-400 border-4 border-neutral-950" />
                                <div className="text-sm text-amber-400 font-mono mb-1">{entry.year}</div>
                                <h3 className="text-xl font-bold">{entry.role}</h3>
                                <p className="text-white/50 text-sm mb-3">{entry.company}</p>
                                <ul className="space-y-1">
                                    {entry.achievements.map((a, j) => (
                                        <li key={j} className="text-white/60 text-sm flex items-start gap-2">
                                            <span className="text-amber-400 mt-1.5 shrink-0">•</span>{a}
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
                        <Tag className="border-amber-400 text-amber-400">Initiatives</Tag>
                        <h2 className="text-3xl md:text-5xl font-bold mt-6">
                            Key <span className="text-amber-400">Initiatives</span>
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
                                className="bg-neutral-900 border border-white/10 rounded-2xl p-6 hover:border-amber-500/30 transition-colors duration-300 group"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="text-amber-400">{project.icon}</div>
                                    <span className="text-xs text-amber-400 font-mono bg-amber-500/10 px-2 py-0.5 rounded-full">{project.category}</span>
                                </div>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-amber-400 transition-colors">{project.name}</h3>
                                <p className="text-white/50 text-sm mb-4">{project.impact}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.skills.map((t) => (
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
                        <Tag className="border-amber-400 text-amber-400">Skills</Tag>
                        <h2 className="text-3xl md:text-5xl font-bold mt-6">
                            Core <span className="text-amber-400">Competencies</span>
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
                                className="bg-neutral-900 border border-white/10 px-4 py-2 rounded-full text-sm hover:border-amber-400/40 hover:text-amber-400 transition-colors duration-300"
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
                            Let&apos;s Grow <span className="text-amber-400">Together</span>
                        </h2>
                        <p className="text-white/50 mb-8">Ready to take your business to the next level? Let&apos;s talk strategy.</p>
                        <div className="flex justify-center gap-4">
                            <a href="mailto:saud.naseer@devdaa.com">
                                <Button variant="primary" className="font-bold bg-amber-400 border-amber-400 text-neutral-950">Contact Me</Button>
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
