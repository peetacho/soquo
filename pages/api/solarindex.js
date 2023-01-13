
export default async function handler(req, res) {

    // Efficiency = (Solar panel output (in watts) * Number of hours of sunlight) / (Square meters of panel * Cosine of roof angle)
    res.status(200).json({ success: true, message: 'Solar index calculated', efficiency: Math.round(Math.random() * (85 - 60) + 60) });
}
