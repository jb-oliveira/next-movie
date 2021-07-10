import { tmbdApiKey, tmbdUrl } from '../../../lib/tmdb'

export default  async (req, res) => {
    let q = req.query.q;

    const response = await fetch(`${tmbdUrl}/search/movie?api_key=${tmbdApiKey}&query=${q}`);
    const json = await response.json();

    res.status(200).json({ 
        list: json.results
    })
}
