import {checkNotEmpty} from "./utils/preconditions.ts";

export type Env = {
    API_ROOT: string;
}

export const env: Env = {
    API_ROOT: checkNotEmpty(import.meta.env.VITE_API_ROOT, "API Root must be specified")
}
