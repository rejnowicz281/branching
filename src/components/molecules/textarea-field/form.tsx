import { useGetFormProps } from "@/hooks/use-get-form-props";
import { FC } from "react";

import { useGetErrorByFieldName } from "@/hooks/use-get-error-by-field-name";
import { TextareaField, TextareaFieldProps } from ".";

export const FormTextareaField: FC<TextareaFieldProps> = ({ field, ...initialProps }) => {
    const props = useGetFormProps(initialProps);

    const errorMessage = useGetErrorByFieldName(props.name);

    return <TextareaField {...props} field={{ errorMessage, ...field }} />;
};
