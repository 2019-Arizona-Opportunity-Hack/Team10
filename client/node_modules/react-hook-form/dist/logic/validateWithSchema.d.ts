import { FieldValues, SchemaValidationResult, SchemaValidateOptions, Schema } from '../types';
export declare const parseErrorSchema: <FormValues>(error: Record<string, any>) => Partial<Record<import("../types").FieldName<FormValues>, import("../types").FieldError>>;
export default function validateWithSchema<FormValues>(validationSchema: Schema<FormValues>, validationSchemaOption: SchemaValidateOptions, data: FieldValues): Promise<SchemaValidationResult<FormValues>>;
