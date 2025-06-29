import { FieldErrors, FieldValues, useFormContext } from "react-hook-form";

export function useGetErrorByFieldName(fieldName?: string) {
    const formContext = useFormContext();

    if (!formContext || !fieldName) return "";

    const obj = formContext.formState.errors;

    return getErrorByFieldName(fieldName, obj);
}

const getErrorByFieldName = (fieldName: string, obj: FieldErrors<FieldValues>) => {
    if (fieldName.includes(".") && obj && typeof obj === "object") {
        return getErrorByFieldName(
            fieldName.substring(fieldName.indexOf(".") + 1, fieldName.length),
            obj[fieldName.substring(0, fieldName.indexOf("."))] as FieldErrors<FieldValues>
        );
    }

    if (typeof obj === "object") return obj[fieldName]?.message?.toString();
};
