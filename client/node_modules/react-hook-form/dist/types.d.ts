import * as React from 'react';
export declare type BaseFieldValue = any;
export declare type FieldValues = Record<string, BaseFieldValue>;
export declare type RawFieldName<FormValues extends FieldValues> = Extract<keyof FormValues, string>;
export declare type FieldName<FormValues extends FieldValues> = RawFieldName<FormValues> | string;
export declare type FieldValue<FormValues extends FieldValues> = FormValues[FieldName<FormValues>];
export declare type Inputs = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
export declare type Ref = Inputs | any;
declare type Mode = keyof ValidationMode;
export declare type OnSubmit<FormValues extends FieldValues> = (data: FormValues, e: React.BaseSyntheticEvent) => void | Promise<void>;
export interface ValidationMode {
    onBlur: 'onBlur';
    onChange: 'onChange';
    onSubmit: 'onSubmit';
}
export declare type SchemaValidateOptions = Partial<{
    strict: boolean;
    abortEarly: boolean;
    stripUnknown: boolean;
    recursive: boolean;
    context: object;
}>;
export interface Schema<Data> {
    validate(value: FieldValues, options?: SchemaValidateOptions): Promise<Data>;
}
export declare type Options<FormValues extends FieldValues = FieldValues> = Partial<{
    mode: Mode;
    reValidateMode: Mode;
    defaultValues: Partial<FormValues>;
    validationSchemaOption: SchemaValidateOptions;
    validationFields: FieldName<FormValues>[];
    validationSchema: any;
    nativeValidation: boolean;
    submitFocusError: boolean;
}>;
export interface MutationWatcher {
    disconnect: VoidFunction;
    observe?: any;
}
declare type ValidationOptionObject<Value> = Value | {
    value: Value;
    message: string;
};
export declare type ValidationTypes = number | string | RegExp;
export declare type ValidateResult = string | boolean | void | Promise<string> | Promise<boolean>;
export declare type Validate = (data: BaseFieldValue) => ValidateResult;
export declare type ValidationOptions = Partial<{
    required: boolean | string;
    min: ValidationOptionObject<number | string>;
    max: ValidationOptionObject<number | string>;
    maxLength: ValidationOptionObject<number | string>;
    minLength: ValidationOptionObject<number | string>;
    pattern: ValidationOptionObject<RegExp>;
    validate: Validate | Record<string, Validate> | {
        value: Validate | Record<string, Validate>;
        message: string;
    };
}>;
export interface FieldError {
    ref: Ref;
    type: string;
    message?: string;
    isManual?: boolean;
}
export declare type ValidatePromiseResult = {} | void | FieldError;
export interface Field extends ValidationOptions {
    ref: Ref;
    mutationWatcher?: MutationWatcher;
    options?: {
        ref: Ref;
        mutationWatcher?: MutationWatcher;
    }[];
}
export declare type FieldsRefs<FormValues extends FieldValues> = Partial<Record<FieldName<FormValues>, Field>>;
export declare type FieldErrors<FormValues extends FieldValues> = Partial<Record<FieldName<FormValues>, FieldError>>;
export interface SubmitPromiseResult<FormValues extends FieldValues> {
    errors: FieldErrors<FormValues>;
    values: FormValues;
}
export interface SchemaValidationResult<FormValues> {
    fieldErrors: FieldErrors<FormValues>;
    result: FieldValues;
}
export interface ValidationPayload<Name, Value> {
    name: Name;
    value?: Value;
}
export interface FormState<FormValues extends FieldValues = FieldValues> {
    dirty: boolean;
    isSubmitted: boolean;
    submitCount: number;
    touched: FieldName<FormValues>[];
    isSubmitting: boolean;
    isValid: boolean;
}
export interface ElementLike {
    name: string;
    type?: string;
    value?: string;
    checked?: boolean;
    options?: any;
}
export {};
