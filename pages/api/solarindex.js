
export default async function handler(req, res) {

    if (!req.query.postalCode) {
        res.status(400).json({ success: false, message: 'Bad request. Missing postalCode in params.' })
        return;
    }

    if (!req.query.solarPanelOutput) {
        res.status(400).json({ success: false, message: 'Bad request. Missing solarPanelOutput in params.' })
        return;
    }

    if (!req.query.energyProduced) {
        res.status(400).json({ success: false, message: 'Bad request. Missing energyProduced in params.' })
        return;
    }

    if (!req.query.savings) {
        res.status(400).json({ success: false, message: 'Bad request. Missing savings in params.' })
        return;
    }

    // Efficiency = (Solar panel output (in watts) * Number of hours of sunlight) / (Square meters of panel * Cosine of roof angle)
    const efficiency = (parseInt(req.query.solarPanelOutput) + parseInt(req.query.energyProduced) / 3600 + parseInt(req.query.savings)) / 20000
    res.status(200).json({
        success: true,
        message: 'Solar index calculated',
        efficiency: Math.floor(efficiency * 100) > 100 ? 100 : Math.floor(efficiency * 100)
    });
}
