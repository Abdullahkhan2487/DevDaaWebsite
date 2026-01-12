import Image from "next/image";
import siteLogo from "@/assets/images/devdaa.png";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const footerLinks = [
    { href: "#", label: "Home" },
    { href: "#features", label: "Services" },
    { href: "#integrations", label: "Tech Stack" },
    { href: "#faqs", label: "FAQs" },
    { href: "#contact", label: "Contact" },
];

const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
    return (
        <footer className="py-16 border-t border-white/10">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Logo and About */}
                    <div className="lg:col-span-2">
                        <Image
                            src={siteLogo}
                            alt="DevDaa Logo"
                            className="h-10 w-auto mb-4"
                        />
                        <p className="text-white/60 text-sm leading-relaxed mb-4 max-w-md">
                            DevDaa is a cutting-edge software company
                            specializing in AI, ML, and emerging technologies.
                            We transform innovative ideas into intelligent
                            solutions that drive business growth.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="bg-neutral-900 border border-white/10 p-2 rounded-lg hover:border-teal-500 hover:bg-teal-500/10 transition"
                                    aria-label={social.label}
                                >
                                    <social.icon
                                        size={20}
                                        className="text-white/70"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Quick Links
                        </h3>
                        <nav className="flex flex-col gap-3">
                            {footerLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-white/60 text-sm hover:text-teal-500 transition"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Contact Us
                        </h3>
                        <div className="flex flex-col gap-3">
                            <a
                                href="mailto:contact@devdaa.com"
                                className="flex items-start gap-2 text-white/60 text-sm hover:text-teal-500 transition"
                            >
                                <Mail
                                    size={16}
                                    className="mt-0.5 flex-shrink-0"
                                />
                                <span>contact@devdaa.com</span>
                            </a>
                            <a
                                href="tel:+923335895359"
                                className="flex items-start gap-2 text-white/60 text-sm hover:text-teal-500 transition"
                            >
                                <Phone
                                    size={16}
                                    className="mt-0.5 flex-shrink-0"
                                />
                                <span>+92 (333) 589-5359</span>
                            </a>
                            <div className="flex items-start gap-2 text-white/60 text-sm">
                                <MapPin
                                    size={16}
                                    className="mt-0.5 flex-shrink-0"
                                />
                                <span>Islamabad, Pakistan</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/50 text-sm">
                            © {new Date().getFullYear()} DevDaa. All rights
                            reserved.
                        </p>
                        <div className="flex gap-6">
                            <a
                                href="#"
                                className="text-white/50 text-sm hover:text-teal-500 transition"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="text-white/50 text-sm hover:text-teal-500 transition"
                            >
                                Terms & Conditions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
