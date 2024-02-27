import { useEffect, useState } from "react"
import './App.css'
import { getRandomFact } from './services/facts.js'
import { useCatImage } from "./hooks/useCatImage.js";

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

const useCatFact = () => {
    const [fact, setFact] = useState()

    const refreshRandomFact = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }

    useEffect(refreshRandomFact, [])

    return { fact, refreshRandomFact }
}

export function App() {
    const { fact, refreshRandomFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = async () => {
        refreshRandomFact()
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