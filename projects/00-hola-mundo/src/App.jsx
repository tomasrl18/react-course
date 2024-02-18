import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const tomas = { userName: 'raigal_tomas', isFollowing: false }
    const adrian = { userName: 'adrian_marin_96', isFollowing: true }
    const fuensanta = { userName: 'FuenSansano', isFollowing: false }

    return (
        <section className='App'>
            <TwitterFollowCard { ...tomas } >
                Tomás Raigal López
            </TwitterFollowCard>
            <TwitterFollowCard
                userName="adrian_marin_96"
                isFollowing
            >
                Adrián Marín Chorro
            </TwitterFollowCard>
            <TwitterFollowCard
                userName="FuenSansano"
                isFollowing={false}
            >
                Fuensanta Sansano Montoya
            </TwitterFollowCard>
        </section>
    )
}