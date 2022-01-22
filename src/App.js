import Hero from "./component/landingPage/Hero";
import { userHasAccessToken, getAccessToken } from "./helpers/authentication";
import Tracks from "./component/tracks/Tracks";
import SpotifyWebApi from "spotify-web-api-js";
function App() {
  if (userHasAccessToken()) {
    const spotify = new SpotifyWebApi();
    spotify.setAccessToken(getAccessToken());
    return (
      <div>
        <Tracks tracks={spotify.getMyTopTracks} />
      </div>
    )
  }
  return (
    <Hero />
  );
}

export default App;
