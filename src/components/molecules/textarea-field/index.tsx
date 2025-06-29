import { ComponentProps } from "react";

import { FieldWrapper, FieldWrapperProps } from "@/components/atoms/field-wrapper";
import { Textarea } from "../../ui/textarea";

export interface TextareaFieldProps extends ComponentProps<"textarea"> {
    field?: FieldWrapperProps;
}

export const TextareaField: React.FC<TextareaFieldProps> = ({ field, ...initialProps }) => {
    const props: TextareaFieldProps = {
        ...initialProps
    };

    if (field?.errorMessage) props["aria-invalid"] = "true";

    return (
        <FieldWrapper id={props.id} {...field}>
            <Textarea {...props} />
        </FieldWrapper>
    );
};
