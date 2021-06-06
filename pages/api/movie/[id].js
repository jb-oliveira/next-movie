import { tmbdApiKey, tmbdUrl } from '../../../lib/tmdb'

export default  async (req, res) => {
    let id = req.query.id;

    const response = await fetch(`${tmbdUrl}/movie/${id}?api_key=${tmbdApiKey}`);
    const json = await response.json();

    res.status(200).json({ 
        info: json
    })
}
