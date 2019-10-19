import React from 'react';
import { FieldValues, FieldName, Options, OnSubmit, ValidationPayload, ElementLike } from './types';
export default function useForm<FormValues extends FieldValues = FieldValues>({ mode, reValidateMode, validationSchema, defaultValues, validationFields, nativeValidation, submitFocusError, validationSchemaOption, }?: Options<FormValues>): {
    register: {
        <Element_1 extends ElementLike = ElementLike>(validateRule: Partial<{
            required: string | boolean;
            min: string | number | {
                value: string | number;
                message: string;
            };
            max: string | number | {
                value: string | number;
                message: string;
            };
            maxLength: string | number | {
                value: string | number;
                message: string;
            };
            minLength: string | number | {
                value: string | number;
                message: string;
            };
            pattern: RegExp | {
                value: RegExp;
                message: string;
            };
            validate: import("./types").Validate | Record<string, import("./types").Validate> | {
                value: import("./types").Validate | Record<string, import("./types").Validate>;
                message: string;
            };
        }>): (ref: Element_1 | null) => void;
        <Element_2 extends ElementLike = ElementLike>(ref: Element_2 | null, validationOptions?: Partial<{
            required: string | boolean;
            min: string | number | {
                value: string | number;
                message: string;
            };
            max: string | number | {
                value: string | number;
                message: string;
            };
            maxLength: string | number | {
                value: string | number;
                message: string;
            };
            minLength: string | number | {
                value: string | number;
                message: string;
            };
            pattern: RegExp | {
                value: RegExp;
                message: string;
            };
            validate: import("./types").Validate | Record<string, import("./types").Validate> | {
                value: import("./types").Validate | Record<string, import("./types").Validate>;
                message: string;
            };
        }> | undefined): void;
    };
    unregister: {
        (name: FieldName<FormValues>): void;
        (names: FieldName<FormValues>[]): void;
    };
    handleSubmit: (callback: OnSubmit<FormValues>) => (e: React.BaseSyntheticEvent<object, any, any>) => Promise<void>;
    watch: {
        (): FormValues;
        (field: FieldName<FormValues>, defaultValue?: string | undefined): FormValues[FieldName<FormValues>];
        (fields: FieldName<FormValues>[], defaultValues?: Partial<FormValues> | undefined): Partial<FormValues>;
    };
    reset: (values?: FormValues | undefined) => void;
    clearError: {
        (): void;
        (name: FieldName<FormValues>): void;
        (names: FieldName<FormValues>[]): void;
    };
    setError: (name: FieldName<FormValues>, type: string, message?: string | undefined, ref?: any) => void;
    setValue: <Name extends FieldName<FormValues>>(name: Name, value: FormValues[Name], shouldValidate?: boolean | undefined) => void | Promise<boolean>;
    triggerValidation: (payload?: ValidationPayload<FieldName<FormValues>, FormValues[FieldName<FormValues>]> | ValidationPayload<FieldName<FormValues>, FormValues[FieldName<FormValues>]>[] | undefined, shouldRender?: boolean | undefined) => Promise<boolean>;
    getValues: (payload?: {
        nest: boolean;
    } | undefined) => FormValues;
    errors: Partial<Record<FieldName<FormValues>, import("./types").FieldError>>;
    formState: {
        isValid: boolean;
        dirty: boolean;
        isSubmitted: boolean;
        submitCount: number;
        touched: FieldName<FormValues>[];
        isSubmitting: boolean;
    };
};
