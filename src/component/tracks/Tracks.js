import React, { useState, useEffect } from "react";
import './tracks.css';


function Tracks(props) {
    const [limit, setLimit] = useState(10);
    const [response, setResponse] = useState(null);
    useEffect(() => {
        const topTracks = props.tracks
        topTracks({ limit }, (err, data) => {
            if (err) return console.log(err);;
            setResponse(data);
        });
    }, [limit]);

    function getSongUri(song) {
        return song.slice(14);
    };

    return (
        <div>{
            response?.items.map((track, i) => {
                const albumImage = track.album.images[1].url;
                const artistsData = track.artists;
                const songUrl = track.external_urls.spotify;
                const songUri = track.uri;
                let artistNames = '';

                return (
                    <div key={i} className="albumContainer">
                        <a href={songUrl}>
                            <img src={albumImage} alt="" />
                        </a>
                        {
                            artistsData.map((artist, index) => {
                                if (artistsData.length - 1 === index) { //If last artist of collab song remove ","
                                    artistNames += `${artist.name}`
                                } else if (artistsData.length > 0) { //If not last artist add ","
                                    artistNames += `${artist.name}, `;
                                } else {
                                    artistNames += `${artist.name}`; //If single artist add nothing
                                };
                            })
                        }
                        <p className="trackTitle">{track.name}</p>
                        <p className="trackArtist">{artistNames}</p>

                        <iframe className="songIframe" title={track.name} src={"https://open.spotify.com/embed/track/" + getSongUri(songUri)} width="300" height="80" allowtransparency="true"></iframe>
                    </div>
                )
            })
        }
        </div >
    )
}


export default Tracks;