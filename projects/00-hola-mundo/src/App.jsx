import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard
                isFollowing={false}
            >
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
                name=""
                isFollowing={false}
            >
                Fuensanta Sansano Montoya
            </TwitterFollowCard>
        </section>
    )
}