export const cleanParams = (params) => Object.entries(params).reduce((acc, curr) => ({
    ...acc,
    ...(curr[1] && { [curr[0]]: Array.isArray(curr[1]) ? curr[1].join(',') : curr[1] }),
}), {});
