export async function fetchArtistProfile(token, artistId) {
    const options = {
        headers: { Authorization: `Bearer ${token}` },

    };

    let aId = artistId.artistId

    const url = `https://api.spotify.com/v1/artists/${aId}`

    return await fetch(url, options).then(async (response) => await response.json())

}


