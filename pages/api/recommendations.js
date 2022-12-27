import { db } from "../../utils/db";
import { getDoc, doc } from "firebase/firestore";
import { getCoordinates, getDistance } from "../../utils/Utils";

export default async function handler(req, res) {
    const userPostalCode = req.query.postalCode
    const userCoordinateData = await getCoordinates(userPostalCode);
    const coord2 = {
        latitude: 43.999741,
        longitude: -79.455489
    }
    const distance = getDistance(userCoordinateData.coordinates, coord2);
    res.status(200).json({ success: true, message: 'coordinates found', data: userCoordinateData, distance: distance });
}
