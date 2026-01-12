"use client";

import Tag from "@/components/Tag";
import IntegrationColumn from "@/components/IntegrationColumn";
import { IconType } from "react-icons";
import {
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiTensorflow,
    SiPytorch,
    SiAmazon,
    SiDocker,
    SiKubernetes,
    SiMongodb,
    SiPostgresql,
    SiGooglecloud,
    SiZapier,
    SiTypescript,
    SiPython,
    SiFastapi,
    SiGithub,
} from "react-icons/si";

const integrations = [
    {
        name: "React",
        icon: SiReact,
        description: "A JavaScript library for building user interfaces.",
    },
    {
        name: "Next.js",
        icon: SiNextdotjs,
        description: "The React framework for production-grade applications.",
    },
    {
        name: "Node.js",
        icon: SiNodedotjs,
        description: "JavaScript runtime built on Chrome's V8 engine.",
    },
    {
        name: "TensorFlow",
        icon: SiTensorflow,
        description: "End-to-end platform for machine learning.",
    },
    {
        name: "PyTorch",
        icon: SiPytorch,
        description: "Open source machine learning framework.",
    },
    {
        name: "AWS",
        icon: SiAmazon,
        description: "Comprehensive cloud computing platform.",
    },
    {
        name: "Docker",
        icon: SiDocker,
        description:
            "Platform for developing, shipping, and running applications.",
    },
    {
        name: "Kubernetes",
        icon: SiKubernetes,
        description: "Container orchestration platform.",
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
        description: "NoSQL database for modern applications.",
    },
    {
        name: "PostgreSQL",
        icon: SiPostgresql,
        description: "Advanced open source relational database.",
    },
    {
        name: "Azure",

        description: "Microsoft's cloud computing service.",
    },
    {
        name: "Google Cloud",
        icon: SiGooglecloud,
        description: "Suite of cloud computing services.",
    },
    {
        name: "Zapier",
        icon: SiZapier,
        description: "Automation platform connecting your apps.",
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
        description: "JavaScript with syntax for types.",
    },
    {
        name: "Python",
        icon: SiPython,
        description: "High-level programming language for AI/ML.",
    },
    {
        name: "FastAPI",
        icon: SiFastapi,
        description: "Modern, fast web framework for building APIs.",
    },
    {
        name: "GitHub",
        icon: SiGithub,
        description: "Platform for version control and collaboration.",
    },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return (
        <section id="integrations" className="py-24 overflow-hidden ">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <Tag>Tech Stack</Tag>
                        <h2 className="text-6xl font-medium mt-6">
                            Built with{" "}
                            <span className="text-teal-400 ">cutting-edge</span>{" "}
                            technologies
                        </h2>

                        <p className="text-white/50 mt-4 text-lg ">
                            DevDaa leverages the latest frameworks and tools to
                            deliver scalable, high-performance solutions powered
                            by AI, cloud, and modern development technologies.
                        </p>
                    </div>
                    <div>
                        <div className="grid md:grid-cols-2 gap-4 lg:h-[800px] h-[400px] lg:mt-0 mt-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                            <IntegrationColumn integrations={integrations} />
                            <IntegrationColumn
                                integrations={integrations.slice().reverse()}
                                className="hidden md:flex"
                                reverse
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
