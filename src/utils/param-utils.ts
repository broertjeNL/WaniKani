export const cleanParams = (params: Record<string, any>) =>
    Object.entries(params).reduce(
        (acc, curr) => ({
            ...acc,
            ...(curr[1] && { [curr[0]]: curr[1] }),
        }),
        {},
    );
