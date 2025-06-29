import { useFormContext } from "react-hook-form";

import { useGetErrorByFieldName } from "./use-get-error-by-field-name";

export const useGetFormProps = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    initialProps: React.PropsWithoutRef<any> | React.PropsWithChildren<any>
) => {
    const name = initialProps.name;

    const formContext = useFormContext();
    const registerForm = name && formContext?.register(name);
    const errorMessage = useGetErrorByFieldName(name);

    return {
        ...initialProps,
        ...registerForm,
        errorMessage: errorMessage || initialProps.errorMessage
    };
};
