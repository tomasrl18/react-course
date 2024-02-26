import { useEffect, useState } from "react"
import './App.css'
import { getRandomFact, getRandomImage } from './services/facts.js'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

export function App() {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState(null)

    useEffect(() => {
        getRandomFact().then(newFact => setFact(newFact))
    }, [])

    useEffect(() => {
        if (!fact) return
        
        getRandomImage(fact).then(newImageUrl => setImageUrl(newImageUrl))
    }, [fact])

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