'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode, ElementType } from 'react';
import React from 'react';

type Preset =
    | 'fadeUp'
    | 'fadeDown'
    | 'fadeLeft'
    | 'fadeRight'
    | 'scaleIn'
    | 'rotateIn';

interface MotionWrapperProps {
    children: ReactNode;
    as?: ElementType;
    className?: string;
    preset?: Preset;
    duration?: number;
    delay?: number;
    once?: boolean;
    stagger?: boolean;
    staggerDelay?: number;
    customVariants?: Variants;
}

const presetVariants: Record<Preset, Variants> = {
    fadeUp: {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    },
    fadeDown: {
        hidden: { opacity: 0, y: -40 },
        visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0 },
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    },
    rotateIn: {
        hidden: { opacity: 0, rotate: -5 },
        visible: { opacity: 1, rotate: 0 },
    },
};

export const MotionWrapper = ({
    children,
    as: MotionElement = 'div',
    className,
    preset = 'fadeUp',
    duration = 0.8,
    delay = 0,
    once = true,
    stagger = false,
    staggerDelay = 0.15,
    customVariants,
}: MotionWrapperProps) => {
    const variants = customVariants || presetVariants[preset];
    const Component = motion(MotionElement); // 👈 fix is here

    const parentVariants: Variants = {
        hidden: {},
        visible: {
            transition: stagger ? { staggerChildren: staggerDelay } : {},
        },
    };

    return (
        <Component
            className={className}
            variants={stagger ? parentVariants : variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once }}
            transition={!stagger ? { duration, delay } : undefined}
        >
            {stagger
                ? React.Children.map(children, (child) => (
                    <motion.div variants={variants}>{child}</motion.div>
                ))
                : children}
        </Component>
    );
};
