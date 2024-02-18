import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard
                userName="raigal_tomas"
                isFollowing={false}
            >
                <strong>Tomás Raigal López</strong>
            </TwitterFollowCard>
            <TwitterFollowCard
                userName="adrian_marin_96"
                isFollowing
            >
                <strong>Adrián Marín Chorro</strong>
            </TwitterFollowCard>
            <TwitterFollowCard
                userName="FuenSansano"
                isFollowing={false}
            >
                <strong>Fuensanta Sansano Montoya</strong>
            </TwitterFollowCard>
        </section>
    )
}