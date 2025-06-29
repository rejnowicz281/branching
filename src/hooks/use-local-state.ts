import { Dispatch, useEffect, useState } from "react";

export const useLocalState = <T>(key: string, initialValue?: T): [T, Dispatch<React.SetStateAction<T>>] => {
    const [state, setState] = useState<T>(() => {
        if (typeof window === "undefined") {
            return initialValue || null;
        }

        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue || null;
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem(key, JSON.stringify(state));
        }
    }, [key, state]);

    return [state, setState];
};
