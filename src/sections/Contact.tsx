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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            // Use PHP backend for Hostinger hosting
            const response = await fetch("https://devdaa.com/api/send-email.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({
                    type: "success",
                    message: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
                });
                setFormData({ name: "", email: "", company: "", message: "" });
            } else {
                console.error("Server error:", response.status, data);
                setSubmitStatus({
                    type: "error",
                    message: data.error || `Server error (${response.status}). Please try again.`,
                });
            }
        } catch (error) {
            console.error("Contact form error:", error);
            setSubmitStatus({
                type: "error",
                message: "An error occurred. Please check the console for details.",
            });
        } finally {
            setIsSubmitting(false);
        }
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
                        <Button 
                            type="submit" 
                            variant="primary" 
                            size="lg"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                    </div>

                    {/* Status Messages */}
                    {submitStatus.type && (
                        <div
                            className={`mt-4 p-4 rounded-2xl text-center ${
                                submitStatus.type === "success"
                                    ? "bg-teal-500/10 border border-teal-500/30 text-teal-400"
                                    : "bg-red-500/10 border border-red-500/30 text-red-400"
                            }`}
                        >
                            {submitStatus.message}
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}
