import axios from 'axios'


export function getDonuts(): Promise<any> {
    return axios
        .get("https://grandcircusco.github.io/demo-apis/donuts.json")
        .then(response => response.data);
}

export function donutDetails(id: number): Promise<any> {
    return axios
        .get(`https://grandcircusco.github.io/demo-apis/donuts/${encodeURIComponent(id)}.json`)
        .then(response => response.data);
}