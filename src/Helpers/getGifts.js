export const getGifts = async(categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=lVJWK4PmcLkQj7eJQN3VrNxALm3kqGrw&q=${categoria}&limit=20`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifts = data.map( img => ({
                id: img.id,
                title: img.title,
                url:img.images.downsized_medium.url
            }));
    return gifts;
}
