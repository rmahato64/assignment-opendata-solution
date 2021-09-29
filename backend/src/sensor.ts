import fetch from 'node-fetch';
const { ACCESS_TOKEN, SENSOR_URL } = process.env;

export function getSensorData() {
    const headers = { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } };
    return fetch(SENSOR_URL, headers)
        .then((res) => res.json());
};
