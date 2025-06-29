import { useGetFormProps } from "@/hooks/use-get-form-props";
import { FC } from "react";

import { InputField, InputFieldProps } from ".";

export const FormInputField: FC<InputFieldProps> = (initialProps) => {
    const props = useGetFormProps(initialProps);

    return <InputField {...props} />;
};
