import { getCoordinates, getHoursOfSunlight } from "../../utils/Utils";

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

    const userCoordinateSunlightData = await getHoursOfSunlight(userCoordinateData.coordinates)
    if (!userCoordinateSunlightData.success) {
        res.status(404).json(userCoordinateSunlightData)
        return;
    }

    // Energy produced (in kJ) = Solar panel output (in watts) * Number of hours of sunlight (h) * 3.6 (kJ/Wh)
    var solarPanelOutput = 300; // watts
    var wattHourToKiloJoules = 3.6; // kJ/Wh
    const energyProduced = solarPanelOutput * userCoordinateSunlightData.day_length * wattHourToKiloJoules; // kJ

    // Oil (gasoline) replaced (in liter) = Energy produced (in kJ) / (Energy density of gasoline/diesel (in MJ/kg) * gasoline density (in kg/l) * 1000 (in kJ/MJ)) 
    var oilEnergyDensity = 45; // MJ/kg
    var gasolineDensity = 0.75; // kg/l
    var mJTokJ = 1000; // kJ/MJ
    const oilReplaced = energyProduced / (oilEnergyDensity * gasolineDensity * mJTokJ); // liter

    // Coal replaced (in kg) = Energy produced by solar panel (in kJ) / Energy density of coal (in kJ/kilogram)
    var coalEnergyDensity = 24; // MJ/kg
    const coalReplaced = energyProduced / (coalEnergyDensity * mJTokJ); // kg

    // Coal replaced (in kg) = Energy produced by solar panel (in kJ) / Energy density of coal (in kJ/kilogram)
    var co2Emissions = 0.11; // kg/kWh per year
    var carbonTreeSequestrationRate = 10; // 10kg/tree per year
    const treesSaved = ((energyProduced / 3600) * co2Emissions) / carbonTreeSequestrationRate; // tree

    res.status(200).json({
        success: true,
        message: 'Green Impact successfully calculated',
        energyProduced: energyProduced,
        oilReplaced: oilReplaced,
        coalReplaced: coalReplaced,
        treesSaved: treesSaved,
    });
}
