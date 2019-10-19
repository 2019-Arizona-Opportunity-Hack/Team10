import { Field, FieldsRefs, FieldValues } from '../types';
export default function findRemovedFieldAndRemoveListener<FormValues extends FieldValues>(fields: FieldsRefs<FormValues>, validateWithStateUpdate: Function | undefined, field: Field, forceDelete?: boolean): void;
