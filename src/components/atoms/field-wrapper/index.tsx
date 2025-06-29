import { FC, ReactNode } from "react";

import { AnimatePresence } from "../animate-presence";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils/general";

export interface FieldWrapperProps {
    id?: string;
    children?: ReactNode;
    label?: string;
    helperText?: string;
    errorMessage?: string;
}

export const FieldWrapper: FC<FieldWrapperProps> = ({ helperText, errorMessage, label, id, children }) => {
    return (
        <div className={"flex flex-col gap-1"}>
            {label && <Label htmlFor={id}>{label}</Label>}
            {children}
            <AnimatePresence show={!!errorMessage || !!helperText}>
                <span
                    className={cn(
                        "text-xs",
                        errorMessage ? "text-red-500" : "text-gray-600",
                        !errorMessage && "invisible"
                    )}
                >
                    {errorMessage || "."}
                </span>
                {!errorMessage && <span className={"text-xs text-gray-600"}>{helperText}</span>}
            </AnimatePresence>
        </div>
    );
};
