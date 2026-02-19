import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealProps {
    children: ReactNode;
    width?: 'fit-content' | '100%';
    delay?: number;
    duration?: number;
    y?: number;
    x?: number;
}

export const Reveal = ({
    children,
    width = 'fit-content',
    delay = 0.2,
    duration = 0.5,
    y = 25,
    x = 0,
}: RevealProps) => {
    return (
        <div style={{ position: 'relative', width, overflow: 'visible' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y, x },
                    visible: { opacity: 1, y: 0, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration, delay, ease: 'easeOut' }}
            >
                {children}
            </motion.div>
        </div>
    );
};
