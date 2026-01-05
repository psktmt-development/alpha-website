"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from '@/components/ui/profile-card';

// Member data structure
interface Member {
    id: number;
    name: string;
    image: string;
}

// Member data with actual images and names - using "members_and_logo" folder
const membersData: Member[] = [
    { id: 0, name: "Dr. Srikanth Pulluri", image: "/members_and_logo/0.png" },
    { id: 1, name: "Dilip Chakravarthy Byra", image: "/members_and_logo/1.png" },
    { id: 2, name: "Sudhakar Reddy", image: "/members_and_logo/2.png" },
    { id: 3, name: "Shiven Gaggar", image: "/members_and_logo/3.png" },
    { id: 4, name: "Sunil Gandhe", image: "/members_and_logo/4.png" },
    { id: 5, name: "A. Srinivas Rao", image: "/members_and_logo/5.png" },
    { id: 6, name: "Gopi Krishna Manepally", image: "/members_and_logo/6.png" },
    { id: 7, name: "Prakash Kancham", image: "/members_and_logo/7.png" },
    { id: 8, name: "Jai Choudhary", image: "/members_and_logo/8.png" },
    { id: 9, name: "Abhishek Chanda", image: "/members_and_logo/9.png" },
    { id: 10, name: "Neeraj Goenka", image: "/members_and_logo/10.png" },
    { id: 11, name: "Suresh Bhavani", image: "/members_and_logo/11.png" },
    { id: 12, name: "Sumanth Palabatla", image: "/members_and_logo/12.png" },
    { id: 13, name: "Alekh Barli", image: "/members_and_logo/13.png" },
    { id: 14, name: "Manideep Yechuri", image: "/members_and_logo/14.png" },
    { id: 15, name: "Nandini Mallu", image: "/members_and_logo/15.png" },
    { id: 16, name: "Sunny Khandelwal", image: "/members_and_logo/16.png" },
    { id: 17, name: "Sirish Kothapally", image: "/members_and_logo/17.png" },
    { id: 18, name: "Neeraj Lakhotia", image: "/members_and_logo/18.png" },
    { id: 19, name: "Bharath Reddy", image: "/members_and_logo/19.png" },
    { id: 20, name: "Ravi Kumar Kolipara", image: "/members_and_logo/20.png" },
    { id: 21, name: "DR. Preeti Adusumilli", image: "/members_and_logo/21.png" },
    { id: 22, name: "Balakrishna Yerram", image: "/members_and_logo/22.png" },
    { id: 23, name: "Sree Harsha Soma", image: "/members_and_logo/23.png" },
    { id: 24, name: "Sampath Kumar", image: "/members_and_logo/24.png" },
    { id: 25, name: "Rudraraju Sunita Varma", image: "/members_and_logo/25.png" },
    { id: 26, name: "Akash Raj Jain", image: "/members_and_logo/26.png" },
    { id: 27, name: "Bala Kishan Raju K", image: "/members_and_logo/27.png" },
    { id: 28, name: "R. C. Ratul", image: "/members_and_logo/28.png" },
    { id: 29, name: "Susheel Kumar", image: "/members_and_logo/29.png" },
    { id: 30, name: "Rajamouli Seerna", image: "/members_and_logo/30.png" },
    { id: 31, name: "Nagaraju Bandaru", image: "/members_and_logo/31.png" },
    { id: 32, name: "Praveen Agarwal", image: "/members_and_logo/32.png" },
    { id: 33, name: "Pawan Goel", image: "/members_and_logo/33.png" },
    { id: 34, name: "Kavitha Rudrangi", image: "/members_and_logo/34.png" },
    { id: 35, name: "Rajkumar Kacharla", image: "/members_and_logo/35.png" },
    { id: 36, name: "Abhilekh Puttagunta", image: "/members_and_logo/36.png" },
    { id: 37, name: "Dr. Spandana Muddula", image: "/members_and_logo/37.png" },
    { id: 38, name: "Raviteja Ganta", image: "/members_and_logo/38.png" },
    { id: 39, name: "Harika Puvvadi", image: "/members_and_logo/39.png" },
    { id: 40, name: "Dr. Rohit Morlawar", image: "/members_and_logo/40.png" },
    { id: 41, name: "Praneeth Chandra Ponakala", image: "/members_and_logo/41.png" },
    { id: 42, name: "Narendra Goud", image: "/members_and_logo/42.png" },
    { id: 43, name: "Vamsi Udayagiri", image: "/members_and_logo/43.png" },
    { id: 44, name: "Kiranjot Kaur", image: "/members_and_logo/44.png" },
    { id: 45, name: "Divya Cherkuri", image: "/members_and_logo/45.png" },
    { id: 46, name: "Sunil Daga", image: "/members_and_logo/46.png" },
    { id: 47, name: "Vykunta Rao", image: "/members_and_logo/47.png" },
    { id: 48, name: "Vinay Kumar Kabra", image: "/members_and_logo/48.png" },
    { id: 49, name: "Naresh Velaga", image: "/members_and_logo/49.png" },
    { id: 50, name: "Chandra Mouli Tippala", image: "/members_and_logo/50.png" },
    { id: 51, name: "Ajay Kumar Agarwal", image: "/members_and_logo/51.png" },
    { id: 52, name: "Raviteja Mattapalli", image: "/members_and_logo/52.png" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

export function OurMembersGrid() {
    return (
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
            {/* Subtle background pattern */}
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #af2324 1px, transparent 0)`,
                    backgroundSize: '48px 48px'
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    {/* Decorative line */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#af2324]" />
                        <span className="text-[#af2324] text-sm font-semibold tracking-[0.2em] uppercase">
                            The Circle
                        </span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#af2324]" />
                    </div>

                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
                        style={{ fontFamily: 'DM Serif Display, serif' }}
                    >
                        Our Members
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Meet the visionary leaders, entrepreneurs, and innovators who are shaping the future as part of The Alpha Circle.
                    </p>
                </motion.div>

                {/* Members Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
                >
                    {membersData.map((member) => (
                        <motion.div
                            key={member.id}
                            variants={itemVariants}
                        >
                            <ProfileCard
                                name={member.name}
                                personImage={member.image}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom accent */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-16 md:mt-20 mx-auto w-32 h-1 bg-gradient-to-r from-transparent via-[#af2324] to-transparent rounded-full"
                />
            </div>
        </section>
    );
}

export default OurMembersGrid;
