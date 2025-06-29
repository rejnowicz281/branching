import { ComponentProps } from "react";

import { FieldWrapper, FieldWrapperProps } from "@/components/atoms/field-wrapper";
import { Input } from "@/components/ui/input";

export interface InputFieldProps extends ComponentProps<"input"> {
    field?: FieldWrapperProps;
}

export const InputField: React.FC<InputFieldProps> = ({ field, ...initialProps }) => {
    const props: InputFieldProps = {
        ...initialProps
    };

    if (field?.errorMessage) props["aria-invalid"] = "true";

    return (
        <FieldWrapper id={props.id} {...field}>
            <Input {...props} />
        </FieldWrapper>
    );
};
