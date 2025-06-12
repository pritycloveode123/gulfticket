'use client';

import React from 'react';
import clsx from 'clsx';

type DynamicButtonProps = {
    text: string;
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
};

const sizeClasses = {
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-3 px-6',
    lg: 'text-lg py-4 px-8',
};

const DynamicButton: React.FC<DynamicButtonProps> = ({ text, size = 'md', onClick }) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                'font-bold text-white rounded-md shadow-md transition-all duration-300',
                sizeClasses[size],
                'bg-gradient-to-b from-[#FFD600] to-[#E99F00] hover:from-[#E99F00] hover:to-[#FFD600]'
            )}
        >
            {text}
        </button>
    );
};

export default DynamicButton;
