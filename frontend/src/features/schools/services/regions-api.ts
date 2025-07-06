const REGIONS_API_ROOT = `${import.meta.env.VITE_API_ROOT}/regions`;

export async function fetchRegions(): Promise<string[]> {
    return fetch(REGIONS_API_ROOT).then(res => res.json());
}