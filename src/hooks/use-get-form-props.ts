import { useFormContext } from "react-hook-form";

export const useGetFormProps = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    initialProps: React.PropsWithoutRef<any> | React.PropsWithChildren<any>
) => {
    const name = initialProps.name;

    const formContext = useFormContext();
    const registerForm = name && formContext?.register(name);

    return {
        ...initialProps,
        ...registerForm
    };
};
