const CAT_ENDPOINT_RANDOM_FACT_URL = 'https://catfact.ninja/fact';

export const getRandomFact = () => {
    return fetch(CAT_ENDPOINT_RANDOM_FACT_URL)
    .then(res => res.json())
    .then(data => {
        const { fact } = data
        return fact;
    })
}

export const getRandomImage = (fact) => {
    const threeFirstWord = fact.split(' ', 3).join(' ')

    return fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50?color=red&json=true`)
        .then(res => res.json())
        .then(response => {
            const { url } = response
            return url
        });
}