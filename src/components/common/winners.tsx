'use client';

import Image from 'next/image';
import DynamicButton from './button';
import { ReactNode } from 'react';

interface ImageContentSectionProps {
    imageSrc: string;
    title: string;
    subtitle: string;
    description: ReactNode;
    buttonText: string;
    imagePosition?: 'left' | 'right';
}

export default function ImageContentSection({
    imageSrc,
    title,
    subtitle,
    description,
    buttonText,
    imagePosition = 'right',
}: ImageContentSectionProps) {
    const isImageLeft = imagePosition === 'left';

    return (
        <div className="w-full bg-gradient-to-b from-[#f5f7fa] to-[#e4ecf3] py-6 sm:py-12 px-4 sm:px-6" id="security">
            <div
                className={`container mx-auto flex flex-col-reverse md:flex-row ${isImageLeft ? 'md:flex-row-reverse' : ''
                    } justify-between items-center gap-4 sm:gap-8`}
            >
                {/* Text Content */}
                <div className="max-w-xl text-center md:text-left p-2 sm:p-4">
                    <h4 className="text-lg sm:text-xl font-semibold text-[#DF911A] mb-1 sm:mb-2 uppercase">
                        {subtitle}
                    </h4>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#DF911A] mb-3 sm:mb-4 uppercase">
                        {title}
                    </h2>
                    <div className="text-gray-700 text-sm sm:text-base mb-5 sm:mb-6">
                        {description}
                        <div className="mt-4 sm:mt-6">
                            <DynamicButton text={buttonText} size="lg" />
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="max-w-md p-2 sm:p-4">
                    <Image
                        src={imageSrc}
                        alt={title}
                        width={500}
                        height={400}
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </div>

    );
}
