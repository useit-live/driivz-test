export const getDateTimeFromTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return "Date: " + date.getDate() +
        "/" + (date.getMonth() + 1) +
        "/" + date.getFullYear() +
        " " + date.getHours() +
        ":" + date.getMinutes() +
        ":" + date.getSeconds()
}

export const fetcher = (...args) => fetch(...args).then(res => res.json())

export const ISS_URL = 'http://api.open-notify.org/iss-now.json'
