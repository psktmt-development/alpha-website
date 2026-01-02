"use client";

import React from 'react';
import Image from 'next/image';
import { User } from 'lucide-react';

interface ProfileCardProps {
    personImage?: string;
    logoImage?: string;
    name: string;
}

/**
 * A minimalist Profile Card component for displaying member information.
 */
const ProfileCard: React.FC<ProfileCardProps> = ({ personImage, logoImage, name }) => {
    return (
        <div className="relative w-full max-w-[320px] mx-auto group">
            <div className="relative bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">

                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden">
                    {/* Main Person Image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100">
                        {personImage ? (
                            <Image
                                src={personImage}
                                alt={name || "Profile Photo"}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                            />
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-slate-300">
                                <User size={64} strokeWidth={1} />
                                <span className="text-xs font-medium mt-2 uppercase tracking-widest">No Photo</span>
                            </div>
                        )}
                    </div>

                    {/* Company Logo Overlay - No box, larger size */}
                    {logoImage && (
                        <div className="absolute top-4 right-4 md:top-5 md:right-5">
                            <Image
                                src={logoImage}
                                alt="Company Logo"
                                width={112}
                                height={112}
                                className="w-[90px] h-[90px] md:w-28 md:h-28 object-contain drop-shadow-lg"
                            />
                        </div>
                    )}
                </div>

                {/* Text Section */}
                <div className="bg-white p-4 md:p-6 pb-5 md:pb-8">
                    <h3 className="text-slate-900 text-lg md:text-xl font-bold tracking-tight text-center" style={{ fontFamily: 'DM Serif Display, serif' }}>
                        {name || "Full Name"}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
