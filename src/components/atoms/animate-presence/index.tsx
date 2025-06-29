import { cn } from "@/lib/utils/general";
import clsx from "clsx";
import { FC } from "react";

interface AnimatePresenceProps {
    classNames?: {
        wrapper?: string;
        content?: string;
    };
    show?: boolean;
    children?: React.ReactNode;
}

export const AnimatePresence: FC<AnimatePresenceProps> = ({ classNames, children, show }) => {
    return (
        <div
            className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-in-out",
                show ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                classNames?.wrapper
            )}
        >
            <div className={clsx("overflow-hidden", classNames?.content)}>{children}</div>
        </div>
    );
};
