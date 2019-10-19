import { FieldName } from '../types';
declare const _default: <FormValues extends Record<string, any>>(defaultValues: Partial<FormValues>, name: FieldName<FormValues>, defaultValue?: any) => Partial<FormValues> | FormValues[FieldName<FormValues>] | undefined;
export default _default;
