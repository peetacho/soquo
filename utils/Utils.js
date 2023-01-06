//////////// BACKEND ////////////
import axios from "axios";

export const getCoordinates = async (postalCode) => {
    try {
        const response = await axios.get(
            'https://geocoder.ca/?geoit=XML&json=1',
            {
                params: {
                    locate: postalCode,
                    country: 'canada'
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

export const getAverageElectricityCost = (countryCode) => {

    // https://www.energyhub.org/electricity-prices/#post-7165
    const countryToCostDict = {
        'ON': 0.13,
        'QC': 0.073,
        'MB': 0.099,
        'BC': 0.126,
        'NB': 0.127,
        'NL': 0.138,
        'AB': 0.166,
        'NS': 0.171,
        'PE': 0.174,
        'SK': 0.181,
        'YT': 0.187,
        'NU': 0.375,
        'NT': 0.382,
    }

    if (countryCode in countryToCostDict) {
        return countryToCostDict[countryCode];
    }
    return 0.179 // canada average - the code reaches here only if countryCode is not a valid canadian province
}

//////////// FRONTEND ////////////
import { quizOrder } from "./constants";

// route is from useRouter
export const getCurrentQuestion = (router) => {
    return quizOrder.filter(question => router.asPath === '/form/' + question.route)[0]
}

export const updateFormAnswers = (router, ans) => {
    var questionIndex = getCurrentQuestion(router).id
    var formAnswersList = JSON.parse(localStorage.getItem("soquo-form-answers"))

    // when soquo-form-answers has not been created yet (formAnswersList is null) or formAnswersList is empty
    if (formAnswersList === null || formAnswersList.length === 0) {
        formAnswersList = []
        for (var item in quizOrder) {
            formAnswersList.push({
                answer: '',
                ...item
            })
        }
    }
    formAnswersList[questionIndex].answer = ans;
    localStorage.setItem("soquo-form-answers", JSON.stringify(formAnswersList))
}

export const deleteFormAnswers = () => {
    localStorage.setItem("soquo-form-answers", "[]")
}