import {env} from "../../../env.ts";

const REGIONS_API_ROOT = `${env.API_ROOT}/api/v1/regions`;

export async function fetchRegions(): Promise<string[]> {
    return fetch(REGIONS_API_ROOT).then(res => res.json());
}