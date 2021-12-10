import SpotifyWebApi from 'spotify-web-api-node';

const credentials = {
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
};

export const spotifyApi = new SpotifyWebApi(credentials);
