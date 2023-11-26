export const getDateTimeFromTimestamp = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleString();
}

export const fetcher = (...args) => fetch(...args).then(res => res.json())
