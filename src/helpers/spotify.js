import Spotify from 'spotify-web-api-js';
import { getAccessToken } from './authentication';

const spotify = new Spotify();
spotify.setAccessToken(getAccessToken());
export function getTopTracks() {
    spotify.getMyTopTracks({ limit: 10 }, (err, data) => {
        try {
            console.log(data);
        }
        catch {
            console.log(err);
        }
    });
};