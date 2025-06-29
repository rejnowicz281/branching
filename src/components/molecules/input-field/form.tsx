import { useGetFormProps } from "@/hooks/use-get-form-props";
import { FC } from "react";

import { useGetErrorByFieldName } from "@/hooks/use-get-error-by-field-name";
import { InputField, InputFieldProps } from ".";

export const FormInputField: FC<InputFieldProps> = ({ field, ...initialProps }) => {
    const props = useGetFormProps(initialProps);

    const errorMessage = useGetErrorByFieldName(props.name);

    return <InputField {...props} field={{ errorMessage, ...field }} />;
};
