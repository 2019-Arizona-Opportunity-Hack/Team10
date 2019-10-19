import { FieldName } from '../types';
declare const _default: <FormValues extends Record<string, any>>(errors: Partial<Record<FieldName<FormValues>, import("../types").FieldError>>, pickList: FieldName<FormValues>[]) => Partial<Record<FieldName<FormValues>, import("../types").FieldError>>;
export default _default;
