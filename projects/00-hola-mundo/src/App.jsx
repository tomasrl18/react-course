import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard
                userName="raigal_tomas"
                name="Tomás Raigal López"
                isFollowing={false}
            ></TwitterFollowCard>
            <TwitterFollowCard
                userName="adrian_marin_96"
                name="Adrián Marín Chorro"
                isFollowing
            ></TwitterFollowCard>
            <TwitterFollowCard
                userName="FuenSansano"
                name="Fuensanta Sansano Montoya"
                isFollowing={false}
            ></TwitterFollowCard>
        </section>
    )
}