import { useEffect, useState } from "react"
import './App.css'
import { getRandomFact } from './services/facts.js'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState(null)

    useEffect(() => {
        if (!fact) return
        
        const threeFirstWord = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50?color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setImageUrl(url)
            });
    }, [fact])

    return { imageUrl }
}

export function App() {
    const [fact, setFact] = useState()
    const { imageUrl } = useCatImage({ fact })

    useEffect(() => {
        getRandomFact().then(newFact => setFact(newFact))
    }, [])

    const handleClick = async () => {
        const newFact = await getRandomFact()
        setFact(newFact)
    }

    return (
        <main>
            <h1>Kittys app</h1>

            <button onClick={handleClick}>Get new fact</button>

            {fact && <p>{fact}</p>}
            {imageUrl &&
                <img
                    src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
                    alt={`Image extracted using the first three words for ${fact}`}
                />
            }
        </main>
    )
}