import { FieldName } from '../types';
declare const _default: <FormValues extends Record<string, any>>(fieldValues: FormValues, fieldName: FieldName<FormValues>, watchFields: Partial<Record<FieldName<FormValues>, boolean>>) => FormValues[FieldName<FormValues>] | Partial<FormValues> | undefined;
export default _default;
