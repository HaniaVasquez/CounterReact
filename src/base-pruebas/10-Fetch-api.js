const apiKey = 'avTsYiyj6zHIslCSqbSO0wJ9mKkxqo0n';

const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

httpCall
    .then(answer => answer.json())
    .then(({data})=>{
        const {url}=data.images.original;
        const img = document.createElement('img');
        img.src =url;
        document.body.append(img);
        // console.log(data.images.original.url);
    })
    .catch(console.warn)