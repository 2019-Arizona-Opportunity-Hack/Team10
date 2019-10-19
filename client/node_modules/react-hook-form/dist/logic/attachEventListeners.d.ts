import { Field } from '../types';
export default function attachEventListeners({ field, validateAndStateUpdate, isRadio, isOnBlur, isReValidateOnBlur, }: {
    field: Field;
    isRadio: boolean;
    validateAndStateUpdate?: Function;
    isOnBlur: boolean;
    isReValidateOnBlur: boolean;
}): void;
