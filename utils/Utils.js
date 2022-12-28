import axios from "axios";

export const getCoordinates = async (postalCode) => {
    try {
        const response = await axios.get(
            'https://geocoder.ca/?geoit=XML&json=1',
            {
                params: {
                    locate: postalCode,
                },
            },
        );

        const data = response.data;
        return {
            success: true,
            coordinates: {
                latitude: data.latt,
                longitude: data.longt,
            },
            postalCode: data.postal,
            city: data.standard.city,
            province: data.standard.prov,
        };
    }
    catch {
        return {
            success: false,
            message: 'Postal Code ' + postalCode + ' is invalid or does not exist.'
        }
    }
}

export const getHoursOfSunlight = async (coord) => {
    try {
        const response = await axios.get(
            'https://api.sunrise-sunset.org/json',
            {
                params: {
                    lat: coord.latitude,
                    lng: coord.longitude,
                    formatted: 0,
                },
            },
        );

        const data = response.data;
        return {
            success: true,
            sunrise: data.results.sunrise,
            sunset: data.results.sunset,
            day_length: data.results.day_length / 3600, // convert seconds to hours
        };
    }
    catch {
        return {
            success: false,
            message: `Coordinates (${coord.latitude}, ${coord.longitude}) is invalid or hours of sunlight is not available for that location.`
        }
    }
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
