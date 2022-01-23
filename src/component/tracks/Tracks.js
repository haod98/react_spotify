import React, { useState, useEffect } from "react";

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
                    <div key={i} className="flex flex-col items-center my-12 md:my-1">
                        <div className="outline outline-primary outline-3 md:flex md:items-center md:gap-5">
                            <a href={songUrl}>
                                <img src={albumImage} alt="" className="md:max-w-[160px]" />
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
                            <div className="my-2 max-w-[300px] min-w-[300px] py-6">
                                <p className="text-2xl font-heading text-center">{track.name}</p>
                                <p className="text-primary text-center font-semibold">{artistNames}</p>
                            </div>
                            <iframe className="songIframe w-[300px] h-[80px]" title={track.name} src={"https://open.spotify.com/embed/track/" + getSongUri(songUri)}></iframe>
                        </div>
                    </div>
                )
            })
        }
        </div >
    )
}


export default Tracks;