'use client';

import Image from 'next/image';
import DynamicButton from './button';

interface ImageContentSectionProps {
    imageSrc: string;
    title: string;
    subtitle: string;
    description: string;
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
        <div className="w-full bg-gradient-to-b from-[#f5f7fa] to-[#e4ecf3] py-12">
            <div
                className={`container mx-auto flex flex-col-reverse md:flex-row ${isImageLeft ? 'md:flex-row-reverse' : ''
                    } items-center gap-8 `}
            >
                {/* Text Content */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h4 className="text-xl font-semibold text-[#DF911A]  mb-2 uppercase">
                        {subtitle}
                    </h4>
                    <h2 className="text-3xl  font-bold text-[#DF911A] mb-4 uppercase">
                        {title}
                    </h2>
                    <p className="text-gray-700 mb-6">{description}</p>

                    <DynamicButton text={buttonText} size="lg" />
                </div>

                {/* Image */}
                <div className="w-1/2 flex justify-end">
                    <Image
                        src={imageSrc}
                        alt={title}
                        width={500}
                        height={400}
                        className=" sm:h-full sm:w-full object-contain "
                    />
                </div>
            </div>
        </div>
    );
}
