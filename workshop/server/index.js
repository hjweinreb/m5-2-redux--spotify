require('dotenv').config();
require('@babel/register');

if (
  process.env.SPOTIFY_CLIENT_ID === 'YOURKEYHERE' ||
  process.env.SPOTIFY_SECRET === 'YOURKEYHERE'
) {
  throw new Error(
    'You need to copy over your Spotify client key and secret! See the workshop README for more information.'
  );
}

require('./server.js');
