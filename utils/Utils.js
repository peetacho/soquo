import axios from "axios";

export const getCoordinates = async (postalCode) => {
    const response = await axios.get(
        'https://geocoder.ca/?geoit=XML&json=1',
        {
            params: {
                locate: postalCode,
            },
        },
    );

    const html = response.data;
    return {
        coordinates: {
            latitude: html.latt,
            longitude: html.longt,
        },
        postalCode: html.postal,
        city: html.standard.city,
        province: html.standard.prov,
    };
}

export const getDistance = (coord1, coord2) => {
    // Convert the coordinates to radians
    const lat1Rad = coord1.latitude * Math.PI / 180;
    const lng1Rad = coord1.longitude * Math.PI / 180;
    const lat2Rad = coord2.latitude * Math.PI / 180;
    const lng2Rad = coord2.longitude * Math.PI / 180;

    // Calculate the difference between the coordinates
    const latDelta = lat2Rad - lat1Rad;
    const lngDelta = lng2Rad - lng1Rad;

    // Use the Haversine formula to calculate the distance
    const a = Math.sin(latDelta / 2) * Math.sin(latDelta / 2) +
        Math.cos(lat1Rad) * Math.cos(lat2Rad) *
        Math.sin(lngDelta / 2) * Math.sin(lngDelta / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = 6371 * c; // 6371 is the radius of the Earth in kilometers

    return distance; // in kilometers
}
