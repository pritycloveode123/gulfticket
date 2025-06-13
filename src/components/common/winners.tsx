'use client';

import Image from 'next/image';
import DynamicButton from './button';
import { ReactNode } from 'react';

interface ImageContentSectionProps {
    imageSrc: string;
    title: string;
    subtitle: string;
    description: ReactNode; // 👈 Updated to allow JSX like <ul><li>
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
        <div className="w-full bg-gradient-to-b from-[#f5f7fa] to-[#e4ecf3] py-12 px-6">
            <div
                className={`container mx-auto flex flex-col-reverse md:flex-row ${isImageLeft ? 'md:flex-row-reverse' : ''
                    } items-stretch gap-8 min-h-[400px]`}
            >
                {/* Text Content */}
                <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left p-4">
                    <h4 className="text-xl font-semibold text-[#DF911A] mb-2 uppercase">
                        {subtitle}
                    </h4>
                    <h2 className="text-3xl font-bold text-[#DF911A] mb-4 uppercase">
                        {title}
                    </h2>

                    {/* Now description can be text or list */}
                    <div className="text-gray-700 mb-6 flex-grow">{description}</div>

                    <div className="flex justify-end md:justify-start">
                        <DynamicButton text={buttonText} size="lg" />
                    </div>
                </div>

                {/* Image */}
                <div className="md:w-1/2 flex items-end justify-center p-4">
                    <Image
                        src={imageSrc}
                        alt={title}
                        width={500}
                        height={400}
                        className="w-full h-auto max-w-md object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
