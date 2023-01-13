import { db } from "../../utils/db";
import { getDocs, query, collection } from "firebase/firestore";
import { getCoordinates, getDistance } from "../../utils/Utils";

export default async function handler(req, res) {
    if (!req.query.postalCode) {
        res.status(400).json({ success: false, message: 'Bad request. Missing postalCode in params.', contractors: null })
        return;
    }
    const userPostalCode = req.query.postalCode;
    const userCoordinateData = await getCoordinates(userPostalCode)
    if (!userCoordinateData.success) {
        res.status(404).json(userCoordinateData)
        return;
    }
    const querydb = query(collection(db, "Contractors"));
    var contractorRecs = [];
    const querySnapshot = await getDocs(querydb);
    querySnapshot.forEach((doc) => {
        contractorRecs.push({
            ...doc.data(),
            distanceToUser: getDistance(userCoordinateData.coordinates, doc.data().coordinates)
        })
    });
    contractorRecs = contractorRecs.sort((a, b) => a.distanceToUser - b.distanceToUser).slice(0, 4);
    res.status(200).json({ success: true, message: 'Recommendations found', contractors: contractorRecs });
}
