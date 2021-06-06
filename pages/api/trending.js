import { tmbdApiKey, tmbdUrl } from '../../lib/tmdb'

export default  async (req, res) => {

    const response = await fetch(`${tmbdUrl}/trending/movie/week?api_key=${tmbdApiKey}`);
    const json = await response.json();

    res.status(200).json({ 
        list: json.results
    })
}
