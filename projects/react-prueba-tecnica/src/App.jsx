import './App.css'
import { useCatImage } from "./hooks/useCatImage.js";
import { useCatFact } from "./hooks/useCatFact.js";
import { RandomFact } from './components/RandomFact.jsx';

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
                    src={imageUrl}
                    alt={`Image extracted using the first three words for ${fact}`}
                />
            }

            <RandomFact />
        </main>
    )
}