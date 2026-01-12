"use client";

import Tag from "@/components/Tag";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const faqs = [
    {
        question: "What types of AI/ML solutions does DevDaa offer?",
        answer: "DevDaa specializes in custom AI and machine learning solutions including predictive analytics, natural language processing, computer vision, recommendation systems, and intelligent automation. We tailor each solution to your specific business needs and industry requirements.",
    },
    {
        question:
            "How long does it take to develop a custom software solution?",
        answer: "Project timelines vary based on complexity and scope. A typical custom software project takes 3-6 months from discovery to deployment. We follow an agile methodology with regular sprints and milestones, ensuring you see progress throughout the development cycle.",
    },
    {
        question: "Do you provide ongoing support after project completion?",
        answer: "Absolutely! We offer comprehensive post-launch support including maintenance, updates, bug fixes, and feature enhancements. Our support packages are flexible and can be customized based on your needs, ensuring your solution continues to perform optimally.",
    },
    {
        question: "Can DevDaa integrate with our existing systems?",
        answer: "Yes! We excel at creating solutions that seamlessly integrate with your existing tech stack. Whether it's legacy systems, cloud platforms, databases, or third-party APIs, our team has extensive experience in building robust integrations.",
    },
    {
        question: "What industries does DevDaa work with?",
        answer: "We work across diverse industries including healthcare, finance, e-commerce, education, logistics, and more. Our team's expertise in AI/ML and emerging technologies allows us to adapt our solutions to any industry's unique challenges and regulatory requirements.",
    },
    {
        question: "How do you ensure data security and privacy?",
        answer: "Data security is our top priority. We implement industry-standard encryption, secure cloud infrastructure, regular security audits, and comply with regulations like GDPR and HIPAA. All projects include comprehensive security measures tailored to your specific requirements.",
    },
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <section id="faqs" className="py-24 ">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Faqs</Tag>
                </div>
                <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                    Questions? We&apos;ve got{" "}
                    <span className="text-teal-500">answers</span>
                </h2>

                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq, faqIndex) => (
                        <div
                            key={faq.question}
                            onClick={() => setSelectedIndex(faqIndex)}
                            className="bg-neutral-900 rounded-2xl border border-white/10 p-6 "
                        >
                            <div className="flex justify-between items-start">
                                <h3 className="font-medium m-0">
                                    {faq.question}
                                </h3>
                                <Plus
                                    size={30}
                                    className={twMerge(
                                        "feather feather-plus text-teal-500 flex-shrink-0 transition duration-300",
                                        selectedIndex === faqIndex &&
                                            "rotate-45"
                                    )}
                                />
                            </div>

                            <AnimatePresence>
                                {selectedIndex === faqIndex && (
                                    <motion.div
                                        initial={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        animate={{
                                            height: "auto",
                                            marginTop: 24,
                                        }}
                                        exit={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-white/50">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
