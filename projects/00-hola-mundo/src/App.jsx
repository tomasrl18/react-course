import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard
                userName="raigal_tomas"
            >
                Tomás Raigal López
            </TwitterFollowCard>
            <TwitterFollowCard
                userName="adrian_marin_96"
            >
                Adrián Marín Chorro
            </TwitterFollowCard>
            <TwitterFollowCard
                userName="FuenSansano"
            >
                Fuensanta Sansano Montoya
            </TwitterFollowCard>
        </section>
    )
}