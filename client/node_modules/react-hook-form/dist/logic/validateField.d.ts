import { Field, FieldName } from '../types';
declare const _default: <FormValues extends Record<string, any>>({ ref, ref: { type, value, name, checked }, options, required, maxLength, minLength, min, max, pattern, validate, }: Field, fields: Record<string, any>, nativeValidation?: boolean | undefined) => Promise<Partial<Record<FieldName<FormValues>, import("../types").FieldError>>>;
export default _default;
