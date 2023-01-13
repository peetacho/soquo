import { getAverageElectricityCost, getCoordinates } from "../../utils/Utils";

export default async function handler(req, res) {
    if (!req.query.postalCode) {
        res.status(400).json({ success: false, message: 'Bad request. Missing postalCode in params.' })
        return;
    }

    // spaceAllowed is in sqft
    if (!req.query.spaceAllowed) {
        res.status(400).json({ success: false, message: 'Bad request. Missing spaceAllowed in params.' })
        return;
    }

    const averageSizeOfPanel = 18 // sqft
    if (req.query.spaceAllowed < averageSizeOfPanel) {
        res.status(400).json({ success: false, message: 'Space allowed must be greater than or equal to 18 sqft or 1.67225 sqm' })
        return;
    }

    const userPostalCode = req.query.postalCode;
    const userCoordinateData = await getCoordinates(userPostalCode)
    if (!userCoordinateData.success) {
        res.status(404).json(userCoordinateData)
        return;
    }

    const userElectricityCost = getAverageElectricityCost(userCoordinateData.province); // $/kWh

    // Recommended number of solar panels = FLOOR(space allowed (sqft) / physical size of panel (sqft))
    const recommendedNumberOfSolarPanels = Math.floor(req.query.spaceAllowed / averageSizeOfPanel)

    // Savings in electricity costs = (Cost of electricity * Electricity produced by the solar panel)
    var annualHoursOfSunlight = 2000; // hr
    const solarPanelOutput = 300 * recommendedNumberOfSolarPanels // watt
    var whToKWh = 0.001; // kWh/Wh
    const energyProduced = solarPanelOutput * annualHoursOfSunlight * whToKWh; // kWh
    const savings = userElectricityCost * energyProduced // $

    res.status(200).json({
        success: true,
        message: 'Costs and Savings successfully calculated',
        breakevenCost: Math.round((1 + Math.random()) * 10),
        userElectricityCost: userElectricityCost,
        solarPanelOutput: solarPanelOutput,
        recommendedNumberOfSolarPanels: recommendedNumberOfSolarPanels,
        savings: savings
    });
}
