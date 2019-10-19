import { FieldValues, FieldName } from '../types';
export default function shouldUpdateWithError<FormValues extends FieldValues>({ errors, name, error, validFields, fieldsWithValidation, }: {
    errors: any;
    error: any;
    name: FieldName<FormValues>;
    validFields: Set<FieldName<FormValues>>;
    fieldsWithValidation: Set<FieldName<FormValues>>;
}): boolean;
