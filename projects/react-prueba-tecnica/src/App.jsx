import { useEffect, useState } from "react"

const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50?color=red&json=true`;

export function App() {
    const [fact, setFact] = useState('lorem ipsum dolor sit amet, consectetur adipiscing elit.')

    useEffect(() => {
        fetch('https://catfact.ninja/fact')
            .then(res => res.json())
            .then(data => setFact(data.fact))
    }, [])

    return (
        <main>
            <h1>Kittys app</h1>
            <p>{fact}</p>
        </main>
    )
}