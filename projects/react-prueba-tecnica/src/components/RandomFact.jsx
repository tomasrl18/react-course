import { useCatImage } from "../hooks/useCatImage.js"

export function RandomFact() {
    const { imageUrl } = useCatImage({ fact: 'cat' })

    return (
        <>
            {imageUrl && <img src={imageUrl} />}
        </>
    )
}