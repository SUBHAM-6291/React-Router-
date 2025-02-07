import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const footerLinks = [
        {
            title: "Resources",
            links: [
                { name: "Home", to: "/" },
                { name: "About", to: "/about" },
            ],
        },
        {
            title: "Follow Us",
            links: [
                { name: "Github", to: "https://github.com/SUBHAM-6291", external: true },
                { name: "Discord", to: "/" },
            ],
        },
        {
            title: "Legal",
            links: [
                { name: "Privacy Policy", to: "#" },
                { name: "Terms & Conditions", to: "#" },
            ],
        },
    ];

    const socialLinks = [
        { name: "Facebook", to: "#", icon: "facebook.svg" },
        { name: "Twitter", to: "#", icon: "twitter.svg" },
        { name: "GitHub", to: "#", icon: "github.svg" },
        { name: "Dribbble", to: "#", icon: "dribbble.svg" },
    ];

    return (
        <footer className="bg-white border-t">
            <div className="container mx-auto p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="h-16"
                                alt="Company Logo"
                            />
                        </Link>
                    </div>

                    {/* Footer Links */}
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">{section.title}</h2>
                            <ul className="text-gray-500 space-y-2">
                                {section.links.map((link, idx) => (
                                    <li key={idx}>
                                        {link.external ? (
                                            <a href={link.to} className="hover:underline" target="_blank" rel="noopener noreferrer">
                                                {link.name}
                                            </a>
                                        ) : (
                                            <Link to={link.to} className="hover:underline">
                                                {link.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <hr className="my-6 border-gray-200" />

                <div className="flex flex-col md:flex-row md:justify-between items-center">
                    <span className="text-sm text-gray-500">
                        © {new Date().getFullYear()}{" "}
                        <a href="https://hiteshchoudhary.com/" className="hover:underline">
                            hiteshchoudhary
                        </a>
                        . All Rights Reserved.
                    </span>

                    {/* Social Links */}
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        {socialLinks.map((social, idx) => (
                            <a key={idx} href={social.to} className="text-gray-500 hover:text-gray-900" aria-label={social.name}>
                                <img src={`/icons/${social.icon}`} alt={social.name} className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
