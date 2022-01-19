function authentication() {
    const localhost = `http://127.0.0.1:5500/success.html`;
    const decodeUrl = decodeURI(localhost);
    return `https://accounts.spotify.com/authorize?client_id=d9a8b2f7634d48549a496954be94156f&redirect_uri=${encodeURI(decodeUrl)}&response_type=token&scope=user-top-read`;
};

export default authentication;