export function checkNotEmpty<V>(value: V | null | undefined, errorMsg: string): V {
    if (value === null || value === undefined) throw new Error(errorMsg);
    return value;
}