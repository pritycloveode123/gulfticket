'use client';

import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';

type DynamicButtonProps = {
    text: string;
    size?: 'sm' | 'md' | 'lg';
};

const sizeClasses = {
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-3 px-6',
    lg: 'text-lg py-4 px-8',
};

const DynamicButton: React.FC<DynamicButtonProps> = ({ text, size = 'md' }) => {
    return (
        <Link
            href="https://gulfticket.com/Register"
            className={clsx(
                'inline-block font-bold text-white rounded-md shadow-md transition-all duration-300 text-center uppercase',
                sizeClasses[size],
                'w-full sm:w-auto',
                'bg-gradient-to-b from-[#FFD600] to-[#E99F00] hover:from-[#E99F00] hover:to-[#FFD600]'
            )}
        >
            {text}
        </Link>
    );

};

export default DynamicButton;
