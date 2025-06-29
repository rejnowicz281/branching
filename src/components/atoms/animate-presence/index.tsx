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
                "transition-all duration-300 ease-in-out",
                show ? "grid grid-rows-1" : "grid grid-rows-0",
                classNames?.wrapper
            )}
        >
            <div className={clsx("overflow-hidden", classNames?.content)}>{children}</div>
        </div>
    );
};
