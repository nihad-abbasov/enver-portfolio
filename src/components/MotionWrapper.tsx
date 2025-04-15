'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    preset?: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight';
    delay?: number;
    stagger?: boolean;
    as?: string;
}

const variants = {
    fadeUp: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    },
    fadeDown: {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 }
    },
    fadeLeft: {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    },
    fadeRight: {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 }
    }
};

export const MotionWrapper = ({
    children,
    preset = 'fadeUp',
    delay = 0,
    stagger = false,
    as: Component = 'div',
    ...props
}: MotionWrapperProps) => {
    const MotionComponent = motion(Component);

    return (
        <MotionComponent
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: delay,
                staggerChildren: stagger ? 0.1 : undefined
            }}
            variants={variants[preset]}
            {...props}
        >
            {children}
        </MotionComponent>
    );
};
