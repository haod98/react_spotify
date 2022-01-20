export function authentication() {
    const client_id = 'd9a8b2f7634d48549a496954be94156f';
    const redirect_uri = 'http://localhost:3000/'
    const scope = encodeURI('user-top-read playlist-modify-public');
    return `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scope}`
};

export function getAccessToken() {
    const searchParams = new URLSearchParams(window.location.hash);
    return searchParams.get('#access_token');
}

export function userHasAccessToken() {
    if (getAccessToken()) {
        return true;
    };
}
