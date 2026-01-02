"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from '@/components/ui/profile-card';

// Member data structure
interface Member {
    id: number;
    name: string;
    personImage: string;
    logoImage?: string;
}

// Member data with actual images and names
const membersData: Member[] = [
    { id: 1, name: "Dilip Chakravarthy Byra", personImage: "/members/1.png", logoImage: "/member logos/The-Alpha-Circle-06.png" },
    { id: 2, name: "Sudhakar Reddy", personImage: "/members/2.png", logoImage: "/member logos/The-Alpha-Circle-27.png" },
    { id: 3, name: "Shiven Gaggar", personImage: "/members/3.png", logoImage: "/member logos/The-Alpha-Circle-40.png" },
    { id: 4, name: "Sunil Gandhe", personImage: "/members/4.png", logoImage: "/member logos/The-Alpha-Circle-39.png" },
    { id: 5, name: "A. Srinivas Rao", personImage: "/members/5.png", logoImage: "/member logos/The-Alpha-Circle-01.png" },
    { id: 6, name: "Gopi Krishna Manepally", personImage: "/members/6.png", logoImage: "/member logos/The-Alpha-Circle-56.png" },
    { id: 7, name: "Prakash Kancham", personImage: "/members/7.png", logoImage: "/member logos/The-Alpha-Circle-20.png" },
    { id: 8, name: "Jai Choudhary", personImage: "/members/8.png", logoImage: "/member logos/The-Alpha-Circle-18.png" },
    { id: 9, name: "Abhishek Chanda", personImage: "/members/9.png", logoImage: "/member logos/The-Alpha-Circle-08.png" },
    { id: 10, name: "Neeraj Goenka", personImage: "/members/10.png", logoImage: "/member logos/The-Alpha-Circle-50.png" },
    { id: 11, name: "Suresh Bhavani", personImage: "/members/11.png", logoImage: "/member logos/The-Alpha-Circle-34.png" },
    { id: 12, name: "Sumanth Palabatla", personImage: "/members/12.png", logoImage: "/member logos/The-Alpha-Circle-25.png" },
    { id: 13, name: "Alekh Barli", personImage: "/members/13.png", logoImage: "/member logos/The-Alpha-Circle-43.png" },
    { id: 14, name: "Manideep Yechuri", personImage: "/members/14.png", logoImage: "/member logos/582697826_18068062949613998_1850375943596812759_n.jpg" },
    { id: 16, name: "Nandini Mallu", personImage: "/members/16.png" },
    { id: 17, name: "Sunny Khandelwal", personImage: "/members/17.png", logoImage: "/member logos/The-Alpha-Circle-60.png" },
    { id: 18, name: "Sirish Kothapally", personImage: "/members/18.png", logoImage: "/member logos/Untitled-2.png" },
    { id: 20, name: "Neeraj Lakhotia", personImage: "/members/20.png", logoImage: "/member logos/The-Alpha-Circle-36.png" },
    { id: 21, name: "Bharath Reddy", personImage: "/members/21.png", logoImage: "/member logos/The-Alpha-Circle-11.png" },
    { id: 22, name: "Ravi Kumar Kolipara", personImage: "/members/22.png", logoImage: "/member logos/The-Alpha-Circle-29.png" },
    { id: 23, name: "DR. Preeti Adusumilli", personImage: "/members/23.png", logoImage: "/member logos/The-Alpha-Circle-37.png" },
    { id: 24, name: "Balakrishna Yerram", personImage: "/members/24.png", logoImage: "/member logos/The-Alpha-Circle-07.png" },
    { id: 25, name: "Sree Harsha Soma", personImage: "/members/25.png", logoImage: "/member logos/The-Alpha-Circle-23.png" },
    { id: 26, name: "Sampath Kumar", personImage: "/members/26.png", logoImage: "/member logos/The-Alpha-Circle-26.png" },
    { id: 27, name: "Rudraraju Sunita Varma", personImage: "/members/27.png", logoImage: "/member logos/The-Alpha-Circle-17.png" },
    { id: 28, name: "Akash Raj Jain", personImage: "/members/28.png", logoImage: "/member logos/Untitled design (3).png" },
    { id: 30, name: "Bala Krishna Raju K", personImage: "/members/30.png", logoImage: "/member logos/The-Alpha-Circle-05.png" },
    { id: 31, name: "R. C. Ratul", personImage: "/members/31.png", logoImage: "/member logos/The-Alpha-Circle-30.png" },
    { id: 32, name: "Susheel Kumar", personImage: "/members/32.png", logoImage: "/member logos/The-Alpha-Circle-41.png" },
    { id: 33, name: "Rajamouli Seerna", personImage: "/members/33.png", logoImage: "/member logos/The-Alpha-Circle-33.png" },
    { id: 34, name: "Nagaraju Bandaru", personImage: "/members/34.png", logoImage: "/member logos/The-Alpha-Circle-22.png" },
    { id: 35, name: "Praveen Agarwal", personImage: "/members/35.png", logoImage: "/member logos/The-Alpha-Circle-04.png" },
    { id: 36, name: "Pawan Goel", personImage: "/members/36.png", logoImage: "/member logos/The-Alpha-Circle-31.png" },
    { id: 37, name: "Kavitha Rudrangi", personImage: "/members/37.png", logoImage: "/member logos/The-Alpha-Circle-15.png" },
    { id: 38, name: "Rajkumar Kacharla", personImage: "/members/38.png", logoImage: "/member logos/The-Alpha-Circle-32.png" },
    { id: 39, name: "Abhilekh Puttagunta", personImage: "/members/39.png", logoImage: "/member logos/The-Alpha-Circle-16.png" },
    { id: 40, name: "Dr. Spandana Muddula", personImage: "/members/40.png", logoImage: "/member logos/The-Alpha-Circle-03.png" },
    { id: 41, name: "Raviteja Ganta", personImage: "/members/41.png", logoImage: "/member logos/The-Alpha-Circle-09.png" },
    { id: 42, name: "Harika Puvvadi", personImage: "/members/42.png", logoImage: "/member logos/Untitled-1.png" },
    { id: 43, name: "Dr. Rohit Morlawar", personImage: "/members/43.png", logoImage: "/member logos/The-Alpha-Circle-44.png" },
    { id: 45, name: "Praneeth Chandra Ponakala", personImage: "/members/45.png", logoImage: "/member logos/The-Alpha-Circle-45.png" },
    { id: 46, name: "Narendra Goud", personImage: "/members/46.png", logoImage: "/member logos/The-Alpha-Circle-59.png" },
    { id: 47, name: "Vamsi Udayagiri", personImage: "/members/47.png", logoImage: "/member logos/The-Alpha-Circle-51.png" },
    { id: 48, name: "Kiranjot Kaur", personImage: "/members/48.png", logoImage: "/member logos/The-Alpha-Circle-24.png" },
    { id: 49, name: "Divya Cherkuri", personImage: "/members/49.png", logoImage: "/member logos/The-Alpha-Circle-28.png" },
    { id: 50, name: "Sunil Daga", personImage: "/members/50.png", logoImage: "/member logos/The-Alpha-Circle-47.png" },
    { id: 51, name: "Vykunta Rao", personImage: "/members/51.png", logoImage: "/member logos/The-Alpha-Circle-46.png" },
    { id: 52, name: "Vinay Kumar Kabra", personImage: "/members/52.png", logoImage: "/member logos/The-Alpha-Circle-31.png" },
    { id: 53, name: "Naresh Velaga", personImage: "/members/53.png", logoImage: "/member logos/The-Alpha-Circle-63.png" },
    { id: 54, name: "Chandra Mouli Tippala", personImage: "/members/54.png", logoImage: "/member logos/The-Alpha-Circle-52.png" },
    { id: 55, name: "Ajay Kumar Agarwal", personImage: "/members/55.png", logoImage: "/member logos/The-Alpha-Circle-38.png" },
    { id: 56, name: "Raviteja Mattapalli", personImage: "/members/56.png", logoImage: "/member logos/The-Alpha-Circle-58.png" },
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
                            className="flex justify-center"
                        >
                            <ProfileCard
                                name={member.name}
                                personImage={member.personImage}
                                logoImage={member.logoImage}
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
