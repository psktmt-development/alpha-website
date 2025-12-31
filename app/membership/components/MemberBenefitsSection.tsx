"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const benefits = [
    {
        title: "Global Circles",
        description: "In India, Dubai & beyond. Connect across borders with a network that transcends geography.",
    },
    {
        title: "Private Gatherings",
        description: "Curated for authenticity, insight, and influence. No pitching, just meaningful dialogue.",
    },
    {
        title: "Leadership Sessions",
        description: "With global icons, policy experts & industry veterans sharing unscripted wisdom.",
    },
    {
        title: "Exclusive Access",
        description: "To private investment rounds, tech innovation previews, and strategic partnerships.",
    },
    {
        title: "Next-Gen Circles",
        description: "Empowering successors with vision, exposure & responsibility to lead into the future.",
    },
    {
        title: "Credibility & Trust",
        description: "From being part of a peer-verified network of excellence where reputation is paramount.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export function MemberBenefitsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-neutral-50 py-24 md:py-32 px-4 md:px-8 lg:px-16 overflow-hidden"
            id="member-benefits"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                        Member Benefits
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        As a member of The Alpha Circle, you gain access to a world of opportunity, connection, and growth.
                    </p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="group relative bg-white rounded-2xl p-10 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
                        >
                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#af2324]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Large Number Watermark */}
                            <div className="absolute -right-4 -top-4 text-9xl font-serif font-bold text-gray-50 group-hover:text-[#af2324]/5 transition-colors duration-500 select-none pointer-events-none">
                                {String(index + 1).padStart(2, '0')}
                            </div>

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div>
                                    <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4 group-hover:text-[#af2324] transition-colors duration-300">
                                        {benefit.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                                        {benefit.description}
                                    </p>
                                </div>

                                {/* Decorative Line that expands */}
                                <div className="w-12 h-1 bg-[#af2324]/20 mt-8 group-hover:w-full group-hover:bg-[#af2324] transition-all duration-500 ease-out" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
