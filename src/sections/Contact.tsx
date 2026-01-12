"use client";

import Tag from "@/components/Tag";
import Button from "@/components/Button";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Contact Us</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
                    Let's Talk <span className="text-teal-500">Business</span>
                </h2>
                <p className="text-center text-white/50 mt-4 text-lg max-w-xl mx-auto">
                    Ready to transform your business with cutting-edge AI and
                    technology solutions? Get in touch with us today.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-12 max-w-2xl mx-auto space-y-6"
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-neutral-900 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-teal-500 transition"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-neutral-900 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-teal-500 transition"
                            />
                        </div>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="company"
                            placeholder="Company Name"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full bg-neutral-900 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-teal-500 transition"
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            placeholder="Tell us about your project"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full bg-neutral-900 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-teal-500 transition resize-none"
                        />
                    </div>
                    <div className="flex justify-center">
                        <Button type="submit" variant="primary" size="lg">
                            Send Message
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}
