export const arrayToString = (arr: any[]) =>
    JSON.stringify(arr).replaceAll('[', '{').replaceAll(']', '}');
