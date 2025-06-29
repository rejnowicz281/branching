import { useGetFormProps } from "@/hooks/use-get-form-props";
import { FC } from "react";

import { TextareaField, TextareaFieldProps } from ".";

export const FormTextareaField: FC<TextareaFieldProps> = (initialProps) => {
    const props = useGetFormProps(initialProps);

    return <TextareaField {...props} />;
};
