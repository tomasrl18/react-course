import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const formatUserName = (userName) => `@${userName}`

    return (
        <section className='App'>
            <TwitterFollowCard
                formatUserName={formatUserName}
                userName="raigal_tomas"
                name="Tomás Raigal López"
                isFollowing={false}
            ></TwitterFollowCard>
            <TwitterFollowCard
                formatUserName={formatUserName}
                userName="adrian_marin_96"
                name="Adrián Marín Chorro"
                isFollowing
            ></TwitterFollowCard>
            <TwitterFollowCard
                formatUserName={formatUserName}
                userName="FuenSansano"
                name="Fuensanta Sansano Montoya"
                isFollowing={false}
            ></TwitterFollowCard>
        </section>
    )
}