"use client";

import React from 'react';
import Image from 'next/image';
import { User } from 'lucide-react';

interface ProfileCardProps {
    personImage?: string;
    name: string;
}

/**
 * A minimalist Profile Card component for displaying member information.
 */
const ProfileCard: React.FC<ProfileCardProps> = ({ personImage, name }) => {
    return (
        <div className="relative w-full group">
            <div className="relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md transition-all duration-300 hover:shadow-xl hover:border-slate-300">

                {/* Image Container */}
                {personImage && (
                    <div className="relative aspect-[4/5] overflow-hidden">
                        {/* Main Person Image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100">
                            <Image
                                src={personImage}
                                alt={name || "Profile Photo"}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            />
                        </div>
                    </div>
                )}

                {/* Text Section */}
                <div className="bg-white p-4 md:p-5">
                    <h3 className="text-slate-900 text-base md:text-lg font-bold tracking-tight text-center font-dm-serif">
                        {name || "Full Name"}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
