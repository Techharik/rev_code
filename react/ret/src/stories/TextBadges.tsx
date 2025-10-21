
import React from "react";
import { cva } from 'class-variance-authority'

type BagesProps = {
    label: String,
    color?: 'primary' | 'secondary',
    size?: 'small' | 'medium' | 'large',
    handler: () => void
}

const badgesClasses = cva('px-2 py-1 rounded-lg font-[poppins]', {
    variants: {
        color: {
            primary: 'bg-amber-500/70 text-black ',
            secondary: 'bg-green-500/70 text-white'
        },
        size: {
            small: 'text-sm',
            medium: 'font-semibold text-md',
            large: 'font-bold text-lg'
        }
    },

    defaultVariants: {
        color: 'primary',
        size: "small"
    }
})

const TextBadges = ({ label, color, size, handler }: BagesProps) => {

    return <>
        <button className={badgesClasses({ size, color })} onClick={handler}>{label}</button>
    </>;
};

export default TextBadges;
