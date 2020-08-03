const getImagen =async()=>{
    try{
        const apiKey = 'avTsYiyj6zHIslCSqbSO0wJ9mKkxqo0n';
        const httpCall = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await httpCall.json();
        const {url}=data.images.original;
        const img = document.createElement('img');
        img.src =url;
        document.body.append(img);
        console.log(url);
    }catch(err){
        console.error(err);
    }

}

getImagen()
