import { MutationWatcher } from '../types';
interface RadioFieldResult {
    isValid: boolean;
    value: number | string;
}
declare const _default: (options?: {
    ref?: any;
    mutationWatcher?: MutationWatcher | undefined;
}[] | undefined) => RadioFieldResult;
export default _default;
