// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {tmbdApiKey} from '../../lib/tmdb'

export default (req, res) => {
  res.status(200).json({ name: tmbdApiKey })
}
