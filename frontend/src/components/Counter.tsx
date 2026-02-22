import { useEffect, useState } from "react";
import { useMotionValue, useTransform, animate } from "framer-motion";

interface CounterProps {
    value: number;
    suffix?: string;
}

export default function Counter({ value, suffix = "" }: CounterProps) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const controls = animate(count, value, {
            duration: 2,
            ease: "easeOut",
        });

        return controls.stop;
    }, [value, count]);

    // Use a listener to update local state because useTransform/useMotionValue 
    // don't trigger re-renders by default in a way that shows the number updating
    useEffect(() => {
        return rounded.on("change", (latest) => {
            setDisplayValue(latest);
        });
    }, [rounded]);

    return (
        <span>
            {displayValue}
            {suffix}
        </span>
    );
}
