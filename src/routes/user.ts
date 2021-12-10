import { Response, Router } from 'express';
import { spotifyApi } from '../config';

const router = Router();

router.get('/tracks', async (req: any, res: Response) => {
  try {
    const token = req.token;
    spotifyApi.setAccessToken(token);
    const data = await spotifyApi.getMyTopTracks({ limit: 10 });
    const topTracks = data.body.items;
    return res.json({ tracks: topTracks });
  } catch (error) {
    return res.status(500).json({ msg: 'Internal Server Error' });
  }
});

router.get('/artists', async (req: any, res: Response) => {
  try {
    const token = req.token;
    spotifyApi.setAccessToken(token);
    const data = await spotifyApi.getMyTopArtists({ limit: 10 });
    const topArtists = data.body.items;
    console.log(topArtists);
    return res.json({ artists: topArtists });
  } catch (error) {
    return res.status(500).json({ msg: 'Internal Server Error' });
  }
});

export default router;
