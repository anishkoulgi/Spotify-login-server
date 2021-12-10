import { Router } from 'express';
import { spotifyApi } from '../config';

const router = Router();

router.post('/login', async (req, res) => {
  try {
    const code = req.body.code;
    const resp = await spotifyApi.authorizationCodeGrant(code);

    return res.status(200).json({ token: resp.body.access_token });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: 'Bad Request' });
  }
});

export default router;
