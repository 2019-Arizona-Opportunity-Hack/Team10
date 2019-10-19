import { FieldError, ValidateResult, Ref } from '../types';
export default function getValidateFunctionErrorObject(result: ValidateResult, ref: Ref, nativeError: Function, type?: string): FieldError | undefined;
