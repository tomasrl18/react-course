import { useEffect, useState } from "react"

const CAT_ENDPOINT_RANDOM_FACT_URL = 'https://catfact.ninja/fact';
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50?color=red&json=true`;
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

export function App() {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState(null)

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT_URL)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)

                const threeFirstWord = fact.split(' ', 3).join(' ')
                /*
                const firstThreeWords = fact.split(' ').slice(0, 3).join(' ')
                */

                fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50?color=red&json=true`)
                    .then(res => res.json())
                    .then(response => {
                        const { url } = response
                        setImageUrl(url)
                    });
            })
    }, [])

    return (
        <main>
            <h1>Kittys app</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`} />}
        </main>
    )
}